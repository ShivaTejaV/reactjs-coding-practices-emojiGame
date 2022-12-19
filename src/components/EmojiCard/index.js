// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {id, emojiUrl} = emojiDetails

  const onClickFunction = () => {
    onClickEmoji(id)
  }

  return (
    <li className="listItem" key={id}>
      <button onClick={onClickFunction} className="emojiButton" type="button">
        <img src={emojiUrl} className="image" />
      </button>
    </li>
  )
}

export default EmojiCard
