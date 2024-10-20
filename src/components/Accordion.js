import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <h2 onClick={() => handleToggle(index)} style={{ cursor: 'pointer' }}>
            {item.title}
          </h2>
          {openIndex === index && <p>{item.content}</p>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;