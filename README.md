# Vite Server Side React

This project is a server-side rendered React application built using React library and other supporting libraries like Express, ReactDOMServer, and React Router. Some benefits of this setup include: improved SEO, page speed, and the user experience for slower internet connections.

## Getting started

To get started with this project, follow these steps:

1.  Clone the project repository from Github
2.  Install dependencies by running the command `npm install`
3.  Build the project by running the command `npm run build`
4.  Start the server by running the command `npm run start`

The server will start on port 3000 by default. You can access the server by navigating to `http://localhost:3000` in your web browser.

## Project structure

The project is structured as follows:

```bash
├── dist
│   └── assets
│       ├── bundle.js
│       └── styles.css
├── public
│   └── favicon.ico
│   └── robots.txt
│   └── vite.svg
├── src
│   ├── components
│   │   ├── Html.tsx
│   │   └── ...
│   ├── pages
│   │   ├── index.tsx
│   │   ├── about.tsx
│   │   └── ...
│   ├── utils
│   │   ├── hydrate.tsx
│   │   └── ...
│   ├── router.tsx
│   ├── server.tsx
│   └── ...
├── package.json
```

- `dist` - Contains the bundled JavaScript and CSS files generated by Vite.
- `public` - Contains the static files that are served by the server.
- `src` - Contains the source code of the React application.
- `components` - Contains the React components used to generate the HTML of the application.
- `pages` - Contains the pages for our React application.
- `utils` - Contains the utility functions used in the application.
- `server.tsx` - The entry point of the application.
- `package.json` - Contains the dependencies and build scripts for the application.

## Key Dependencies

The project has the following key dependencies:

- `Vite` - A build tool that enables fast and efficient development and production builds for modern web applications.
- `React` - A JavaScript library for building user interfaces.
- `ReactDOMServer` - A package that provides a way to render React components on the server.
- `Express` - A fast, un-opinionated, minimalist web framework for Node.js.
- `StaticRouter` - A component that is used to perform server-side rendering with React Router.
- `compression` - A middleware that compresses the response of the server before sending it to the client.
- `morgan` - A middleware that logs HTTP requests to the console.
- `helmet` - A middleware that sets HTTP headers to improve the security of the application.
- `cors` - A middleware that enables Cross-Origin Resource Sharing (CORS) for the application.

## Lighthouse

Lighouse score generated by Chrome Devtools:

[![Lighthouse Score](https://i.postimg.cc/bvtK22CB/Screenshot-2023-03-26-at-11-53-53-PM.png)](https://postimg.cc/v1GPJDdr)
[![Lighouse Details](https://i.postimg.cc/jS9p5hXf/Screenshot-2023-03-26-at-11-53-44-PM.png)](https://postimg.cc/RW7spK2C)

## Running the server in production

To run the server in production, run the command `npm run build` to build the project, followed by the command `npm run start` to start the server. It is recommended to use a process manager like PM2 or Docker to manage the server in production.

## License

This project is licensed under the MIT License.
