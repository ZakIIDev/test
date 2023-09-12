import { Elysia } from "elysia";
import { yoga } from "@elysiajs/graphql-yoga";
import { cors } from "@elysiajs/cors";

import schema from "@/schema";
import { connect } from "mongoose";

await connect(Bun.env.DATABASE_URL as string).then(() =>
  console.log("Mongodb connected")
);

const app = new Elysia().use(yoga(schema)).use(cors()).listen(8080);

console.log(
  `Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
