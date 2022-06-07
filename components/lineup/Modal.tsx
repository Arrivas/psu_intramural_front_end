import { Dialog } from '@headlessui/react';
import { useState } from 'react';

interface ModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: any;
  teamList: any;
  teamName: any;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  teamList,
  teamName,
}) => {
  console.log(teamList);
  const [selectedItem, setSelectedItem] = useState('');
  const [currentItem, setCurrentItem] = useState<any>([]);
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center ">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="mx-auto max-w-sm rounded-md p-5 bg-white">
            <Dialog.Title className="text-2xl font-semibold">
              {teamName}
            </Dialog.Title>
            <div
              className={`grid ${
                currentItem.length !== 0 ? 'grid-cols-2' : 'grid-cols-1'
              } gap-3 py-2`}
            >
              <div className="flex items-center justify-center flex-col gap-2">
                <button
                  onClick={() => {
                    setCurrentItem(teamList.cheerdance);
                    setSelectedItem('Cheerdance');
                  }}
                  className="border text-xl uppercase border-gray-700 p-2 shadow-md rounded-md w-full"
                >
                  Cheerdancer
                </button>
                <button
                  onClick={() => {
                    setCurrentItem(teamList.basketballBoys);
                    setSelectedItem('Basketball Boys');
                  }}
                  className="border text-xl uppercase border-gray-700 p-2 shadow-md rounded-md w-full"
                >
                  Basketball Boys
                </button>
                <button
                  onClick={() => {
                    setSelectedItem('Volleybal Girls');
                    setCurrentItem(teamList.volleyballGirls);
                  }}
                  className="border text-xl uppercase border-gray-700 p-2 shadow-md rounded-md w-full"
                >
                  Volleyball Girls
                </button>
                <button
                  onClick={() => {
                    setSelectedItem('Futsal');
                    setCurrentItem(teamList.futsal);
                  }}
                  className="border text-xl uppercase border-gray-700 p-2 shadow-md rounded-md w-full"
                >
                  Futsal
                </button>
                <button
                  onClick={() => {
                    setSelectedItem('Badminton Double');
                    setCurrentItem(teamList.badmintonDouble);
                  }}
                  className="border text-xl uppercase border-gray-700 p-2 shadow-md rounded-md w-full"
                >
                  Badminton Double
                </button>
              </div>
              {currentItem.length !== 0 && (
                <div className="">
                  <h1 className="lg font-bold">{selectedItem}</h1>
                  {currentItem.map((item: any, index: number) => (
                    <div key={index} className="py-2">
                      <span className="text-xl">{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* second modal */}

            <button
              className="px-4 rounded-full my-2 py-1"
              onClick={() => setIsOpen(false)}
            >
              close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default Modal;
