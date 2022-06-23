import Link from "next/link";
import Layout from "../src/components/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";

function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <Layout title="Ninja Blog | Page not found">
      <div sx={{ textAlign: "center" }}>
        <h2>Ooops...</h2>
        <p>The page cannot be found</p>
        <p>
          Go to the{" "}
          <Link href="/">
            <a
              sx={{
                color: "#4979ff",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Home Page
            </a>
          </Link>
        </p>
      </div>
    </Layout>
  );
}

export default NotFound;
