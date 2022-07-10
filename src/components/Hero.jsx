/** @jsxImportSource theme-ui */

export default function Hero({ hero }) {
  return (
    <section sx={{ variant: "containers.hero" }}>
      <h1>{hero.title}</h1>
      <smal>{hero.body}</smal>
    </section>
  );
}
