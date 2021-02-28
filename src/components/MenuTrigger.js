import overflowMenu from '../assets/OverflowMenu.svg'
import { Menu } from '@headlessui/react'

const MenuTrigger = () => {
  return (
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
  )
}

export default MenuTrigger
