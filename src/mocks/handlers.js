import { rest } from "msw";

export default [
  rest.get("/users", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          firstName: "Valentina",
          lastName: "Rossi",
          phone: "+393333333333",
          email: "vrossi@coloombus.com",
        },
        {
          id: 2,
          firstName: "Marco",
          lastName: "Russo",
          phone: "+392224444444",
          email: "mrusso@coloombus.com",
        },
        {
          id: 3,
          firstName: "Federica",
          lastName: "Valenti",
          phone: "+393395555555",
          email: "fvalenti@coloombus.com",
        },
      ])
    );
  }),
];
