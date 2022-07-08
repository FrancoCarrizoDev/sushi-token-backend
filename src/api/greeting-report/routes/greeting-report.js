module.exports = {
  routes: [
    {
      method: "GET",
      path: "/greeting-report",
      handler: "greeting-report.findAll",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/greeting-report",
      handler: "greeting-report.findAll",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
