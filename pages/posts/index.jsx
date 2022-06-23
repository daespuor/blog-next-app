import Link from "next/link";
import Layout from "../../src/components/Layout";
import styles from "../../styles/posts.module.css";

export default function PostListPage({ posts }) {
  return (
    <Layout title="Ninja Blog | posts">
      <h1>All Posts</h1>

      {posts.map((post) => (
        <div className={styles.single} key={post.id}>
          <Link href="/posts/[id]" as={`/posts/${post.id}`}>
            <a>
              <strong>{post.title}</strong>
            </a>
          </Link>
        </div>
      ))}
    </Layout>
  );
}

export async function getServerSideProps() {
  const resp = await fetch(`${process.env.POSTS_URL}/post`);
  const { data } = await resp.json();

  return {
    props: {
      posts: data,
    },
  };
}
