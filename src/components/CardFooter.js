import PropTypes from 'prop-types'

const CardFooter = ({children}) => {
  return (
    <footer className="flex items-center mt-8 -mb-4">
      {children}
    </footer>
  )
}

CardFooter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
}

export default CardFooter
