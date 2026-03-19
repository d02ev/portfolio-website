# Portfolio Website

`portfolio-website` is the public UI for the portfolio system. It turns the data and resume artifacts managed by `portfolio-api` into a simple website someone can browse, understand quickly, and use to download the latest generated resume.

## Problem Statement

I did not want my portfolio to be a static site that drifts away from the backend systems powering it. I wanted a frontend that stays connected to the same source of truth that manages content, experience, projects, and resume delivery.

That means the site needs to do two things well:

- present portfolio information clearly
- expose the latest resume artifact without making visitors navigate the underlying pipeline

## Why It Matters

- It gives the overall system a clear public-facing surface.
- It keeps the website and resume pipeline aligned through one backend.
- It makes the end result of the automation useful to an actual visitor, not just an internal workflow.

## Role In The System

`portfolio-website` is the consumer-facing layer:

1. it fetches public portfolio content from `portfolio-api`
2. it renders about, experience, links, and project sections
3. it fetches the latest generated resume URL from the API
4. it lets the visitor download or open that PDF

## How It Works

The app is a Vite + React single-page site that:

- fetches public data from `portfolio-api`
- stores that data in client-side Zustand stores
- renders the page sections from API-driven content
- handles resume downloads with browser-aware fallbacks

## Quickstart

Create a `.env` file:

```bash
VITE_API_BASE_URL=http://localhost:5000/api
```

Then run:

```bash
npm install
npm run dev
```

Other useful commands:

- `npm run build`
- `npm run preview`
- `npm run lint`
- `npm run test:run`
