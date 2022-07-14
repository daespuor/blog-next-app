import { nanoid } from "nanoid";

export async function createFolder(db, folder) {
  const newFolder = await db.collection("folders").insertOne({
    _id: nanoid(),
    ...folder,
    createdAt: new Date().toDateString(),
  });

  return newFolder;
}

export async function getFolders(db, userId) {
  return db.collection("folders").find({ createdBy: userId }).toArray();
}

export async function getFolderById(db, folderId) {
  return db.collection("folders").findOne({ _id: folderId });
}
