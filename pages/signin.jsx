/** @jsxImportSource theme-ui */

import GithubIcon from "../src/components/githubIcon";
import Layout from "../src/components/Layout";

const Signin = () => {
  const Icon = GithubIcon;

  return (
    <Layout title="Ninja Blog | Sign in">
      <div style={{ marginTop: "50px" }}>
        <h1>Sign in</h1>
      </div>
      <div>
        <button
          sx={{ variant: "containers.signInButton" }}
          type="button"
          onClick={() => {}}
        >
          <Icon />
          Sign in using github
        </button>
      </div>
    </Layout>
  );
};

export default Signin;
