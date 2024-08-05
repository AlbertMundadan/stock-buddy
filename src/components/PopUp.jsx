import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'

export default function PopUp() {
  let [isOpen, setIsOpen] = useState(true)

  function open() {
    setIsOpen("true")
  }

  function close() {
    setIsOpen(false)
    localStorage.setItem('Visited', JSON.stringify(1));
  }

  return (
    <>
      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto mx-28">
          <div className="flex my-40 mx-40 items-center justify-center p-4">
            <DialogPanel
              transition
              className=" rounded-xl bg-white/5 p-7 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle className="text-base/7 h-8 font-medium text-white">
                Disclaimer:
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-white/50">
                This page is a preview with limited functionality.  
              </p>
              <p className="mt-2 text-sm/6 text-white/50">This website showscases the results for August 4, 2024.</p>
              <p className='mt-2 text-sm/6 text-white/50'>[7 tickers are available to search: AAPL, MSFT, NVDA, AMZN, META, INTC, GOOG]</p>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                  Got it, thanks!
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}