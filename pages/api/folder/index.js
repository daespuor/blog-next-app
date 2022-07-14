import nc from "next-connect";
import middleware from "../../../middleware/all";
import onError from "../../../middleware/error";
import { folder } from "../../../db";

const handler = nc({ onError }).use(middleware);

handler.post(async (req, res) => {
  const newFolder = await folder.createFolder(req.db, {
    ...req.body,
    name: req.body.name,
    createdBy: req.user.id,
  });
  const currentFolder = await folder.getFolderById(
    req.db,
    newFolder.insertedId
  );
  res.send({ data: currentFolder });
});

export default handler;
