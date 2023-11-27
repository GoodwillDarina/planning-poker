import type { FunctionComponent, SVGProps } from 'react';
import { useContext, createElement } from 'react';
import { ModalContext } from '../context/ModalContext';
import { AboutModal } from './AboutModal';

import TelegramLogo from '../assets/socials/telegram.svg?react';
import GithubLogo from '../assets/socials/github.svg?react';
import MailLogo from '../assets/socials/mail.svg?react';

type Contact = {
  name: string,
  logo: FunctionComponent<SVGProps<SVGSVGElement>>,
  url: string,
};

// @TODO: to mocks
const CONTACTS: Contact[] = [
  {
    name: 'Telegram',
    logo: TelegramLogo,
    url: 'https://t.me/goodwill_darina',
  },{
    name: 'Github',
    logo: GithubLogo,
    url: 'https://github.com/GoodwillDarina/planning-poker',
  },{
    name: 'Mail',
    logo: MailLogo,
    url: 'mailto:dmsaburova@gmail.com',
  },
];

export function Footer() {
  const currentYear = (new Date()).getFullYear();
  const {
    isOpen: isOpenModal,
    open: openModal,
    close: closeModal
  } = useContext(ModalContext);

  const hanlerClick = () => {
    openModal();
  };

  return (
    <footer className='w-full p-5 text-center text-gray-300 text-[16px] sm:flex sm:justify-between'>
      <button className='mr-3 link' type='button' onClick={hanlerClick}>
        What is it?
      </button>

      <span>© Goodwill Darina, { currentYear }</span>

      <section className='flex justify-end items-start'>
        <span className='sr-only'>Contacts</span>
        {CONTACTS.map(({name, url, logo}) => (
          <a className='mx-2 w-6 h-6 link icon' key={name} href={url} target='blank' aria-label={name}>
            { createElement(logo, { 'aria-hidden': true}) }
          </a>
        ))}
      </section>
      { isOpenModal && <AboutModal onClose={closeModal} />}
    </footer>
  );
}