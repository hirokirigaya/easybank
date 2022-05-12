import './articles.css'
import Articles from './Articles'

function index() {
  return (
    <div className="latest-articles">
      {Articles.map((article) => {
        return (
          <article className="article" key={article.id}>
            <div className='img-art'>
              <img src={article.img} alt="img" className='img'/>
            </div>
            <div className="info">
              <address>By {article.author}</address>
              <h3>
                {' '}
                <a href="#">{article.title}</a>
              </h3>
              <p>{article.desc}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default index
