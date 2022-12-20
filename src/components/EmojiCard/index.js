// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {id, emojiUrl, emojiName} = emojiDetails

  const onClickFunction = () => {
    onClickEmoji(id)
  }

  return (
    <li className="listItem">
      <button onClick={onClickFunction} className="emojiButton" type="button">
        <img src={emojiUrl} className="image" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
