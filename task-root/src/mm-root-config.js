import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === '/',
});

registerApplication({
  name: "@mm/task-create",
  app: () => System.import("@mm/task-create"),
  activeWhen: (location) => location.pathname === '/task',
});

start({
  urlRerouteOnly: true,
});
