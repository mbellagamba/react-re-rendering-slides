import { useState } from 'react';

import './ContentDisclosure.css';

type ContentDisclosureProps = React.PropsWithChildren<{
  title: string;
}>;

export const ContentDisclosure = ({
  children,
  title,
}: ContentDisclosureProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="content-disclosure">
      {visible ? children : <h2>{title}</h2>}
      <button
        className="btn content-disclosure__button"
        onClick={() => setVisible(!visible)}
      >
        {visible ? 'Nascondi' : 'Mostra'}
      </button>
    </div>
  );
};
