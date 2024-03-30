import React from "react";
import ReactDOMServer from "react-dom/server";
import {
  StaticRouterProvider,
  createStaticHandler,
  createStaticRouter,
} from "react-router-dom/server";
import { routes } from "./routes";

// https://reactrouter.com/en/main/routers/create-static-handler
export async function render(url: string) {
  const handler = createStaticHandler(routes);
  const fakeURL = `http://foo/${url}`;
  const context = await handler.query(new Request(fakeURL));
  if (context instanceof Response) {
    throw context;
  }
  const router = createStaticRouter(handler.dataRoutes, context);

  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouterProvider router={router} context={context} />
    </React.StrictMode>
  );
}
