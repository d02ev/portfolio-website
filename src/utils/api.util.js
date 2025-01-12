import axios from "axios";
import { GIT_API_BASE_URL } from "../helpers/constants.helpers";

const bearerToken = `Bearer ${import.meta.env.VITE_GIT_ACCESS_TOKEN}`;
const accept = 'application/vnd.github+json';
const headers = {
  Authorization: bearerToken,
  Accept: accept,
  'X-GitHub-Api-Version': '2022-11-28'
}

const generateRepoUrl = (repoName) => {
  return `https://www.github.com/${import.meta.env.VITE_GIT_USERNAME}/${repoName}`;
}

const fetchRepoLanguages = async (repoName) => {
  const url = `${GIT_API_BASE_URL}/repos/${import.meta.env.VITE_GIT_USERNAME}/${repoName}/languages`;
  const languages = (await axios.get(url, { headers })).data;

  return Object.keys(languages);
}

export const fetchRepoList = async () => {
  const repoUrl = `${GIT_API_BASE_URL}/user/repos`;
  const repos = (await axios.get(repoUrl, { headers })).data;
  const repoPromises = repos.map(async repo => {
    if (!repo.fork) {
      const languages = await fetchRepoLanguages(repo.name);
      return {
        name: repo.name,
        description: repo.description,
        languages: languages.join(', '),
        forks: repo.forks_count,
        stars: repo.stargazers_count,
        watchers: repo.watchers_count,
        url: generateRepoUrl(repo.name),
      };
    } else {
      return null;
    }
  });

  const repoInfo = await Promise.all(repoPromises);
  return repoInfo.filter(repo => repo !== null);
};
