import { useState } from 'react'
import { Switch } from '@headlessui/react'
import {ReactComponent as Favorite} from '../assets/Favorite.svg'
import {ReactComponent as NotFavorite} from '../assets/NotFavorite.svg'

const CardFavoriteToggle = () => {

  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <Switch.Group>
      <Switch.Label className="hidden">Mark as favorite</Switch.Label>
      <Switch
        checked={isFavorite}
        onChange={setIsFavorite}
        className="focus:outline-none focus:ring focus:ring-secondary rounded-sm"
        >
          {({checked}) => (
            checked ? <Favorite /> : <NotFavorite/>
          )}
      </Switch>
    </Switch.Group>
  )
}

export default CardFavoriteToggle
