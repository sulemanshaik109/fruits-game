import './index.css'

const Header = props => {
  const {score, time} = props
  return (
    <div className="header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
      <div className="score-time-container">
        <p className="score">
          Score: <span className="highlight-text">{score}</span>
        </p>
        <div className="time-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-img"
          />
          <p className="time">{time} sec</p>
        </div>
      </div>
    </div>
  )
}

export default Header
