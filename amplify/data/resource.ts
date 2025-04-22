import { a, defineData, type ClientSchema } from "@aws-amplify/backend";

const schema = a.schema({
  Stock: a.model({
    name: a.string(),
    symbol: a.string(),
    price: a.string(),
  }).authorization((allow) => [
    allow.authenticated().to(["read"]),
    allow.owner(),
  ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
});
