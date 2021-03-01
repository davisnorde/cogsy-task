import { useState } from 'react'
import { Switch } from '@headlessui/react'
import {ReactComponent as IsFavorite} from '../assets/IsFavorite.svg'
import {ReactComponent as IsNotFavorite} from '../assets/IsNotFavorite.svg'

const CardToggle = () => {

  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <Switch
      checked={isFavorite}
      onChange={setIsFavorite}
      className="focus:outline-none focus:ring focus:ring-secondary rounded-sm"
      >
        {({checked}) => (
          checked ? <IsFavorite /> : <IsNotFavorite/>
        )}
    </Switch>
  )
}

export default CardToggle
