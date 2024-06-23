import React from 'react';
import Form from './Form';
import { useState } from 'react';
import { toast } from 'react-toastify';
type Props = {};

export default function NewsLetter({}: Props) {
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
    <main className='page-container flex justify-center  p-4 '>
      <section className='newsletter-container  max-w-[343px] py-8  bg-white rounded md:max-w-[768px] lg:max-w-[1440px]'>
        <section className='content-container flex flex-col gap-4 px-3 '>
          <article className='title-list_container flex flex-col gap-8 '>
            <h2 className='font-semibold text-3xl text-neutral-900'>
              Get the finest curated abstracts delivered weekly to your inbox
            </h2>

            <ul className='feature-list flex flex-col gap-5'>
              <li className='flex flex-row gap-3'>
                <svg
                  className=''
                  width='24'
                  height='24'
                  viewBox='0 0 18 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6.64715 10.5245L7.0007 10.878L7.35425 10.5245L16.1931 1.68562L16.9002 2.39272L7.0007 12.2922L1.34383 6.63539L2.05093 5.9283L6.64715 10.5245Z'
                    fill='#6366F1'
                    stroke='#6366F1'
                  />
                </svg>
                <span className='font-normal text-lg text-neutral-600'>
                  Exclusive access to new abstract images and collections
                </span>
              </li>
              <li className='flex flex-row gap-3'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 18 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6.64715 10.5245L7.0007 10.878L7.35425 10.5245L16.1931 1.68562L16.9002 2.39272L7.0007 12.2922L1.34383 6.63539L2.05093 5.9283L6.64715 10.5245Z'
                    fill='#6366F1'
                    stroke='#6366F1'
                  />
                </svg>
                <span className='font-normal text-lg text-neutral-600'>
                  Unlock special promotions only for subscribers
                </span>
              </li>
              <li className='flex flex-row gap-3'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 18 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6.64715 10.5245L7.0007 10.878L7.35425 10.5245L16.1931 1.68562L16.9002 2.39272L7.0007 12.2922L1.34383 6.63539L2.05093 5.9283L6.64715 10.5245Z'
                    fill='#6366F1'
                    stroke='#6366F1'
                  />
                </svg>
                <span className='font-normal text-lg text-neutral-600'>
                  Regular doses of inspiration
                </span>
              </li>
            </ul>
          </article>

          <section className='form-section w-[100%] mt-12'>
            <form
              autoComplete='off'
              className='email flex flex-col gap-4 focus:ring-blue-700'
              onSubmit={handleSubmit}
            >
              <div className='flex items-center px-3.5 py-2.5 my bg-neutral-50 '>
                <input
                  type='email'
                  name='email'
                  className='flex-1 w-[100%] bg-neutral-50 h-auto '
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
              <h2 className='font-normal text-base text-neutral-600'>
                We only send you the best! No spam.
              </h2>
              <button
                type='submit'
                className='flex-1 w-[100%] bg-indigo-700 px-3.5 py-2.5 rounded font-medium text-white hover:bg-indigo-800 focus:ring-indigo-800'
              >
                Subscribe
              </button>
            </form>
          </section>
          <img className='w-[311px] rounded-xl' src='./img/abstract.jpg' />
        </section>
      </section>
    </main>
  );
}
