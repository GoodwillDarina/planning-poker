import type { ReactNode } from 'react';
import CloseIcon from '../assets/icons/close.svg?react';

interface IModalProps {
  children: ReactNode;
  title: string;
  onClose: () => void;
};

export function Modal({ children, title, onClose }: IModalProps) {
  return (
    <>
      <div className='fixed bg-gray-400/50 top-0 right-0 left-0 bottom-0' onClick={onClose} />
      <div
        className='w-[500px] p-6 rounded-xl bg-white absolute top-10 left-1/2 -translate-x-1/2 text-left'
      >
        <button className='absolute top-5 right-5 w-5 h-5 link icon' onClick={onClose}>
          <span className='sr-only'>Close</span>
          <CloseIcon aria-hidden/>
        </button>
        <h2 className='text-center mb-2 text-gray-400'>{ title }</h2>

        { children }
      </div>
    </>
  );
}