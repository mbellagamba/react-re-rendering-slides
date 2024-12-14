import { ReactNode } from 'react';

import './TwoColumnsLayout.css';

export const TwoColumnsLayout = ({ children }: { children?: ReactNode }) => (
  <div className="two-columns-layout">{children}</div>
);
