# Moho Events

📆 A management solution for events hosted by the good folks at [Moho](https://www.moho.co/).

> React, TypeScript, ReactRouter, Material-UI

## 🧑‍💻 Getting Started

Install dependencies, then run a development server.

```bash
npm i && npm run dev
```

## 🖼 Context

Moho currently uses a Google Spreadsheet as their events management solution.

### 💭 The Challenge

While a spreadsheet let staff quickly iterate on how to organize information, it has outlived this purpose but remains difficult for waitstaff to quickly scan for important guest information while on the move with their smartphones. This difficulty has likewise been felt by administrators who are in a long-term relationship with an improvised solution.

### 🍀 The Opportunity

1. Increase the efficiency of Moho's waitstaff by providing a mobile-friendly, intuitive solution for tracking events.
2. Simplify the management process for administrators charged with documenting the event details.

## 🙋 User Stories

This project was guided by the following [user stories](https://www.interaction-design.org/literature/topics/user-stories):

- As a restaurant staff member, I want to be able to see the events for the day so that I can prepare for them.
- As a server, I want to quickly access specific information about events from my phone so that I can provide the best service to my guests.
- As an event administrator, I want a clear flow for submitting and distributing event information.

## 🚀 Next Steps / Improvements

- Deploy as a static site using Next.js to a CDN like Vercel. This would increase the speed of the site. A build trigger could be set up to hear when a database has received a new event and automatically rebuild the site.
- Add alternative ways of filtering and viewing groups. For example, a calendar view.
- Add tests.
- Use Google Firestore and Auth to secure a sharable database.

## 🚸 Code Challenge Limitations

- I didn't use a package to solve the LocalStorage state management problem because I assumed this difficulty was quite deliberately meant to be solved manually.
- There is no server connection or authentification because — although local storage and cloud connections could have co-existed beneficially — I wanted to prioritize my work with local storage for the scope of this task.
