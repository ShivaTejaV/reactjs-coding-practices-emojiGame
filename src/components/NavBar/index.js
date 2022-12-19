// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore} = props
  const gameLogo = 'https://assets.ccbp.in/frontend/react-js/game-logo-img.png'

  return (
    <div className="NavBarbg">
      <div className="left-container">
        <img src={gameLogo} className="logo" />
        <p className="title">Emoji Game</p>
      </div>
      <div className="right-container">
        <p className="score">Score: {score}</p>
        <p className="score">Top Score: {topScore}</p>
      </div>
    </div>
  )
}

export default NavBar
