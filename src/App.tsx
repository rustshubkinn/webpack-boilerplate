import * as React from 'react';

import './styles.scss';

interface AppProps {
  title: string;
  href: string;
}

export const App: React.VFC<AppProps> = ({ title, href }) => (
  <div className="container">
    <h5>
      This is {title} and when you click
      <a href={href}> here </a>
      you go to outerspace
    </h5>
  </div>
);
