import nc from "next-connect";
import middleware from "../../../middleware/all";
import { docs } from "../../../db";

const handler = nc().use(middleware);

handler.put(async (req, res) => {
  const updatedDoc = await docs.updateDoc(req.db, req.query.id, req.body);
  res.send({ data: updatedDoc });
});

export default handler;
