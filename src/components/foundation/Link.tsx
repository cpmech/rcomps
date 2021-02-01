/** @jsxImportSource @emotion/react */

export interface ILinkProps {
  href?: string;
  onClick?: () => void;
}

export const Link: React.FC<ILinkProps> = ({ href, children, ...rest }) => {
  if (href) {
    return (
      <a href={href} {...rest} style={{ cursor: 'pointer' }}>
        {children}
      </a>
    );
  }
  return (
    <div {...rest} style={{ cursor: 'pointer' }}>
      {children}
    </div>
  );
};
