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

  render() {
    const {score, topScore, isGameOver} = this.state
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const updatedEmojiList = shuffledEmojisList()
    return (
      <div className="bg">
        <NavBar score={score} topScore={topScore} />
        <div className="bottomContainer">
          {!isGameOver && (
            <ul className="emojiListContainer">
              {updatedEmojiList.map(each => (
                <EmojiCard
                  emojiDetails={each}
                  onClickEmoji={this.onClickEmoji}
                  key={each.id}
                />
              ))}
            </ul>
          )}

          {isGameOver && <WinOrLoseCard score={score} />}
        </div>
      </div>
    )
  }
}

export default EmojiGame
