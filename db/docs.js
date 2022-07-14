import { nanoid } from "nanoid";

export async function getOneDoc(db, fileId) {
  return db.collection("docs").findOne({ _id: fileId });
}

export async function getDocsByFolder(db, folderId) {
  return db.collection("docs").find({ folder: folderId }).toArray();
}

export async function createDoc(db, doc) {
  const newDoc = await db
    .collection("docs")
    .insertOne({ _id: nanoid(), createdAt: new Date().toDateString(), ...doc });

  return newDoc;
}

export async function updateDoc(db, id, updated) {
  await db.collection("docs").updateOne({ _id: id }, { $set: updated });

  const doc = db.collection("docs").findOne({ _id: id });

  return doc;
}
