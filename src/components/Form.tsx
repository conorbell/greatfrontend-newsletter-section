type Props = {};
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Form() {
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const email = formData.get('email');
    console.log('formData', email);

    fetch('https://www.greatfrontend.com/api/projects/challenges/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email: email }),
    })
      .then(async (response) => {
        console.log('response', response);
        if (response.status === 200) {
          const data = await response.json();
          toast.success(data.message);
        }
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
  return (
    <form className='w-80 flex flex-col gap-4' onSubmit={handleSubmit}>
      <div className='flex flex-row gap-2'>
        <div className='flex items-center px-3.5 py-2.5  bg-neutral-50 '>
          <input
            type='email'
            name='email'
            className='flex-1 bg-neutral-50 h-auto '
            placeholder='name@email.com'
            required
          />
          <svg
            width='14'
            height='14'
            viewBox='0 0 14 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M6.99992 13.6667C3.31802 13.6667 0.333252 10.6819 0.333252 7.00004C0.333252 3.31814 3.31802 0.333374 6.99992 0.333374C10.6818 0.333374 13.6666 3.31814 13.6666 7.00004C13.6666 10.6819 10.6818 13.6667 6.99992 13.6667ZM6.99992 12.3334C9.94545 12.3334 12.3333 9.94557 12.3333 7.00004C12.3333 4.05452 9.94545 1.66671 6.99992 1.66671C4.0544 1.66671 1.66659 4.05452 1.66659 7.00004C1.66659 9.94557 4.0544 12.3334 6.99992 12.3334ZM6.33325 9.00004H7.66659V10.3334H6.33325V9.00004ZM7.66659 7.90344V8.33337H6.33325V7.33337C6.33325 6.96517 6.63172 6.66671 6.99992 6.66671C7.55219 6.66671 7.99992 6.21897 7.99992 5.66671C7.99992 5.11442 7.55219 4.66671 6.99992 4.66671C6.51479 4.66671 6.11032 5.01219 6.01912 5.47055L4.71146 5.20901C4.92417 4.1395 5.86792 3.33337 6.99992 3.33337C8.28859 3.33337 9.33325 4.37804 9.33325 5.66671C9.33325 6.72371 8.63039 7.61657 7.66659 7.90344Z'
              fill='#A3A3A3'
            />
          </svg>
        </div>
        <button
          type='submit'
          className='flex-1 bg-indigo-700 w-24 px-3.5 py-3.5 rounded font-medium text-white hover:bg-indigo-800 focus:ring-indigo-800'
        >
          Subscribe
        </button>
      </div>
      <h2 className='font-normal text-base text-neutral-600'>
        We only send you the best! No spam.
      </h2>
    </form>
  );
}
