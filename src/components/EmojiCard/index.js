// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickingEmoji} = props
  const {emojiName, emojiUrl, id} = emojiDetails
  const onClickingImage = () => {
    clickingEmoji(id)
  }
  return (
    <li className="emoji-card-bg-container">
      <button type="button" className="emoji-image-button">
        <img
          src={emojiUrl}
          alt={emojiName}
          className="emoji-card-image"
          onClick={onClickingImage}
        />
      </button>
    </li>
  )
}

export default EmojiCard
