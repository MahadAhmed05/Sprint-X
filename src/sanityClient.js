import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "p2j5sjyc", // ⬅️ Replace with your Sanity Project ID
  dataset: "production", // ⬅️ Keep it "production" unless you changed it
  apiVersion: "2024-03-24", // ⬅️ Use a recent date
  useCdn: true, // ⬅️ Set to false if you need fresh data
  token: process.env.SANITY_TOKEN, // ⬅️ Only needed for secure writes
});
