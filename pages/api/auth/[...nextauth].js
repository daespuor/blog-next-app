import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";

export default (req, res) =>
  NextAuth(req, res, {
    providers: [
      GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GTIHUB_CLIENT_SECRET,
      }),
    ],
    pages: {
      signIn: "/signin",
    },
  });
