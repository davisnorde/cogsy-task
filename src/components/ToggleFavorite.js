import { useState } from 'react'
import { Switch } from '@headlessui/react'

const ToggleFavorite = () => {

  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <Switch
      checked={isFavorite}
      onChange={setIsFavorite}
      className={`${isFavorite ? 'bg-green-300' : 'bg-red-300'} w-4 h-4`}>

    </Switch>
  )
}

export default ToggleFavorite
