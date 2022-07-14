import { getSession, useSession } from "next-auth/react";
import React, { useState } from "react";
import { Alert } from "theme-ui";
import { connectToDB, docs, folder } from "../../db";
import Layout from "../../src/components/Layout";

export default function App({ folders, activeFolder, activeDocs, activeDoc }) {
  const { data: session, status } = useSession();
  const [allFolders, setAllFolders] = useState(folders);
  console.log(activeFolder, activeDocs, activeDoc);

  async function handleNewFolder(evt) {
    evt.preventDefault();
    const name = evt.target.elements.folder.value;
    const res = await fetch(`${process.env.NEXT_PUBLIC_POSTS_URL}/api/folder`, {
      method: "POST",
      body: JSON.stringify({ name }),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (res.status == 200) {
      const data = await res.json();
      setAllFolders((state) => [...state, data.data]);
    }
  }

  return (
    <Layout title="Ninja Blog | App">
      {status != "loading" && !session && (
        <Alert variant="error">
          <h1>Error!</h1>
          <p>You don't have permissions to be here</p>
        </Alert>
      )}
      {status != "loading" && session && (
        <>
          <h1>My Folders</h1>
          <form onSubmit={handleNewFolder}>
            <label>
              Folder Name
              <input name="folder" />
            </label>
            <button type="submit">Submit</button>
          </form>
          <section>
            <ul>
              {allFolders.map(function toFolder(folder) {
                return (
                  <li key={folder._id}>{JSON.stringify(folder, null, 2)}</li>
                );
              })}
            </ul>
          </section>
        </>
      )}
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const { db } = await connectToDB();
  const session = await getSession(ctx);

  const props = {};

  if (!session) {
    return {
      props: {
        session,
      },
    };
  }
  props.folders = await folder.getFolders(db, session.user.id);
  if (ctx.params.id) {
    props.activeFolder = props.folders.find(function byFolderId(folder) {
      return folder._id == ctx.params.id[0];
    });
    props.activeDocs = await docs.getDocsByFolder(db, props.activeFolder._id);
    if (ctx.params.id.length > 1) {
      props.activeDoc = props.activeDocs.find(function byDocId(doc) {
        return doc._id == ctx.params.id[1];
      });
    }
  }

  return {
    props: {
      ...props,
      session,
    },
  };
}
