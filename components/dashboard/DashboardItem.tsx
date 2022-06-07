import Link from 'next/link';
interface DashboardItemProps {
  text: string;
  imgSrc: string;
  path: string;
}

const DashboardItem: React.FC<DashboardItemProps> = ({
  text,
  imgSrc,
  path,
}) => {
  return (
    <>
      <Link href={path}>
        <a className="hover:bg-[#eee] flex flex-col items-start justify-center gap-5 p-4 rounded-md border border-gray-400">
          <img className="h-8 w-8" src={imgSrc} alt="teams" />
          <h1 className="">{text}</h1>
        </a>
      </Link>
    </>
  );
};

export default DashboardItem;
