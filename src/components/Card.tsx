import { useMemo } from 'react';

enum CardState {
  Default,
  Pick,
  Empty,
  Ready,
  Win,
};

interface ICard {
  value: string;
  state: CardState;
  onClick?: Function;
};

const STYLES_CARD = {
  [CardState.Default]: 'bg-secondary-100/50  border-secondary-100/50 cursor-pointer',
  [CardState.Win]: 'border-green-400 bg-green-100/50 text-green-400',
  [CardState.Empty]: 'bg-gray-200 border-gray-200 text-none',
  [CardState.Ready]: 'border-secondary-400 grid-gradient text-none',
  [CardState.Pick]: 'bg-secondary-100/50  border-secondary-300 cursor-pointer -translate-y-4',
};

const baseCardStyles = `
  font-sans
  text-base
  grow-0
  shrink-0
  rounded-sm
  border-2
  text-secondary-400 
  h-[80px]
  w-[60px]
  mx-2
  flex 
  items-center
  justify-center
  transition-transform
`;

function Card({ value, state = CardState.Default, onClick }: ICard) {
  const cardStyles = useMemo(() => (
    `${baseCardStyles} ${STYLES_CARD[state]}`
    ), [state]);

  const handleClick = () => {
    if (typeof onClick === 'undefined') {
      return;
    }

    onClick(value);
  };

  return (
    <div className={cardStyles} onClick={handleClick}>
      { value }
    </div>
  );
}

export { CardState, Card };