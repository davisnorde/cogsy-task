import PropTypes from 'prop-types'

const Card = ({children}) => {
  return (
    <article className="mx-auto w-72 text-dark border border-solid border-support rounded-default px-6 pt-2 pb-8 self-start">
      {children}
    </article>
  )
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
}

export default Card
