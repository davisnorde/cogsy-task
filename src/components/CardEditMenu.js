import { Menu, Transition } from '@headlessui/react'

const CardEditmenu = () => {
  return (
    <div className="relative ml-auto">
      <Menu>
        {({open}) => (
          <>
            <Menu.Button className={`${open ? 'bg-primary text-white ring ring-secondary' : 'text-dark active:text-white'} w-8 h-8 flex justify-center items-center border border-solid border-support rounded-sm focus:outline-none focus:ring focus:ring-secondary active:bg-primary`}>
              <svg className={`h-auto fill-current`} style={{width: '3px'}} viewBox="0 0 86 405" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Icon-/-Overflow-menu" transform="translate(-213.000000, -54.000000)">
                    <path d="M256,373 C279.748244,373 299,392.251756 299,416 C299,439.748244 279.748244,459 256,459 C232.251756,459 213,439.748244 213,416 C213,392.251756 232.251756,373 256,373 Z M256,213 C279.748244,213 299,232.251756 299,256 C299,279.748244 279.748244,299 256,299 C232.251756,299 213,279.748244 213,256 C213,232.251756 232.251756,213 256,213 Z M256.5,54 C279.972102,54 299,73.0278981 299,96.5 C299,119.972102 279.972102,139 256.5,139 C233.027898,139 214,119.972102 214,96.5 C214,73.0278981 233.027898,54 256.5,54 Z" fillRule="evenodd" id="Icon"></path>
                </g>
            </svg>
            </Menu.Button>
            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
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
            </Transition>
          </>
        )}
      </Menu>
    </div>
  )
}

export default CardEditmenu
