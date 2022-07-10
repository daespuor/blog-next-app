import React from "react";
import Layout from "../src/components/Layout";
import { useRouter } from "next/router";
import { Button } from "theme-ui";
import { home } from "../content";
import Hero from "../src/components/Hero";

export default function IndexPage({ content }) {
  const router = useRouter();

  function goToPosts() {
    router.push("/posts");
  }

  return (
    <Layout title="Ninja Blog | Home">
      <Hero hero={content.hero} />
      <section>
        {content.features.map(function toFeature(feature) {
          return (
            <article>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          );
        })}
      </section>
    </Layout>
  );
}

export function getStaticProps(ctx) {
  return {
    props: {
      content: ctx.preview ? home.draft : home.published,
    },
  };
}

IndexPage.defaultProps = {
  content: {
    hero: { title: "default title", body: "Default body" },
    features: { title: "default title", body: "Default body" },
  },
};
