/** @jsxImportSource theme-ui */

import GithubIcon from "../src/components/githubIcon";
import Layout from "../src/components/Layout";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Signin = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const Icon = GithubIcon;

  useEffect(() => {
    if (session) {
      router.push("/app");
    }
  }, [session, router]);

  return (
    <Layout title="Ninja Blog | Sign in">
      <div style={{ marginTop: "50px" }}>
        <h1>Sign in</h1>
      </div>
      <div>
        <button
          sx={{ variant: "containers.signInButton" }}
          type="button"
          onClick={() => signIn("github")}
        >
          <Icon />
          Sign in using github
        </button>
      </div>
    </Layout>
  );
};

export default Signin;
