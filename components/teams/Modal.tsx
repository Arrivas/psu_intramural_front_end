import { Dialog } from '@headlessui/react';

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
            {teamList.map((item: any, index: number) => (
              <div
                key={index}
                className="flex items-center justify-start px-4 border-b border-gray-300 py-3"
              >
                <span className="h-[0.3rem] w-[0.3rem] rounded-full bg-black">
                  {' '}
                </span>
                &nbsp;
                <span className="text-xl">{item}</span>
              </div>
            ))}
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
