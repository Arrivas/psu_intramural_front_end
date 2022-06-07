import type { NextPage } from 'next';
import DashboardComp from '../components/dashboard/DashboardComp';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      {/* <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <DashboardComp />
    </>
  );
};

export default Home;
