import PropTypes from 'prop-types'
// import thumbnail from '../assets/thumbnail.png'
// import star from '../assets/Star.svg'
import Thumbnail from './Thumbnail.js'
import ToggleFavorite from './ToggleFavorite.js'
import {ReactComponent as Star} from '../assets/Star.svg';
import MenuTrigger from './MenuTrigger.js';

const Card = ({ description, heading, hasMenuTrigger, hasThumbnail, hasToggleFavorite, timestamp }) => {

  return (
    <div className="mx-auto w-72 mt-12 text-dark border border-solid border-support rounded-default">
      {hasThumbnail && <Thumbnail />}
      <div className="p-4">
        <h1 className="text-2xl mb-4 line-clamp-2">{ heading }</h1>
        <p className="text-sm mb-4">{ timestamp }</p>
        {description && <p className="text-sm">{ description }</p>}
      </div>
      <div className="flex justify-between items-center pb-4 pr-4">
        {hasToggleFavorite && <ToggleFavorite />}
        {hasMenuTrigger && <MenuTrigger />}
      </div>
    </div>
  )
}

Card.propTypes = {
  heading: PropTypes.string.isRequired,
  timestamp: PropTypes.string,
  description: PropTypes.string,
  hasThumbnail: PropTypes.bool,
  hasToggleFavorite: PropTypes.bool,
  hasMenuTrigger: PropTypes.bool,
}

export default Card
