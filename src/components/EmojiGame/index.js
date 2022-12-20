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
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard/index'
import WinOrLoseCard from '../WinOrLoseCard/index'

import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    isGameOver: false,
    selectedList: [],
  }

  onClickEmoji = id => {
    const {selectedList, score, topScore} = this.state
    if (selectedList.includes(id)) {
      this.setState({score: 0, isGameOver: true, selectedList: []})
    } else {
      let newTopScore
      if (score === topScore) {
        newTopScore = score + 1
      } else {
        newTopScore = topScore
      }

      const newSelectedList = selectedList.push(id)
      this.setState({
        selectedList: newSelectedList,
        score: score + 1,
        topScore: newTopScore,
      })
    }
  }

  onClickPlayAgain = () => {
    this.setState({
      score: 0,
      topScore: 0,
      isGameOver: false,
      selectedList: [],
    })
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojisList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()

    return (
      <ul className="emojiListContainer">
        {shuffledEmojisList.map(emojiObject => (
          <EmojiCard
            key={emojiObject.id}
            emojiDetails={emojiObject}
            onClickEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {score, topScore, isGameOver} = this.state
    return (
      <div className="bg">
        <NavBar score={score} topScore={topScore} isGameOver={isGameOver} />
        <div className="bottomContainer">
          {!isGameOver && this.renderEmojisList()}

          {isGameOver && (
            <WinOrLoseCard
              score={score}
              onClickPlayAgain={this.onClickPlayAgain}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
