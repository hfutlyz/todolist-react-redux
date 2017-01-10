const Link = ({active,children,onClick}) => {
  if (active) {
    return (
      <span>{children}</span>
    );
  }
  return (
    <a
      href="javascript:;"
      onClick={e=>{
        e.preventDefault();
        onClick();
      }}>
    </a>
  );
};
