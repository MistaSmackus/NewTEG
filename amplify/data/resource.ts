import { a, defineData } from "@aws-amplify/backend";

export const data = defineData({
  schema: a.schema({
    Stock: a.model({
      name: a.string(),
      symbol: a.string(),
      price: a.string(),
    }),
  }),
});
