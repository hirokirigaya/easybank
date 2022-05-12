import './styles.css'
import Button from '../Button'
import Cards from '../Cards'
import Articles from '../Articles'

function index() {
  return (
    <main>
      <section className="initial-container">
        <div className="background">
          <img src="./img/cell.png" alt="cell-img" className="cell" />
          <img
            src="./img/bg-intro-mobile.svg"
            alt="bg-mg"
            className="bgmobile"
          />
          <img src="./img/bg-intro-desktop.svg" alt="bg-mg" className="bg" />
        </div>
        <div className="generation">
          <div className='group'>
            <h1>Next generation digital banking</h1>
            <p>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
          <Button style="button" name="Request Invite" />
          </div>
        </div>
      </section>
      <section className="second-container">
        <div className="choose">
          <h2>Why choose EasyBank?</h2>
          <p className="desc">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
          <Cards />
        </div>
      </section>
      <section className="last-container">
        <h2>Latest Articles</h2>
        <Articles />
      </section>
    </main>
  )
}

export default index
