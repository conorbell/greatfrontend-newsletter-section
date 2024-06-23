import React from 'react';

type Props = {};

export default function Footer() {
  return (
    <footer className='credits '>
      A challenge by
      <a
        href='https://www.greatfrontend.com/projects?ref=challenges'
        target='_blank'
      >
        GreatFrontEnd Projects
      </a>
      . Built by
      <a href='https://www.greatfrontend.com/u/conorbell' target='_blank'>
        Conor Bell
      </a>
      .
    </footer>
  );
}
