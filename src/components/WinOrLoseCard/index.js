// Write your code here.
import './index.css'

const WinOrLooseCard = props => {
  const {score, onClickPlayAgain} = props
  const winImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  const looseImage =
    'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  let imageUrl
  let result
  if (score === 12) {
    imageUrl = winImage
    result = 'You win'
  } else {
    imageUrl = looseImage
    result = 'You loose'
  }

  return (
    <div className="resultContainer">
      <div className="textContainer">
        <h1 className="result">{result}</h1>
        <p className="score1">score</p>
        <p className="score2">{score}/12</p>
        <button
          className="playAgainButton"
          type="button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <img className="resultImage" src={imageUrl} alt="results" />
    </div>
  )
}

export default WinOrLooseCard
