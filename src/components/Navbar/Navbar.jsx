/** @jsxImportSource theme-ui */
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "theme-ui";

function Navbar() {
  const { data: session, status } = useSession();
  const router = useRouter();
  return (
    <nav sx={{ variant: "containers.nav" }}>
      <div className="logo">
        <Image
          src="/images/logo.png"
          alt="Ninja Logo"
          width={128}
          height={100}
        />
        <small
          sx={{
            marginTop: 0,
          }}
        >
          Ninja Blog
        </small>
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
      {status != "loading" && !session && (
        <Button variant="primary" onClick={() => router.push("/signin")}>
          Sign in
        </Button>
      )}
      {status != "loading" && session && (
        <Button variant="secondary" onClick={signOut}>
          Sign out
        </Button>
      )}
    </nav>
  );
}

export default Navbar;
