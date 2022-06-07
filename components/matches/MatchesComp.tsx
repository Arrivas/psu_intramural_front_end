import GoBack from '../GoBack';

interface MatchesCompProps {
  matches: any;
}

const MatchesComp: React.FC<MatchesCompProps> = ({ matches }) => {
  console.log(matches);
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
          <GoBack text="Matches" />
          {/* matches */}
          {matches.map((item: any) => (
            <div key={item.matchDate} className="p-2">
              <h1 className="text-xl font-bold">{item.field}</h1>
              <div className="flex items-center justify-center gap-2 px-2">
                <div className="flex flex-col rounded-md border border-black w-[50%] mt-2">
                  <span className="text-lg border-b border-black px-2">
                    {item.teamOne}
                  </span>
                  <span className="px-2 text-lg ">{item.teamTwo}</span>
                </div>
                <hr className="border-gray-400 w-[15%]" />
                <span>{item.matchDate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MatchesComp;
