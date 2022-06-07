import { useState } from 'react';
import GoBack from '../GoBack';
import Modal from './Modal';

interface LineupCompProps {
  lineups: any;
}

const LineupComp: React.FC<LineupCompProps> = ({ lineups }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [teamList, setTeamList] = useState<any>([]);
  const [teamName, setTeamName] = useState<any>('');
  console.log(lineups);
  return (
    <>
      <div className="flex items-center justify-center font-roboto">
        {/* images */}
        <img
          className="fixed -bottom-1 -z-50 right-0 h-[25%] w-full object-cover"
          src="images/bottom_bg.png"
          alt="circles"
        />
        <div className="pt-5 w-[290px] px-1 xs:w-[375px] font-roboto relative">
          {/* goback */}
          <GoBack text="Lineups" />
          <div className="px-1">
            <div className="overflow-y-auto flex flex-col gap-5 h-[30rem] p-2 pr-3">
              {lineups.map((item: any) => (
                <button
                  onClick={() => {
                    setIsOpen(true);
                    setTeamName(item.teamName);
                    setTeamList(item.lineups);
                  }}
                  key={item.teamName}
                  className="border border-gray-700 p-2 shadow-md text-left rounded-md w-full"
                >
                  <h1 className="font-light text-4xl">{item.teamName}</h1>
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

export default LineupComp;
