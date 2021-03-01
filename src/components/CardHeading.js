import PropTypes from 'prop-types'

const CardHeading = ({children}) => {
  return (
    <h1 className="text-2xl mt-6 line-clamp-2">
      {children}
    </h1>
  )
}

CardHeading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
}

export default CardHeading
