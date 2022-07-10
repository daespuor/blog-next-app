/** @jsxImportSource theme-ui */
import Link from "next/link";

export default function PostPreview({ post }) {
  return (
    <article sx={{ variant: "containers.postPreview" }}>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
        <a>Read More</a>
      </Link>
    </article>
  );
}

PostPreview.defaultProps = {
  post: {
    title: "",
    description: "",
    slug: "",
  },
};
