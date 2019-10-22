import React from 'react';

export interface ILinkProps {
  href?: string;
  onClick?: () => void;
}

export const Link: React.FC<ILinkProps> = ({ href, children, ...rest }) => {
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
