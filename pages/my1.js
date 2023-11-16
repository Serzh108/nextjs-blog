import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

const MyPage = () => {
  return (
    <>
      <Head>
        <title>My1 page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="/images/profile.jpg"
        alt="profile image"
        height={144}
        width={144}
      />

      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </>
  );
};

export default MyPage;
