"use strict";

module.exports = {
  greetingReport: async () => {
    try {
      const entries = await strapi.entityService.findMany(
        "api::greeting.greeting",
        {
          fields: ["id", "user"],
        }
      );
      return {
        entries,
      };
    } catch (err) {
      return err;
    }
  },
  greetingCreate: async () => {
    try {
      const newUser = await strapi.entityService.create(
        "api::greeting.greeting",
        {
          data: {
            user: "nuevouser",
          },
        }
      );
      return {
        newUser,
      };
    } catch (err) {
      return err;
    }
  },
};
