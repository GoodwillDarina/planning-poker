import { Card, CardState } from '../components/Card';
import { useState, useEffect, useMemo } from 'react';

//@TODO: to global
type User = {
  id?: string;
  name: string;
  card: {
    value: string;
    state: CardState.Empty | CardState.Ready | CardState.Default
  };
}

//@TODO: to mocks
const voitingSystem = ['1', '2', '3', '5', '8', '13', '21', '34'];

//@TODO: to mocks
const USERS: User[] = [{
  name: 'User 1',
  card: {
    value: '1',
    state: CardState.Ready,
  }
}, {
  name: 'User ',
  card: {
    value: '2',
    state: CardState.Ready,
  },
}, {
  name: 'User 3',
  card: {
    value: '3',
    state: CardState.Ready,
  },
}, {
  name: 'User 4',
  card: {
    value: '',
    state: CardState.Empty,
  },
}];

//@TODO: game & room hooks
export function Room() {
  const [users, setUsers] = useState<User[]>([...USERS]);
  const [pickedCard, setPickedCard] = useState('');
  const [timerCount, setTimerCount] = useState(0);
  const [isGameOver, setGameOver] = useState(false);
  const [isReveal, setReveal] = useState(false);
  const isDiabledReveal = useMemo(() => {
    return users.some(({ card }) => card.state !== CardState.Ready);
  }, [users]);

  useEffect(() => {
    setUsers(users => users.map(user => (
      user.name === 'User 4' ? {
      ...user, 
      card: {
        value: pickedCard,
        state: pickedCard ? CardState.Ready : CardState.Empty
      }
    } : { ...user }))); 
  }, [pickedCard]);

  useEffect(() => {
    if (timerCount === 0) {
      return;
    }

    const timerId = setInterval(() => {
      setTimerCount(value => value - 1);

      if (timerCount === 0) {
        clearInterval(timerId);
      }
    }, 1000);

    return () => clearInterval(timerId);
  }, [isReveal]);

  const handlerPickedCard = (value: string) => {
    setPickedCard(card => card = value === card ? '' : value);
  };

  const revealCards = () => {
    setTimerCount(value => value = 3);
    setReveal(value => value = true);

    setTimeout(() => {
      setUsers(users => users.map(user => ({
        ...user, 
        card: {
          ...user.card,
          state: CardState.Default
        }
      })));  
      setGameOver(value => value = true);
      setReveal(value => value = false);
    }, 3000);
  };

  const restartGame = () => {
    setUsers(users => users.map(user => ({
      ...user, 
      card: {
        value: '',
        state: CardState.Empty
      }
    }))); 
    setGameOver(value => value = false);
    setPickedCard(value => value = '');
  };
  
  return ( 
    <div className='flex flex-col justify-between h-full'>
      <section className='relative flex-1'>
        {users.map(({ card, name }, index) => {
          return (
          <div className='min-w-[60px] text-base inline-block' key={index}>
            <Card value={card.value} state={card.state}/>
            { name }
          </div>
        )})}
        
        <div className='my-5 mx-auto p-12 bg-white rounded-xl max-w-[400px]'>
          {isGameOver ? (
            <button className='btn btn-md btn-primary w-full max-w-[300px]' onClick={restartGame}>
              restart game
            </button>
          ) : timerCount > 0 ? (
            timerCount
          ) : (
            <button className='btn btn-md btn-primary w-full max-w-[300px]' disabled={isDiabledReveal} onClick={revealCards}>
              reveal cards
            </button>
          )}
        </div>
      </section>
      { !isGameOver ? (
        <section className='flex items-bottom justify-center mt-5'>
          {voitingSystem.map(value => <Card key={value} value={value} state={pickedCard === value ? CardState.Pick : CardState.Default} onClick={handlerPickedCard}/>)}
        </section>
      ) : (
        <section>
          statistic component & hooks
        </section>
      )}
    </div>
  );
}