const Todo = ({onClick,completed,text}) => {(
  <li
    onClick={onClick}
    style={{textDecoration:completed?"line_through":"none"}}>
  </li>
)};
