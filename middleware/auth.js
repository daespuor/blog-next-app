import { getToken } from "next-auth/jwt";
import { getSession } from "next-auth/react";

export default async (req, res, next) => {
  const session = await getSession({
    req,
  });

  if (session) {
    // Signed in
    req.user = session.user;
    next();
  } else {
    // Not Signed in
    res.status(401);
    res.end();
  }
};
