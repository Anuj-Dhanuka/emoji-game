// Write your code here.

import './index.css'

const WinOrLoseCard = props => {
  const {userWin, imageUrl, score, playAgainFunction, scoreTag} = props

  const clickingPlayAgain = () => {
    playAgainFunction()
  }
  return (
    <div className="win-lose-bg-container">
      <div>
        <h1 className="lose-win-title">{userWin}</h1>
        <p className="lose-win-score-text">{scoreTag}</p>
        <p className="lose-win-score">{score}/12</p>
        <div className="button-container">
          <button
            type="button"
            className="play-again-button"
            onClick={clickingPlayAgain}
          >
            Play Again
          </button>
        </div>
      </div>
      <img src={imageUrl} alt="win or lose" className="lose-win-image-style" />
    </div>
  )
}

export default WinOrLoseCard
