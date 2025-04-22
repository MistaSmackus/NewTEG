import { a, defineData } from "@aws-amplify/backend";

export const data = defineData({
  schema: a.schema({
    Stock: a.model({
      name: a.string(),
      symbol: a.string(),
      price: a.string(),
    }).authorization((allow) => [
      allow.authenticated().to(["read"]),
      allow.owner(), // optional but common
    ]),
  }),
});
