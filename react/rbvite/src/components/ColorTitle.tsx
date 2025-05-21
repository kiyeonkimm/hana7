import type { PropsWithChildren } from 'react';

const ColorTitle = ({
  color,
  children,
}: PropsWithChildren<{ color: string }>) => {
  console.log('@@@ ColorTitle!!', color);
 // <style>{`h2 color: ${color};`}</style>
  return <h2 style={{ color }}>{children}</h2>;
};

export default ColorTitle;