import Layout from "../../src/components/Layout";

/* export const getStaticPaths = async () => {
  const resp = await fetch(process.env.POSTS_URL);
  const data = await resp.json();

  const paths = data.map((el) => ({
    params: {
      id: el.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}; */
/* 
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const resp = await fetch(`${process.env.POSTS_URL}/${id}`);
  const data = await resp.json();

  return {
    props: {
      post: data,
    },
  };
}; */

export default function PostPage({ post }) {
  /* const router = useRouter();
  const { id } = router.query; */

  return (
    <Layout title={`Ninja Blog | post ${post.id}`}>
      <h2>
        {post.id} - {post.title}
      </h2>
      <p>{JSON.stringify(post, null, 2)}</p>
    </Layout>
  );
}

export async function getServerSideProps({ params, req, res }) {
  const resp = await fetch(`${process.env.POSTS_URL}/post/${params.id}`);

  if (!resp.ok) {
    res.writeHead(302, {
      Location: "/post",
    });
    res.end();
    return {
      props: {},
    };
  }

  const { data } = await resp.json();
  return {
    props: {
      post: data,
    },
  };
}
