import GoBack from '../GoBack';

interface RankingCompsProps {
  rankings: any;
}

const RankingComps: React.FC<RankingCompsProps> = ({ rankings }) => {
  console.log(rankings);
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
          <GoBack text="Rankings" />
          <div className="w-full text-left rounded-md pt-5">
            <table className="w-full rounded-full ">
              <thead className="bg-[#afafaf]">
                <tr className="">
                  <th>Team Name</th>
                  <th>W</th>
                  <th>L</th>
                  <th>Overall</th>
                </tr>
              </thead>
              <tbody className="bg-[#eee]">
                {rankings[0].rankings.map((item: any, index: number) => (
                  <tr key={index} className="border-b border-gray-400">
                    <td className="py-3">{item.teamName}</td>
                    <td className="w-[10%]">{item.wins}</td>
                    <td className="w-[10%]">{item.lose}</td>
                    <td>
                      {item.wins === 20
                        ? '1st Runner Up'
                        : item.wins === 17
                        ? '2nd Runner Up'
                        : item.wins === 16
                        ? '3rd Runner Up'
                        : item.wins === 15
                        ? '4th Runner Up'
                        : item.wins === 14
                        ? '5th Runner Up'
                        : item.wins === 13 && '6th Runner Up'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default RankingComps;
