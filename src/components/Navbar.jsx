import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Searchbar from "./Searchbar";
import Logo from "./Logo"
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";


const navigation = [
  { name: "Watchlist", href: "#/watchlist", current: false },
  { name: "News", href: "#/news", current: false },
  { name: "Home", href: "#/", current: false }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" >
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-10 font-francois">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden mt-2">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center  sm:justify-start">
                <div className='invisible lg:visible'>
                  <a
                    href="/">
                    <Logo/>

                  </a>
                
                </div>
                
                <Searchbar/>
              </div>
              
              
              <div className="hidden sm:ml-6 lg:block">
                  <div className="flex space-x-5 mt-2 ">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white text-lg"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white text-lg",
                          "rounded-md px-5 py-4 text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
            </div>
          </div>

          <DisclosurePanel className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
