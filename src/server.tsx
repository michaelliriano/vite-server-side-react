import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";
import fs from "fs";
import path from "path";
import { Html } from "./components/Html";
import { StaticRouter } from "react-router";
import Router from "./router";
import compression from "compression";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

const PORT = process.env.PORT || 3000;

const app = express();

// Define the paths to the build and public directories
const BUILD_DIRECTORY = path.join(__dirname, "..", "dist", "assets");
const PUBLIC_DIRECTORY = path.join(__dirname, "..", "public");

let assetScript = "";

// Cache the contents of the assets directory
fs.promises.readdir(BUILD_DIRECTORY).then((files) => {
  assetScript = files.find((file) => file.includes("index")) || "";
});

// Set up middleware for logging and compression
app.use(morgan("combined"));
app.use(compression());

// Enable Cross-Origin Resource Sharing (CORS) middleware
app.use(cors());

// Set up security headers using helmet middleware
app.use(helmet({ hidePoweredBy: true }));

// Route for handling Content Security Policy (CSP) violation reports
app.post("/report-violation", (req, res) => {
  if (req.body) {
    console.log("CSP Violation: ", req.body);
  } else {
    console.log("CSP Violation: No data received!");
  }
  res.status(204).end();
});

// Serve static files from the build and public directories
app.use(express.static(BUILD_DIRECTORY, { index: false }));
app.use(express.static(PUBLIC_DIRECTORY, { index: false }));

// Server-side rendering
app.get("*", async (req, res) => {
  try {
    const html = await renderHTML(req.url);
    res.send(html);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Render the HTML
async function renderHTML(url: string) {
  const html = `<!DOCTYPE html>${ReactDOMServer.renderToString(
    <Html styles={undefined} asset={assetScript} ctx={null}>
      <StaticRouter location={url}>
        <Router />
      </StaticRouter>
    </Html>
  )}`;
  return html;
}

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`SSR Server | http://localhost:${PORT}`);
});
