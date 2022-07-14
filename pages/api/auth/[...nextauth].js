import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
import { connectToDB, docs, folder } from "../../../db";

export default async (req, res) =>
  NextAuth(req, res, {
    session: {
      strategy: "database",
    },
    providers: [
      GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GTIHUB_CLIENT_SECRET,
      }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
      signIn: "/signin",
    },
    adapter: MongoDBAdapter(await (await connectToDB()).dbClient),
    callbacks: {
      session({ session, user }) {
        if (user) {
          session.user.id = user.id;
        }
        return session;
      },
      async jwt({ token, user, isNewUser }) {
        console.log(token, user, "my token user");
        const { db } = await connectToDB();

        if (db && user && isNewUser) {
          const newFolder = await folder.createFolder(db, {
            createdBy: String(user.id),
            name: "Getting Started",
          });
          await docs.createDoc(db, {
            name: "Start Here",
            folder: newFolder.insertedId,
            createdBy: String(user.id),
            content: {
              version: "2.8.90",
            },
          });
        }

        if (user) {
          token.id = user.id;
        }

        return token;
      },
    },
  });
