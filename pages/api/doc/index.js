import nc from "next-connect";
import middleware from "../../../middleware/all";
import { docs } from "../../../db";

const handler = nc().use(middleware);

handler.post(async (req, res) => {
  const newDoc = await docs.createDoc(req.db, {
    ...req.body,
    createdBy: req.user.id,
  });
  res.send({ data: newDoc });
});

export default handler;
