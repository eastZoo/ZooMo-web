import Head from "next/head";
import { Inter } from "next/font/google";
import { useSession } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      <Head>
        <title>📋ZooMo</title>
        <meta name="description" content="only eastzoo memo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>Hello ZooMoo!!{session?.user?.name}</main>
    </>
  );
}
