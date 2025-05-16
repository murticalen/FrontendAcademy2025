# Sofascore Frontend Academy 2025 - Project

Sofascore Academy final project includes all knowledge and skills that you gathered during all lectures and homeworks. Additionally, through implementation of Sofascore models and functionalities it brings the Sofascore domain closer to you.
The goal of the final project is to implement a mini Sofascore application, which has all the main elements from Sofascore, but with much fewer details and data.

Further in this document:

- [Technologies](#technologies)
- [Design](#design)
- [Checkpoints](#checkpoints)
- [Basic domain introduction](#domain)
- [Project structure tips](#project-structure)
- [User stories](#user-stories)
- [API description](#api)
- [Deployment instructions](#deployment)
- [Deadline](#deadline)

## Technologies

Technologies used in project:

- [React.js](https://reactjs.org/) and [Next.js](https://nextjs.org/docs/getting-started)
- [Panda CSS](https://panda-css.com/) - styling
- [SWR](https://swr.vercel.app/) - for client side fetching and refreshing (if needed)

There are constraints regarding UI libraries and frameworks. This project is a great opportunity to learn foundational CSS and HTML in combination with a UI library. Those skills should come in handy throughout your career.

To initialize your project, please look at the [Pokemon demo repository](https://github.com/petarcorluka86/pokemon-demo).

If you need additional assistance, feel free to contact us. Especially if there are any errors you haven't seen already.

## Design

This year, no design will be provided for you. You are obligated to come up with your own design solution, but we can answer any questions and give you tips and tricks.

You can make your own simple UI library (don't overcomplicate it and use too much time) or style components directly without extracting a shared library. As inspiration use  [Sofascore](https://www.sofascore.com/) or any other live scores app, e.g. [Fotmob](https://www.fotmob.com/), [Forza](https://forzafootball.com/), [Goal.com](https://www.goal.com/en-gb/live-scores), [Livescore](https://www.livescore.com/en/), etc.

## Checkpoints

There will be one mandatory checkpoint between May 26th and June 3rd. We will arrange a Slack call and discuss your project status. You can also visit Sofascore office for the checkpoint if we are present there.

Feel free to contact us on Slack when you've added something new, have a question, and we can discuss it on a call or live.

Use checkpoints to get feedback, ask about difficulties with the domain, API, design, or development. Checkpoint call(s) could save you a lot of time.

## Domain

The domain model will mimic the one used at Sofascore. It is simplified for your convenience. 
In this chapter, we will first describe the basic entities used and their connection.

Basic entities are:

- **Sport** - Entity describing a sport - unlike other entities which are referenced by id, sport is referenced by its `slug` property, e.g. football, american-football
- **Tournament** - Entity describing single competition (a league, a cup, ...). Examples of tournaments: English Premier League, Uefa Champions League , Roland Garros, ...
- **Event** - Event is an entity representing a single match. Events are usually displayed as a part of event lists from where users can choose a single event and get its details. Examples of an event: Real Madrid - Barcelona, Dinamo - Hajduk, ...
- **Team** - Competitor in an event, i.e. a club, national team or a tennis player. E.g. Bayern Munich, Croatia (football), Croatia (basketball).

If You find the domain confusing, feel free to contact us, and we will explain it further.

## Project Structure

This chapter is informational and opinionated, so as such can be taken as advice.

In our opinion, a very good structure for a smaller project is to divide it in these folders placed in the `src` folder.

Definitions:

- `app` - File-system based routing provided by Next.js
- `model` - Types of basic entities obtained by backend API
- `components` - Components that are domain agnostic and could exist in any application regardless of its domain (e.g. Button, Checkbox, ...). Those components are basic building blocks of application and more complex modules.
- `api` - Api folder contains route definitions and API methods (e.g. `postLogin`, `getUser`, ...). The api also includes utilities specific to API (e.g. `getJson`, `postJson`, `parseResponse`, ...)
- `utils` - Utilities are common helpers, types, hooks, test boilerplate (e.g. `numberSort`, ...)
- `modules` - Modules are domain-bound units that serve a specific purpose (e.g. LoginForm, UserProfile, Links). Modules usually produce side effects and are responsible for the logic and presentation part of an application. Each module can have separate `components` folder which contain its building blocks. Other above-mentioned folders can also be in a module, just like `components` folder.

At Sofascore, we are migrating to [Feature-Sliced Design](https://feature-sliced.github.io/documentation/) which is, in our opinion, a better project structure, but it is an overkill for this project.

## User stories

User stories are sentences from the user's perspective. They can be pictured as user's requirements because they don't specify the technical side of the project. The technical side is left to the developers (this includes design too).

General story representing user flow:
The user comes to the application and sees the list of tournaments fetched. Users can then navigate to the tournament page of the desired tournament. On the tournament page, users can see events available for the selected tournament. Users can refresh the browser and the same tournament page should be displayed (tournament page has a separate route describing specific tournament). From the tournament page, users can navigate to the specific event details page. On the event, details page the user can find detailed data associated with the event.

User stories are bellow: Stories in the **bold** are required, stories in the _italic_ are a further improvement, developers will decide if any of them should be implemented. You can also add extra stories which you think are fitting.

You are free to make any modifications you see fit. These stories were extracted from previous design solution for this project.

Basically, the only thing that's required is having a header/footer, list of events for sport and showing a little bit of data for the selected event. Not too much, we hope. :)

### Stories:

#### General UI

1. **User should be able to use the app on the mobile device**
2. **User should be able to use the app on the computer screen**
3. **There are header, footer and main in the page**
4. _User can change application visual theme (dark / light)_
5. _UI is visually stable and there is no flickering. User can first see content loaders or UI is smartly drawn by development._
6. _User can change the sport of the page (e.g. tennis, ice-hockey or basketball) and all features work for all sports_

#### Sport page

1. **User can see all tournaments for the selected sport**
2. **User can see all events (Event Cells) for the selected date**
3. **User can click on the event**
   - **On mobile, the click should open event page**
   - **On desktop, the click should open the event in the widget to the right**
4. _On mobile, the user can switch between leagues and matches views (matches is default and required)_
5. _User can click on tournament to open the tournament page_
6. _User can change the date for the sport events_

#### Event Cell - an item in the list of events

1. **User can see start time of the event, teams and scores**
2. _Event status is displayed and status colors are correctly handled_
3. _Team colors are correctly handled given the match outcome_
4. _User can add/remove event(s) to Tracked events_

#### Event Page / event widget - widget is what opens on [Sofascore](https://www.sofascore.com) when you click on an event cell on desktop main page

1. **User can see teams playing in the event, score (if exists), start date and time**
2. **Event widget links to the event page**
3. _Event incidents are displayed_
4. _User can add/remove the event to Tracked events_

#### _Standings_

1. _For selected tournament/team/event in a given sport, standings are displayed corrently_

#### _Matches_

1. _For selected tournament/team/player, a user can see their matches. The pagination and general feel are similar/identical for all entities._

#### _Team page_

1. _Team details contains all the information_
2. _Matches tab is displayed for the team, user can select the match shown in widget_
3. _Standings tab is displayed for the team, user can select for which competition the standings is shown_
4. _Players tab is displayed for the team_

#### _Player page_

1. _There is a player page which displays player information_
2. _Matches tab is displayed for the player, user can select the match shown in widget_

#### _Tournament page_

1. _There is a tournament page_
2. _Matches tab is displayed for the tournament, user can select the match shown in widget_
3. _Standings tab is shown for the tournament_

#### _Tracked Events Page_

- _The page looks like Sport page (tournaments, event list and widget), but shows user's tracked events_
- _User can see all tracked events_
- _User can remove event(s) from Tracked events_
- _Events are grouped into "previous" (older than today), "current" (today and tomorrow) and "next" (after tomorrow) groups. Those groups are navigated like they are on [Sofascore's favorites page](https://www.sofascore.com/favorites)._

#### _Settings page_

1. _There is a settings page with about section_
2. _User can change app's theme on settings page_
3. _User can change langauage of the app_
4. _User can change date format in the app, or date format is changed via language change_

#### _Search_
1. _User can search teams in the app_
2. _User can search players in the app_

## API

Applications should use the API designed for this project, the documentation for which is available [on this link](https://academy-backend.sofascore.dev/api/docs). The documentation contains the list of all routes and docs for what each route returns. API basename is `https://academy-backend.sofascore.dev`.

For example, route to fetch all sports described [here](https://academy-backend.sofascore.dev/api/docs#tag/Sport/operation/get_app_sports) is `https://academy-backend.sofascore.dev/sports`.

## Deployment

**Deployment is optional.**

When the application gets to the final stage, it would be nice to think about the deployment possibility. Deploying the application will allow users to access it via an Internet connection on some URL.

Suggested free deployment providers are:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [Heroku](https://heroku.com)

Deployment is the final bonus if you have finished everything.

## Deadline & presentation

### DEADLINE: June 10th

You will present your project on June 10th in the regular lecture slot (4PM - 6PM).

The deadline for the project is your presentation date. As far as we are concerned, you can change your code until the exact second you start presenting.

Your project will not be code-reviewed as the homeworks before it were, but please make a PR.

We suggest you to finish the mandatory tasks as soon as possible, since there are few of them, to make sure you pass the academy. And after you have finished them, add everything else later as a cherry on top.

Estimation:
- Mandatory tasks: < 1 day
