import React from 'react';

interface IProps {
  href?: string;
  onClick?: () => void;
}

export const Link: React.FC<IProps> = ({ href, children, ...rest }) => {
  if (href) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  }
  // eslint-disable-next-line
  return <a {...rest}>{children}</a>;
};
