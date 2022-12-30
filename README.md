# Moho Events

📆 A management solution for events hosted by the good folks at [Moho](https://www.moho.co/).

> React, TypeScript, Material UI, Firebase Auth & Cloud Storage, & React Router

## 🧑‍💻 Getting Started

Install dependencies, then run a development server.

```bash
npm i && npm run dev
```

## 🖼 Project Context

Moho currently uses a Google Spreadsheet to create and internally manage events among the staff. This principally involves administrative staff creating events and the catering team reading event details throughout the day on their phones.

### 🙋 User Stories

This project was guided by the following [user stories](https://www.interaction-design.org/literature/topics/user-stories):

> 🧑‍🍳 As a restaurant staff member, I want to be able to see the events for the day so I can prepare for them.

> 🤵 As a server, I want to quickly access specific information about events from my phone so I can know the time, place, and group that needs to be served next.

> 🧑‍💼 As an event administrator, I want a clear flow for event submission and distribution so I can easily document and share my work.

### 💭 The Challenge

Though a spreadsheet initially allowed for quick iterating of management flows for Moho events, it has outgrown this purpose and left administrators in a long-term relationship with an improvised solution. It likewise creates difficulties for the catering staff who have trouble quickly scanning a spreadsheet while on the move with their smartphones.

### 🍀 The Opportunity

1. Increase the efficiency of Moho's catering staff by providing a mobile-friendly, intuitive solution for tracking events.
2. Simplify the management process for administrators charged with documenting the event details.

## ⚙️ Technical Documentation

### 🔐 Authentication

Using Google Firebase, users and their roles are stored in a database using this [schema](https://github.com/JamesMitofsky/moho-access#database-structure). The database is kept secure by internal rules which restrict access to specific user roles, and user roles are assignable by users with the `admin` role or [this cloud function](https://github.com/JamesMitofsky/moho-auth-functions) when any user signs up.

### 📝 Notes

- Because React is a SPA, it will fail by default to correctly render any route other than the main path (`/`). This is because the server will not be able to find the correct file to serve. To solve this, I've included `vercel.json` to specify that Vercel's build step should redirect all routes to the main path while not changing the URL. This allows React Router to then read the route and handle routing.
- `Vite.js` is being used as the build tool namely for its developer experience. The hot reload speed does not reduce with project size, as is the case with `create-react-app`.

### 📦 Resources

- How to [add animations while using React Router 6](https://dev.to/fazliddin04/react-router-v6-animated-transitions-diy-3e6l)

## 🚀 Next Steps / Improvements

Track this project in [Gitub Projects](https://github.com/users/JamesMitofsky/projects/1).
