import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, clickThumbnail} = props
  const {thumbnailUrl, imageUrl} = imageDetails

  const onClickThumbnail = () => {
    clickThumbnail(imageUrl)
  }

  return (
    <li className="list-item">
      <button className="button" type="button" onClick={onClickThumbnail}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}

export default ThumbnailItem
