import nc from "next-connect";
import posts from "../../../src/data/data";

const handler = nc()
  .get((req, res) => {
    res.json({ data: posts });
  })
  .post((req, res) => {
    const post = {
      ...req.body,
      id: Date.now(),
    };

    posts.push(post);
    res.json({ data: post });
  });

export default handler;
