# Code Test

## Assignment

The application is setup with React Router containing two routes. The goal of
the assignement is to create these two pages based on the mockups mentioned in
each page section.

The data is fetched from
[Star Wars API](https://studio.apollographql.com/public/star-wars-swapi/home?variant=current)
with the already setup [urql](https://formidable.com/open-source/urql/) client.

The styling method is free of choice, it could be with css, scss, css-in-js or
other preferences.

- `/` - the home page
- `/person/:personId` - the person page

### Home page

This page should list all the people from the Star Wars API. Each person should
be linked to its own page.

![home](./docs/home.png)

### Person page

This page should contain overview of the player

- List of producers the person has worked with and how many times.
- Birth year
- Person species average height.
- Paginated list of person films containing:
  - Title.
  - Release Date.
  - Number of planets without water in the film.

![person](./docs/person.png)

## Setup

Install dependencies (using NPM)

```bash
$ npm run install
```

Download GraphQL Schema

```bash
$ npm run download-schema
```

Generate GraphQL Types (generated types will be in `src/generated/graphql.ts`

```bash
$ npm run codegen
```

Start dev mode

```bash
$ npm run dev
```
