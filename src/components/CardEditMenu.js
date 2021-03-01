import { ReactComponent as OverflowMenu } from '../assets/OverflowMenu.svg'
import { ReactComponent as OverflowMenuActive } from '../assets/OverflowMenuActive.svg'
import { Menu } from '@headlessui/react'

const CardEditmenu = () => {
  return (
    <div className="relative ml-auto">
      <Menu>
        {({open}) => (
          <>
            <Menu.Button className={`${open ? 'bg-primary ring ring-secondary' : ''} w-8 h-8 flex justify-center items-center border border-solid border-support rounded-sm focus:outline-none focus:ring focus:ring-secondary active:bg-primary`}>
                {open ? <OverflowMenuActive style={{width: 3+'px'}} /> : <OverflowMenu style={{width: 3+'px'}} />}
            </Menu.Button>
            <Menu.Items className="absolute right-0 bg-white border border-support z-10 rounded-sm mt-2 focus:outline-none">
              <Menu.Item>
                {({active}) => (
                  <a href="/" className={`${active ? 'bg-primary text-white' : ''} block text-sm pl-4 pr-14 leading-8`}>Save</a>
                )}
              </Menu.Item>
              <Menu.Item>
              {({active}) => (
                  <a href="/" className={`${active ? 'bg-primary text-white' : ''} block text-sm pl-4 pr-14 leading-8`}>Edit</a>
                )}
              </Menu.Item>
              <Menu.Item>
              {({active}) => (
                  <a href="/" className={`${active ? 'bg-primary text-white' : ''} block text-sm pl-4 pr-14 leading-8`}>Preview</a>
                )}
              </Menu.Item>
            </Menu.Items>
          </>
        )}
      </Menu>
    </div>
  )
}

export default CardEditmenu
