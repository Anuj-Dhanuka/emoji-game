/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

const initialClickedEmojiList = []

class EmojiGame extends Component {
  state = {
    isGameStarted: true,
    clickedEmojiList: initialClickedEmojiList,
    score: 0,
    topScore: 0,
    resultsTime: false,
    isGameWin: false,
  }

  clickingEmoji = id => {
    const {clickedEmojiList, score} = this.state
    const isObjectInclude = clickedEmojiList.includes(id)
    if (isObjectInclude === false) {
      this.setState(prevState => ({
        clickedEmojiList: [...prevState.clickedEmojiList, id],
        score: prevState.score + 1,
        isGameStarted: true,
      }))
      if (score === 11) {
        this.setState({
          resultsTime: true,
          isGameWin: true,
          topScore: 12,
          isGameStarted: false,
        })
      }
    } else {
      this.setState({
        resultsTime: true,
        isGameWin: false,
        clickedEmojiList: [],
      })
    }
  }

  playAgainFunction = () => {
    const {score, topScore} = this.state
    this.setState({
      score: 0,
      resultsTime: false,
      isGameWin: false,
    })
    if (score > topScore) {
      this.setState({topScore: score})
    }
  }

  render() {
    const {isGameStarted, score, topScore, resultsTime, isGameWin} = this.state
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const emojisList = shuffledEmojisList()

    return (
      <div className="emoji-game-container">
        <NavBar
          isGameStarted={isGameStarted}
          score={score}
          topScore={topScore}
        />
        <div className="emoji-card-container">
          {!resultsTime && (
            <ul className="emoji-ul-list-container">
              {emojisList.map(each => (
                <EmojiCard
                  emojiDetails={each}
                  clickingEmoji={this.clickingEmoji}
                  key={each.id}
                />
              ))}
            </ul>
          )}
          {resultsTime && !isGameWin && (
            <WinOrLoseCard
              userWin="You Lose"
              score={score}
              scoreTag="Score"
              playAgainFunction={this.playAgainFunction}
              imageUrl="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            />
          )}
          {resultsTime && isGameWin && (
            <WinOrLoseCard
              userWin="You Won"
              scoreTag="Best Score"
              score={score}
              playAgainFunction={this.playAgainFunction}
              imageUrl="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
