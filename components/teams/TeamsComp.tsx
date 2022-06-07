import { useState } from 'react';
import GoBack from '../GoBack';
import Modal from './Modal';

interface TeamsCompProps {
  teams: any;
}

const TeamsComp: React.FC<TeamsCompProps> = ({ teams }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [teamList, setTeamList] = useState<any>([]);
  const [teamName, setTeamName] = useState<any>('');
  if (typeof window === undefined) return <></>;
  return (
    <>
      <div className="flex items-center justify-center font-roboto">
        {/* images */}
        <img
          className="fixed -bottom-1 -z-50 right-0 h-[25%] w-full object-cover"
          src="images/bottom_bg.png"
          alt="circles"
        />
        <div className="pt-5  w-[290px] px-1 xs:w-[375px] font-roboto relative">
          {/* goback */}
          <GoBack text="Teams" />
          <div className="px-1">
            <div className="overflow-y-auto flex flex-col gap-5 h-[30rem] p-2 pr-3">
              {teams.map((item: any) => (
                <button
                  onClick={() => {
                    setTeamList(item.teamList);
                    setIsOpen(true);
                    setTeamName(item.teamName);
                  }}
                  key={item.teamName}
                  className="border border-gray-700 p-2 shadow-md text-left rounded-md w-full"
                >
                  <h1 className="font-light text-4xl">{item.teamName}</h1>
                  <p className="text-gray-600">{item.department}</p>
                </button>
              ))}
            </div>
          </div>
          <Modal
            teamName={teamName}
            teamList={teamList}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          />
        </div>
      </div>
    </>
  );
};

export default TeamsComp;
