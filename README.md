# Moho Events

📆 A management solution for events hosted by the good folks at [Moho](https://www.moho.co/).

> React, TypeScript, ReactRouter, Material-UI

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

## 🚸 Code Challenge

This repo is the result of a code challenge and follows these requirements:

- [x] 2 views
- [x] One form to add and store data; another form to edit them
- [x] The possibility to delete all elements displayed
- [x] Data storage should be done locally in the App
- [x] The App should be user-friendly and look nice
- [x] The concept should be original and different than a standard App – the kind of App that the client will buy immediately!

### Limitations

Here are a few of the limitations I created for myself or considered as implied for the code challenge:

- I elected to avoid using libraries like [react-storage-hooks](https://www.npmjs.com/package/react-storage-hooks) to solve the local-storage / useState challenges because I assumed this difficulty was deliberately included to be solved manually.
- Although local storage and a cloud database could have co-existed beneficially, I prioritized developing local storage during what time I had. In a real world context, though, a database connection will be crucial for team communication.

### Official Submission

This project was submitted at 4:08pm, October 8th of 2022. The state of the code at this time can be found at commit ID `7f4489c`.

## ⚙️ Technical Documentation

### 📝 Notes

- Because React is a SPA, it will fail by default to correctly render any route other than the main path (`/`). This is because the server will not be able to find the correct file to serve. To solve this, I've included `vercel.json` to specify that Vercel's build step should redirect all routes to the main path while not changing the URL. This allows React Router to then read the route and handle routing.

https://github.com/JamesMitofsky/moho-events/blob/8aeacb722b32a877f42924fe155dccd0091805b9/vercel.json#L2

- `Vite.js` is being used as the build tool namely for its developer experience. The hot reload speed does not reduce with project size, as is the case with `create-react-app`.

### 📦 Resources

- How to [add animations while using React Router 6](https://dev.to/fazliddin04/react-router-v6-animated-transitions-diy-3e6l)

## 🚀 Next Steps / Improvements

### Priorities

- [ ] Add form validation.
- [ ] Prevent the React Router styles from overruling MUI styles.
- [ ] Provide a more robust typing system code-side.
- [ ] Add settings route to allow for a manual delete of locally stored events (as a user-friendly alternative to clearing local storage in case of debugging challenges).

### Desirables

- [ ] Deploy either as a Statically Generated Site using a JAMstack approach or as a React Native app.

  - [ ] Deploy as a static site to a CDN like Vercel. Using Next.js with a build trigger could greatly increase the speed of the site. A build hook could be attached to any time a new event is submitted to a database, then leading to the site's automatic reconstruction. Though this would create a momentary inconsistency between the state of the site and the events submitted, event submissions are not so time sensitive that a two minute build step would be a problem.
  - [ ] Deploying as React Native app would help conserve battery life on mobile devices and allow for the use of native features like push notifications, which could help the catering staff keep track of the many moving parts of an event.

- [ ] Add alternative ways of filtering and viewing groups. For example, a calendar view.
- [ ] Add tests.
- [ ] Use Google Firestore and Auth to secure a sharable database.
