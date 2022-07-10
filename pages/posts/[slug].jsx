import Layout from "../../src/components/Layout";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { useRouter } from "next/router";
import Spinner from "../../src/components/Spinner";
import { posts as postsFromCMS } from "../../content";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

export default function PostPage({ source, frontmatter }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Layout title={`Ninja Blog | Post #`}>
        <Spinner />;
      </Layout>
    );
  }

  return (
    <Layout title={`Ninja Blog | Post ${frontmatter.title}`}>
      <h1>{frontmatter.title}</h1>
      <MDXRemote {...source} />
    </Layout>
  );
}

export function getStaticPaths() {
  const postsPath = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsPath);
  const filePosts = filenames.map(function toPostData(filename) {
    const postPath = path.join(postsPath, filename);
    const postData = fs.readFileSync(postPath, "utf-8");
    const { data } = matter(postData);
    return data;
  });

  const slugs = filePosts.map(function toSlug(post) {
    return {
      params: { slug: post.slug },
    };
  });

  return {
    paths: slugs,
    fallback: true, // You need to set fallback true if you want to see previews, because if not is going to throw a 404
  };
}

export async function getStaticProps({ params, preview }) {
  try {
    const filePath = path.join(process.cwd(), "posts", `${params.slug}.mdx`);
    var post = fs.readFileSync(filePath, "utf-8");
  } catch {
    const cmdPosts = (
      preview ? postsFromCMS.draft : postsFromCMS.published
    ).map(function toPost(post) {
      return matter(post);
    });
    const matchedPost = cmdPosts.find(function bySlug(post) {
      return post.data.slug == params.slug;
    });
    post = matchedPost?.content;
  }

  const { data, content } = matter(post);
  const mdxString = await serialize(content, {
    scope: data,
    mdxOptions: {
      development: true,
    },
  });

  return {
    props: {
      source: mdxString,
      frontmatter: data,
    },
  };
}
