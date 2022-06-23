import React from "react";
import Layout from "../src/components/Layout";
import { useRouter } from "next/router";
import { Button } from "theme-ui";

export default function IndexPage() {
  const router = useRouter();

  function goToPosts() {
    router.push("/posts");
  }

  return (
    <Layout title="Ninja Blog | Home">
      <h2 sx={{ color: "#333", paddingBottom: "20px", textAlign: "center" }}>
        Home
      </h2>
      <p sx={{ color: "#777" }}>Lorem ipsum</p>
      <p sx={{ color: "#777" }}>Lorem ipsum</p>
      <Button variant="primary" onClick={goToPosts} sx={{ mx: "auto" }}>
        Posts
      </Button>
    </Layout>
  );
}
