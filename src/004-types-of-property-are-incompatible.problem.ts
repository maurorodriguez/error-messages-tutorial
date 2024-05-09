const createRoutes = (config: {
  routes: {
    path: string;
    component: string;
  }[];
}) => {};

createRoutes({
  routes: [
    {
      path: "home",
      component: "HomeComponent",
    },
    {
      path: "about",
      component: "NewComponent",
    },
    {
      path: "contact",
      component: "ContactComponent",
    },
  ],
});
