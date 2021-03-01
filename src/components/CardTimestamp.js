import PropTypes from 'prop-types'
import { formatDistanceToNowStrict } from 'date-fns'

const CardTimestamp = ({datetime}) => {
  return (
    <p className="text-sm mt-4">
      Last edited <time dateTime={datetime}>{formatDistanceToNowStrict(new Date(datetime), { addSuffix: true })}</time>
    </p>
  )
}

CardTimestamp.propTypes = {
  datetime: PropTypes.string.isRequired,
}

export default CardTimestamp
