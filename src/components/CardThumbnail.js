import PropTypes from 'prop-types'
import Fallback from '../assets/thumbnail.png'

const CardThumbnail = ({type, src, alt = "", ...otherProps}) => {
  return (
    <div className="-mx-6 -mt-2">
      {!src ? (
        <img src={Fallback} alt="" className="rounded-t-default" />
      ) : (
        <>
          {(type === 'image' || type === 'svg') && <img src={src} alt={alt} {...otherProps} className="rounded-t-default" />}
          {type === 'video' && <video src={src} {...otherProps} className="rounded-t-default" />}
        </>
      )}
    </div>
  )
}

CardThumbnail.propTypes = {
  type: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  autoPlay: PropTypes.bool,
  muted: PropTypes.bool,
}

export default CardThumbnail
