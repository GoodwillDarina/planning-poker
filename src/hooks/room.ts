import { useState } from 'react';

export function useRoom() {
  const [roomId, setRoomId] = useState(0)

  function create() {
    console.log('create');
  }

  function enter() {
    console.log('enter');
  }

  function leave() {
    console.log('leave');
  }

  function remove() {
    console.log('remove');
  }

  return {
    create,
    enter,
    leave,
    remove,
    roomId, 
  }
}