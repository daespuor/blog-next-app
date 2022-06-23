/** @jsxImportSource theme-ui */
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav sx={{ variant: "containers.nav" }}>
      <div className="logo">
        <Image
          src="/images/logo.png"
          alt="Ninja Logo"
          width={128}
          height={100}
        />
        <h1
          sx={{
            marginTop: 0,
          }}
        >
          Ninja Blog
        </h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/posts">
        <a>Posts List</a>
      </Link>
    </nav>
  );
}

export default Navbar;
