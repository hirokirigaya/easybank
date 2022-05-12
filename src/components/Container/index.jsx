import './styles.css'

function index(props) {
  return (
    <section className="container">{props.children}</section>
  )
}

export default index