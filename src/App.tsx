import React, { VFC } from 'react';

import './styles.scss';

interface AppProps {
  title: string;
  href: string;
}

export const App: VFC<AppProps> = ({ title, href }: AppProps) => (
  <div className="container">
    <h5>
      This is {title} and when you click
      <a href={href}> here </a>
      you go to outerspace
    </h5>
  </div>
);
