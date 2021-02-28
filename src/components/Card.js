// import { useState } from 'react'
// import thumbnail from '../assets/thumbnail.png'
// import star from '../assets/Star.svg'
import Thumbnail from './Thumbnail.js'
import ToggleFavorite from './ToggleFavorite.js'
import {ReactComponent as Star} from '../assets/Star.svg';
import overflowMenu from '../assets/OverflowMenu.svg'
import { Menu } from '@headlessui/react'

const Card = ({ description, heading, hasThumbnail, hasToggleFavorite, timestamp }) => {

  return (
    <div className="mx-auto w-72 mt-12 text-dark border border-solid border-support rounded-default">
      {hasThumbnail && <Thumbnail />}
      <div className="p-4">
        <h1 className="text-2xl mb-4 line-clamp-2">{ heading }</h1>
        <p className="text-sm mb-4">{ timestamp }</p>
        {description && <p>{ description }</p>}
      </div>
      <div className="flex justify-between items-center pb-4 pr-4">
        {hasToggleFavorite && <ToggleFavorite />}
        <div className="relative">
          <Menu>
            <Menu.Button className="px-4 py-2 border border-solid border-support rounded-sm focus:outline-none focus:ring focus:ring-secondary active:bg-primary">
              <img src={ overflowMenu } alt="" className="w-1"/>
            </Menu.Button>
            <Menu.Items className="absolute right-0 bg-white border border-support z-10 rounded-sm mt-2 focus:outline-none">
              <Menu.Item>
                {({active}) => (
                  <a href="#" className={`${active ? 'bg-primary text-white' : ''} block text-sm pl-4 pr-14 leading-8`}>Save</a>
                )}
              </Menu.Item>
              <Menu.Item>
              {({active}) => (
                  <a href="#" className={`${active ? 'bg-primary text-white' : ''} block text-sm pl-4 pr-14 leading-8`}>Edit</a>
                )}
              </Menu.Item>
              <Menu.Item>
              {({active}) => (
                  <a href="#" className={`${active ? 'bg-primary text-white' : ''} block text-sm pl-4 pr-14 leading-8`}>Preview</a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>
    </div>
  )
}

export default Card
