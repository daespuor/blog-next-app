import nc from "next-connect";
import posts from "../../../src/data/data";

const getPost = function getPost(id) {
  return posts.find(function byId(post) {
    return post.id == parseInt(id);
  });
};

const handler = nc()
  .get((req, res) => {
    const post = getPost(req.query.id);

    if (!post) {
      res.statusCode = 404;
      res.json({ error: { message: "post not found" } });
    }

    res.json({ data: post });
  })
  .patch((req, res) => {
    const post = getPost(req.query.id);
    if (!post) {
      res.statusCode = 404;
      res.json({ error: { message: "post not found" } });
    }
    const i = posts.findIndex((n) => n.id === parseInt(req.query.id));
    const updated = { ...post, ...req.body };

    posts[i] = updated;
    res.json({ data: updated });
  })
  .delete((req, res) => {
    const post = getPost(req.query.id);
    if (!post) {
      res.statusCode = 404;
      res.json({ error: { message: "post not found" } });
    }
    const i = posts.findIndex((n) => n.id === parseInt(req.query.id));

    posts.splice(i, 1);

    res.json({ data: req.query.id });
  });

export default handler;
