import { Link } from 'react-router-dom';
import pokerLogo from '../assets/poker-logo.png';

interface IHeader {
  title?: string
};

export function Header({ title = 'Title'}: IHeader) {
  return (
    <header className='w-full p-5 flex justify-start items-center'>
      <Link to='/'>
        <img className='mr-4'src={pokerLogo} width='120' alt='' />
      </Link>
      <h2>{ title }</h2>
    </header>
  );
}