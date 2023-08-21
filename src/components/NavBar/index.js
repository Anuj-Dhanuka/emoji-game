// Write your code here.
import './index.css'

const NavBar = props => {
  const {isGameStarted, score, topScore} = props
  const scoreDisplaying = () => {
    console.log('Hi')
    if (isGameStarted === true) {
      return (
        <div className="navbar-score-container">
          <p className="navbar-score">Score: {score}</p>
          <p className="navbar-score">Top Score: {topScore}</p>
        </div>
      )
    }
    return <div className="null-color">&apos</div>
  }
  return (
    <div className="navbar-bg-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="logo-text-style">Emoji Game</h1>
      </div>
      {scoreDisplaying()}
    </div>
  )
}

export default NavBar
