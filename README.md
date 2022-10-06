# Moho Events

📆 A management solution for events hosted by the good folks at [Moho](https://www.moho.co/).

> React, TypeScript, ReactRouter, Material-UI

## 🧑‍💻 Getting Started

Install dependencies, then run a development server.

```bash
npm i && npm run dev
```

## 🖼 Context

Moho currently uses a Google Spreadsheet to create and internally manage events among the staff. This principally involves administrative staff creating events and the catering team reading event details throughout the day on their phones.

### 💭 The Challenge

While a spreadsheet initially allowed for easy iteration of data organization options, it has since outgrown this purpose, leaving administrators in a long-term relationship with an improvised solution. It likewise creates difficulties for the catering staff who have trouble quickly scanning a spreadsheet while on the move with their smartphones.

### 🍀 The Opportunity

1. Increase the efficiency of Moho's catering staff by providing a mobile-friendly, intuitive solution for tracking events.
2. Simplify the management process for administrators charged with documenting the event details.

### 🙋 User Stories

This project was guided by the following [user stories](https://www.interaction-design.org/literature/topics/user-stories):

- As a restaurant staff member, I want to be able to see the events for the day so that I can prepare for them.
- As a server, I want to quickly access specific information about events from my phone so that I can provide the best service to my guests.
- As an event administrator, I want a clear flow for submitting and distributing event information.

## 🚀 Next Steps / Improvements

- Deploy as a static site using Next.js to a CDN like Vercel. This would increase the speed of the site. A build trigger could be set up to hear when a database has received a new event and automatically rebuild the site.
- Add alternative ways of filtering and viewing groups. For example, a calendar view.
- Add tests.
- Use Google Firestore and Auth to secure a sharable database.

### 🚸 Code Challenge Limitations

Some of these improvements are related to the nature of this code challenge. Here are a few of the limitations I created for myself or considered as implied:

- I elected to avoid using libraries like [react-storage-hooks](https://www.npmjs.com/package/react-storage-hooks) to solve the local-storage / useState challenges because I assumed this difficulty was deliberately included to be solved manually.
- Although local storage and a cloud database could have co-existed beneficially, I wanted to prioritize my local storage in the time devoted to this task. In a team context, a database connection will be critical for the smooth functioning of an event management platform like this one.
