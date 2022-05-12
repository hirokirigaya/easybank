import './styles.css'
import Cards from './Cards'

function index() {
  return (
    <div className='cards'>
      {Cards.map((card) => {
        return (
        <article key={card.id} className="card">
          <img src={card.img} alt="" />
          <h3>{card.title}</h3>
          <p>{card.desc}</p>
        </article>
        )
      })}
    </div>
  )
}

export default index
