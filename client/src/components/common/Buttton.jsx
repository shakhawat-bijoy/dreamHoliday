import { Link } from 'react-router-dom'

const Button = ({text, className,to, onClick}) => {
  return (
    <div onClick={onClick}>
      <Link to={to}>
      <button className={`${className}`}>{text}</button>
      
      </Link>
    </div>
  )
}

export default Button