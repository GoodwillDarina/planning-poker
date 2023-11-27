import { Link } from 'react-router-dom';
import pokerBig from '../assets/poker-big.png';

export function Home() {
  return (
    <>
      <h1 className='mb-5'>Planning Poker</h1>
      <img className='w-[550px] h-[312px] object-cover m-auto' src={pokerBig} alt='' />
      <Link className='btn btn-primary btn-lg w-[400px] -translate-y-10' to='/create'>
        Create Room
      </Link>
    </>
  );
}
