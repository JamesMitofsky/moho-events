# Moho Events

An elegant group management solution the wide range of events hosted by [Moho](https://www.moho.co/) any given day.

> React, TypeScript, ReactRouter, Material-UI

## Getting Started

Install dependencies, then run a development server.

```bash
npm i && npm run dev
```

## Development Thinking

### The Context

Moho currently uses a Google Spreadsheet as their events management solution.

> **Pro:** Spreadsheets are easy to update which data is included, allowing for quick iterations, keeping it aligned with Moho's evolving needs.

> **Con:** Restaurant staff have difficulty viewing the spreadsheet on their phones while they're hosting an event, and the need for data organization changes has stagnated.

### Story Driven Development

The following [user stories](https://www.interaction-design.org/literature/topics/user-stories) guided this project:

- As a restaurant staff member, I want to be able to see the events for the day so that I can prepare for them.
- As a server, I want to quickly access specific information about events from my phone so that I can provide the best service to my guests.
- As an event administrator, I want a clear flow for submitting and distributing event information.

### Next Steps / Improvements

- Deploy as a static site using Next.js to a CDN like Vercel. This would increase the speed of the site. A build trigger could be set up to hear when a database has received a new event and automatically rebuild the site.
- Add alternative ways of filtering and viewing groups. For example, a calendar view.
- Add tests.
- Use Google Firestore and Auth to secure a sharable database.

### Coding Task Limitations

- Didn't use a package to solve the LocalStorage state management problem because I assumed this difficulty was quite deliberately meant to be solved manually.
- There is no server connection or authentification because — although local storage and cloud connections could have co-existed beneficially — I wanted to prioritize my work with local storage for the scope of this task.
