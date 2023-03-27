import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import { Helmet } from "react-helmet";

export function Html(props: {
  children?: any;
  title?: string;
  styles: any;
  asset?: string;
  ctx: any;
  meta?: { name: string; content: string }[];
}) {
  const {
    children,
    meta,
    styles,
    asset,
    ctx,
    title = "Server Side React",
  } = props;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={title} />
        {meta &&
          meta.map((tag) => (
            <meta key={tag.name} name={tag.name} content={tag.content} />
          ))}
        {styles}

        <title>{title}</title>
      </head>

      <body>
        <div
          id="root"
          dangerouslySetInnerHTML={{
            __html: ReactDOMServer.renderToString(children),
          }}
          data-props={JSON.stringify(ctx)}
        />
        <script type="module" src={asset}></script>
      </body>
    </html>
  );
}
