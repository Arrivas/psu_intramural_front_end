import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/outline';

interface GoBackProps {
  text: string;
}

const GoBack: React.FC<GoBackProps> = ({ text }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-3xl text-gray-900 py-2">{text}</h1>
        <Link href="/">
          <a className="flex items-center justify-center">
            <ArrowLeftIcon height={15} width={15} />
            <span>go back</span>
          </a>
        </Link>
      </div>
    </>
  );
};

export default GoBack;
