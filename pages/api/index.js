import nc from "next-connect";
import cors from "cors";

const handler = nc()
  .use(cors())
  .get("*", (req, res) => {
    res.json({ message: "ok" });
  })
  .post("*", (req, res) => {
    res.json({ message: "posted" });
  });

export default handler;

/* export default function (req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ message: "hello" }));
} */
