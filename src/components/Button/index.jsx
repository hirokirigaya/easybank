import './button.css'

function index(props) {
  return (
    <button className={props.style}>{props.name}</button>
  )
}

export default index