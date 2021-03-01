import PropTypes from 'prop-types'

const CardDescription = ({children}) => {
  return (
    <p className="text-sm mt-4">
      {children}
    </p>
  )
}

CardDescription.propTypes = {
  children: PropTypes.string
}

export default CardDescription
