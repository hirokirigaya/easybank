import './styles.css'
import Button from '../Button'
import Cards from '../Cards'

function index() {
  return (
    <main>
      <section className="initial-container">
        <div className="background">
          <img src="./img/cell.png" alt="bg" className="cell" />
        </div>
        <div className="generation">
          <h1>Next generation digital banking</h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <Button style="button" name="Request Invite" />
        </div>
      </section>
      <section className="second-container">
        <div className='choose'>
          <h2>Why choose EasyBank?</h2>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <Cards/>
      </section>
      <section className="last-container"></section>
    </main>
  )
}

export default index
