import PropTypes from 'prop-types'
import Fallback from '../assets/thumbnail.png'

const CardThumbnail = ({type, ...otherProps}) => {
  return (
    <div className="-mx-6 -mt-2 rounded-t-default overflow-hidden h-48">
      {!otherProps.src ? (
        <img src={Fallback} alt="" className="h-full w-full object-cover" />
      ) : (
        <>
          {(type === 'image' || type === 'svg') && <img alt={otherProps.alt || ""} className="h-full w-full object-cover" {...otherProps} />}
          {type === 'video' && <video className="h-full w-full object-cover" {...otherProps}/>}
        </>
      )}
    </div>
  )
}

CardThumbnail.propTypes = {
  type: PropTypes.oneOf(['image', 'svg', 'video']),
}

export default CardThumbnail
