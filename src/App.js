import React from 'react';

import Accordion from './components/Accordion';

const App = () => {
  const items = [
    { title: 'Item 1', content: 'Content for item 1' },
    { title: 'Item 2', content: 'Content for item 2' },
    { title: 'Item 3', content: 'Content for item 3' },
  ];

  return (
    <div>
      <h1>Simple Accordion Menu</h1>
      <Accordion items={items} />
    </div>
  );
};

export default App;