import { createClient } from "redis";

const client = createClient();

client.on("error", (err) => console.error("Redis Error:", err));

try {
  await client.connect();
  console.log("Connected to Redis");
} catch (err) {
  console.error("Redis connection failed:", err);
}

export default client;
