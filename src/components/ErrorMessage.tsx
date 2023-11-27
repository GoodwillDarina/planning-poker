interface IErrorMessage {
 message: string;
};

export function ErrorMessage({ message }: IErrorMessage) {
  return (
    <div className='mb-4 p-4 bg-primary-100/50 text-primary-300 rounded-md'>
      { message }
    </div>
  );
}