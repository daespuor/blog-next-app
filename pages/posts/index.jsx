import Layout from "../../src/components/Layout";
import PostPreview from "../../src/components/PostPreview";
import { posts as postsFromCMS } from "../../content";
import matter from "gray-matter";
import path from "path";
import fs from "fs";

export default function PostListPage({ posts }) {
  return (
    <Layout title="Ninja Blog | posts">
      <h1>All Posts</h1>

      {posts.map((post) => (
        <div key={post.slug}>
          <PostPreview post={post} />
        </div>
      ))}
    </Layout>
  );
}

PostListPage.defaultProps = {
  posts: [],
};

export function getStaticProps(ctx) {
  const cmsPosts = (
    ctx.preview ? postsFromCMS.draft : postsFromCMS.published
  ).map(function toPost(post) {
    const { data } = matter(post);
    return data;
  });

  const postsPath = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsPath);
  const filesPosts = filenames.map(function toPostData(filename) {
    const postPath = path.join(process.cwd(), "posts", filename);
    const postData = fs.readFileSync(postPath, "utf-8");
    const { data } = matter(postData);
    return data;
  });

  const posts = [...cmsPosts, ...filesPosts];

  return {
    props: {
      posts,
    },
  };
}
