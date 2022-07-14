import { MongoClient, ServerApiVersion } from "mongodb";

global.mongo = global.mongo || {};

export async function connectToDB() {
  if (!global.mongo.client) {
    global.mongo.client = new MongoClient(process.env.NEXT_DB_URL, {
      connectTimeoutMS: 10000,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1,
    });
    console.log("starting db connection...");
    await global.mongo.client.connect();
    console.log("db connected");
  }
  const db = global.mongo.client.db("blogapp");
  return { db, dbClient: global.mongo.client };
}
