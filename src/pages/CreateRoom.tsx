import type { FormEvent } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ErrorMessage } from '../components/ErrorMessage';

enum VotingSystems {
  Fb,
  Size,
};

type CreateFormTarget = FormEvent['target'] & {
  roomName: { value: string; };
  votingSystem: { value: VotingSystems; };
};

type RoomData = {
  name: string;
  votingSystem: VotingSystems;
};

// @TODO: to global
type VotingSystem = {
  name: string;
  key: VotingSystems;
  values: string[];
};

// @TODO: to mocks
const VOTING_SYSTEM: VotingSystem[] = [
  {
    key: VotingSystems.Fb,
    name: 'Fibonachi',
    values: ['1', '2', '3', '5', '8', '13', '21', '34'],
  }, {
    key: VotingSystems.Size,
    name: 'Size',
    values: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
  }
];

export function CreateRoom() {
  const [isSubmitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setErrorMsg('');

    const { roomName, votingSystem } = event.target as CreateFormTarget;
    if (roomName.value.trim() === '') {
      setErrorMsg('Room name can\'t be empty!');
      return;
    }

    setSubmitting(true);
    createRoom({
      name: roomName.value,
      votingSystem: votingSystem.value
    });
  };

  const createRoom = (room: RoomData) => {
    const { name } = room;
    setTimeout(() => navigate(`/room/${name}`), 3000);
  };

  return (
    <form className='w-full my-6 mx-auto p-7 bg-white rounded-xl text-left' onSubmit={handleSubmit}>
      { errorMsg !== '' && <ErrorMessage message={errorMsg}/> }

      <label htmlFor='roomName'>room name</label>
      <input className='w-full mb-5 appearance-none' id='roomName' type='text' placeholder='Enter room name' name='roomName' />

      <label htmlFor='votingSystem'>Voting system</label>
      <select className='w-full mb-5' id='votingSystem' name='votingSystem'  defaultValue='Fb'>
        {VOTING_SYSTEM.map(({key, name, values}) => (
          <option value={key}>{ `${name} (${values.join(', ')})`}</option>
        ))}
      </select>
      
      <div className='flex justify-between items-center'>
        <Link className={`btn btn-outline btn-md ${isSubmitting ? 'invisible' : ''}`} to='..' relative='path'>Cancel</Link>
        <button className='btn btn-primary btn-md max-w-[320px] w-full' type='submit' disabled={isSubmitting}>
          Create
        </button>
      </div>
    </form>
  );
}