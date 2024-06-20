import React from 'react';
import Form from './Form';

type Props = {};

export default function NewsLetter({}: Props) {
  return (
    <section className='bg-white flex justify-center items-center gap-8 self-stretch px-8 p-4 py-24 rounded-md'>
      <div className='flex flex-col gap-12 grow'>
        <div className='flex flex-col gap-16 self-stretch'>
          <h2 className='font-semibold text-5xl text-neutral-900'>
            Get the finest curated abstracts delivered weekly to your inbox
          </h2>
          <ul className='flex flex-col gap-5 self-stretch'>
            <li className='flex items-center gap-3 self-stretch'>
              <svg
                width='18'
                height='13'
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
            <li className='flex items-center gap-3 self-stretch'>
              <svg
                width='18'
                height='13'
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
            <li className='flex items-center gap-3 self-stretch'>
              <svg
                width='18'
                height='13'
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
        </div>
        <div>
          <Form />
        </div>
      </div>
      <div className='grow h-[608px]'>
        <img
          className='w-[592px] h-[608px] object-cover rounded-xl'
          src='./img/abstract.jpg'
        />
      </div>
    </section>
  );
}
