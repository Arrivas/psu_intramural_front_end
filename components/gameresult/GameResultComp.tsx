import GoBack from '../GoBack';

interface GameResultCompProps {
  results: any;
}

const GameResultComp: React.FC<GameResultCompProps> = ({ results }) => {
  if (!results) return <></>;
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
          <GoBack text="Game Results" />
          {/* matches */}
          <div className="text-center py-5">
            <h1 className="font-bold text-2xl">Basketball Boys</h1>
            <div className="flex">
              {results[0].basketballBoys.map((item: any, index: number) => (
                <div
                  key={index}
                  className="flex items-center justify-center w-full gap-2 py-2"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex flex-col ">
                      <div className="flex flex-col items-center gap-2">
                        <div className="bg-gray-400 h-10 w-10 rounded-full"></div>
                        <span className="font-semibold">
                          {item.teamOne.teamName}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`font-bold text-2xl ${
                        item.teamOne.score > item.teamTwo.score
                          ? 'text-black'
                          : 'text-gray-500'
                      }`}
                    >
                      {item.teamOne.score}
                    </span>
                  </div>
                  {/* mid */}
                  <span className="font-bold text-[1.4rem]">:</span>
                  {/* team two */}
                  <div className="flex items-center flex-row-reverse gap-2">
                    <div className="flex flex-col">
                      <div className="flex flex-col items-center gap-2">
                        <div className="bg-yellow-400 h-10 w-10 rounded-full"></div>
                        <span className="font-semibold">
                          {item.teamTwo.teamName}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`font-bold text-2xl ${
                        item.teamOne.score < item.teamTwo.score
                          ? 'text-black'
                          : 'text-gray-500'
                      }`}
                    >
                      {item.teamTwo.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {/* cheerdance */}
            <h1 className="font-bold text-2xl pt-5">Cheerdance</h1>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2  w-full py-5">
              {results[0]?.cheerdance.map((item: any, index: number) => (
                <div
                  key={index}
                  className="flex flex-col border-r border-black"
                >
                  <span className="text-lg font-medium">{item.teamName}</span>
                  <span className="text-lg font-bold">{item.score}</span>
                </div>
              ))}
            </div>
            {/* Badminton Double */}
            <h1 className="font-bold text-2xl pt-5">Badminton Double</h1>
            <div className="flex">
              {results[0]?.badmintonDouble.map((item: any, index: number) => (
                <div
                  key={index}
                  className="flex items-center justify-center w-full gap-2 py-2"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex flex-col ">
                      <div className="flex flex-col items-center gap-2">
                        <div className="bg-green-500 h-10 w-10 rounded-full"></div>
                        <span className="font-semibold">
                          {item.teamOne.teamName}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`font-bold text-2xl ${
                        item.teamOne.score > item.teamTwo.score
                          ? 'text-black'
                          : 'text-gray-500'
                      }`}
                    >
                      {item.teamOne.score}
                    </span>
                  </div>
                  {/* mid */}
                  <span className="font-bold text-[1.4rem]">:</span>
                  {/* team two */}
                  <div className="flex items-center flex-row-reverse gap-2">
                    <div className="flex flex-col">
                      <div className="flex flex-col items-center gap-2">
                        <div className="bg-red-900 h-10 w-10 rounded-full"></div>
                        <span className="font-semibold">
                          {item.teamTwo.teamName}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`font-bold text-2xl ${
                        item.teamOne.score < item.teamTwo.score
                          ? 'text-black'
                          : 'text-gray-500'
                      }`}
                    >
                      {item.teamTwo.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameResultComp;
