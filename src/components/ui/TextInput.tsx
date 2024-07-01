'use client';
import React from 'react';

//Props for input
type InputProps = {
  type?: 'text' | 'email' | 'password';
  label?: string;
  name?: string;
  placeholder?: string;
  hint?: string;
  error?: string;
  icon?: string;
  value?: string | number;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

//TextInput Component
function TextInput({
  type = 'text',
  label,
  placeholder = '',
  hint,
  name,
  error,
  value = '',
  disabled,
  onChange,
  onClick,
}: InputProps) {
  const borderColorAndFocus = error
    ? 'border-[#dc2626] focus:outline-1 focus:ring-4 focus:ring-red-50 focus:outline-red-600'
    : 'border-[#e6e6e6] focus:outline-1 focus:ring-4 focus:ring-indigo-50 focus:outline-indigo-700';
  disabled ? 'border-[#f5f5f5]' : 'border-[#e6e6e6]';

  const textDisabled = disabled
    ? 'font-normal text-sm text-neutral-400'
    : 'font-normal text-sm text-neutral-900';

  return (
    <div className='flex flex-col gap-1.5'>
      {label && <label htmlFor={`${label}-input`}>{label}</label>}
      <div className='flex flex-row-reverse'>
        <input
          autoComplete='off'
          className={`appearance-none
          px-3.5 py-2.5 rounded border border-solid ${borderColorAndFocus} bg-neutral-50
          h-10 w-full pr-5 ${textDisabled} `}
          type={type}
          id={`${label}-input`}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          aria-describedby='email_error'
          onChange={onChange}
        />
        <button
          className='w-4 h-4 absolute self-center mr-3.5'
          onClick={onClick}
          type='button'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill={error ? '#dc2626' : '#a3a3a3'}
          >
            <path d='M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM13 13.3551V14H11V12.5C11 11.9477 11.4477 11.5 12 11.5C12.8284 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8284 8.5 12 8.5C11.2723 8.5 10.6656 9.01823 10.5288 9.70577L8.56731 9.31346C8.88637 7.70919 10.302 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10C15.5 11.5855 14.4457 12.9248 13 13.3551Z'></path>
          </svg>
        </button>
      </div>
      {hint && !error && (
        <p className='font-normal text-sm text-neutral-500'>{hint}</p>
      )}
      {error && <p className='font-normal text-sm text-red-600'>{error}</p>}
    </div>
  );
}

export default TextInput;
