import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { CogIcon, LogoutIcon } from '@heroicons/react/outline';
import { getCurrentUser } from '../../auth/Auth';
import Link from 'next/link';
import Head from 'next/head';
import DashboardItem from '../dashboard/DashboardItem';
interface DashboardCompProps {}

const DashboardComp: React.FC<DashboardCompProps> = () => {
  const router = useRouter();
  useEffect(() => {
    const getUser = getCurrentUser();
    if (!getUser) router.replace('/login');
  }, []);
  const items = [
    { id: 1, text: 'Teams', imgSrc: '/images/teams.png', path: '/teams' },
    { id: 2, text: 'Lineups', imgSrc: '/images/lineup.png', path: '/lineups' },
    { id: 3, text: 'Matches', imgSrc: '/images/vs.png', path: '/matches' },
    { id: 4, text: 'Venue', imgSrc: '/images/venue.png', path: '/venue' },
    {
      id: 5,
      text: 'Game Results',
      imgSrc: '/images/score.png',
      path: '/results',
    },
    {
      id: 6,
      text: 'Rankings',
      imgSrc: '/images/rankings.png',
      path: '/rankings',
    },
  ];
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="flex items-center justify-center font-roboto px-2">
        <div className="pt-5 h-[550px] xs:h-screen w-[290px] xs:w-[375px] font-roboto relative">
          <div className="bg-gradient-to-r from-[#172eb6] to-[#14247c] flex flex-col border overflow-hidden border-gray-300 rounded-xl py-5 relative shadow-md">
            <h1 className="uppercase font-bold text-3xl z-50 p-2  text-gray-100 shad-lg">
              <img
                className="h-[12rem] w-[15rem] absolute -z-50 -bottom-[2.4rem] right-0 object-cover opacity-40"
                src="/images/lion.png"
                alt="dashboard image"
              />
              PSU Intramural
              <br /> Sports Tracker
            </h1>
          </div>
          {/* menu */}
          <div className="grid grid-cols-2 px-2 gap-2 md:gap-5 pb-10 pt-2 h-[20rem] sm:h-[calc(100vh-220px)] overflow-x-auto">
            {items.map((item) => (
              <DashboardItem
                key={item.id}
                text={item.text}
                imgSrc={item.imgSrc}
                path={item.path}
              />
            ))}
          </div>
        </div>
        <div className="py-5 fixed bottom-0 flex items-center gap-5 w-full px-0 sm:px-5 text-gray-200 border mx-auto">
          {/* <button
            type="button"
            className="flex items-center justify-center gap-2 bg-[#172eb6] py-2 px-5 rounded-md w-full"
          >
            <CogIcon height={25} width={25} />
            <h2>Account</h2>
          </button> */}
          <Link href="/logout">
            <a className="flex items-center justify-center gap-2 bg-[#172eb6] py-2 px-5 rounded-md w-full">
              <LogoutIcon height={25} width={25} />
              <h2>Logout</h2>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DashboardComp;
