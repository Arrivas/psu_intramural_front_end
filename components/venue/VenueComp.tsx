import { ClockIcon } from '@heroicons/react/outline';
import GoBack from '../GoBack';

interface VenueCompProps {
  venues: any;
}

const VenueComp: React.FC<VenueCompProps> = ({ venues }) => {
if(!venues) return<></>
  return (
    <>
      <div className="flex items-center justify-center font-openSans">
        {/* images */}
        <img
          className="fixed -bottom-1 -z-50 right-0 h-[25%] w-full object-cover"
          src="images/bottom_bg.png"
          alt="circles"
        />
        <div className="pt-5 w-[290px] px-1 xs:w-[375px] relative">
          {/* goback */}
          <GoBack text="Venue" />
          {/* matches */}
          {/* {
            venues.map((item) => .)
          } */}
          <div className="flex flex-col gap-3 py-2 overflow-auto h-[30rem] sm:h-[35rem] pr-0 md:pr-3">
            {venues?.map((item: any) => (
              <div
                key={item.event}
                className={`rounded-md border min-h-[${
                  item.singleTime ? '8rem' : '10rem'
                }] overflow-hidden border-gray-400 shadow-md p-2 relative`}
              >
                <span className="h-full w-[5px] right-0 bottom-0 absolute bg-blue-600"></span>
                <h1 className="text-lg">{item.event}</h1>
                <div>
                  <span>Venue: {item.venue}</span>
                </div>
                <div>
                  <span>Date/Time: {item.date}</span>
                </div>
                {item.singleTime ? (
                  <div className="flex items-center py-1 gap-2 text-gray-800">
                    <ClockIcon height={30} width={30} />
                    <span className="font-bold">{item.singleTime}</span>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center py-1 gap-2 text-gray-800">
                      <ClockIcon className="" height={30} width={30} />
                      <div className="flex flex-col font-bold">
                        <span>Girls: {item.girlsTime}</span>
                        <span>Boys: {item.boysTime}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default VenueComp;
