import { Modal } from './Modal';

interface IModalProps {
  onClose: () => void;
};

export function AboutModal({  onClose }: IModalProps) {
  return (
    <Modal title='What is it?' onClose={onClose}>
        <>
        <p className='mb-2'>Create a room, share a link to it with your team, and evaluate your tasks in a fun and easy way!</p>
        <p className='mb-2'>
          <strong>Planning poker</strong> (also called Scrum poker) helps agile teams estimate the time
            and effort needed to complete each initiative on their product backlog. The name from this 
            gamified technique is planning poker because participants use physical cards. These cards, 
            which look like playing cards, estimate the number of story points for each backlog story 
            or task up for discussion.
        </p>
        <p className='mb-2'>
          The design of this process was to help software organizations more accurately estimate 
          development timeframes, build consensus among the members of the cross-functional team, 
          and more strategically plan the team’s work.
        </p>
        <p className='mb-2'>
          More information about it: <a className='link' href='https://www.productplan.com/glossary/planning-poker/'>Planning poker</a>
        </p>
      </>
    </Modal>
  );
}