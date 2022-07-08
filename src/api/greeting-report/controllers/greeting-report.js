"use strict";

module.exports = {
  async findAll(ctx, next) {
    try {
      console.log(ctx.req.method);
      // if (ctx.req.method === "POST") {
      //   const data = await strapi
      //     .service("api::greeting-report.greeting-report")
      //     .greetingCreate();
      //   ctx.body = data;
      // } else {
      //   const data = await strapi
      //     .service("api::greeting-report.greeting-report")
      //     .greetingReport();
      //   ctx.body = data;
      // }

      const data = await strapi
        .service("api::greeting-report.greeting-report")
        .greetingReport();
      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Page report controller error", { moreDetails: err });
    }
  },
};
