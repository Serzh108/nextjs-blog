import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

const MyPage = () => {
  return (
    <Layout>
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
        <Link href="/">← Back to home (in page)</Link>
      </h2>
    </Layout>
  );
};

export default MyPage;
