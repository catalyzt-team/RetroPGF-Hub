'use client'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Close from '@carbon/icons-react/lib/Close'
import { StateCommunityType } from '../CommunityTytpe'
import { sorting } from './SortByBtn'
import { filter } from './FilterBtn'
export default function DrawerFilter({
  open,
  onClose,
  handleClearFilter,
  state,
  setState,
}: {
  state: StateCommunityType
  setState: React.Dispatch<React.SetStateAction<StateCommunityType>>
  open: boolean
  onClose: () => void
  handleClearFilter: () => void
}) {

  function handleChangeSort(char:  string) {
    setState(prev => ({...prev, sort: char}))
  }

  function handleChangeFilter(char: string) {
    setState(prev => ({...prev, filter: char}))
  }

  console.log(state)

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className="block lg:hidden relative z-40 h-full w-full"
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black/25" />

        <div className="fixed inset-0 overflow-y-auto h-full w-screen">
          <div className="flex h-full items-center justify-center text-center ">
            <Transition.Child
              as={Fragment}
              enter="duration-500"
              enterFrom="-translate-x-full opacity-0"
              enterTo="translate-x-0 opacity-100"
              leave="ease-out duration-500"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="w-full h-full transform overflow-x-hidden bg-white p-4 text-left shadow-xl transition-all overflow-y-scroll flex flex-col">
                <Dialog.Title as="div" className="flex justify-between ">
                  <div />
                  <h6 className="text-base text-gray-900 font-bold">
                    Filter By
                  </h6>
                  <div className="cursor-pointer" onClick={onClose}>
                  <Close />
                  </div>
                </Dialog.Title>

                <hr className="my-3 border-gray-200 m-0  w-full" />
                <div className="flex flex-col gap-4">
                
                  <div className="flex flex-col gap-2">
                    <h6 className="text-xs font-medium text-gray-400">
                      Sort
                    </h6>
                    <div className="flex gap-2 items-center flex-wrap">
                      {sorting.map((item, i) => (
                        <div
                          key={i}
                          className={` 
                          lg:block h-8
                          hover:bg-secondaryRed hover:text-primaryRed hover:border hover:border-primaryRed
                          border rounded-full px-3 py-1.5 cursor-pointer transition-colors self-center shrink-0
                          ${
                            state.sort === item.id
                              ? 'bg-secondaryRed text-primaryRed border-secondaryRed'
                              : 'text-slate-900 border'
                          }
                          `}
                          onClick={() => handleChangeSort(item.id)}
                        >
                          <p className=" text-sm font-normal ">{item.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <h6 className="text-xs font-medium text-gray-400">
                      Filter
                    </h6>
                    <div className="flex gap-2 items-center flex-wrap">
                      {filter.map((item, i) => (
                        <div
                          key={i}
                          className={` 
                          lg:block h-8
                          hover:bg-secondaryRed hover:text-primaryRed hover:border hover:border-primaryRed
                          border rounded-full px-3 py-1.5 cursor-pointer transition-colors self-center shrink-0
                          ${
                            state.filter === item.id
                              ? 'bg-secondaryRed text-primaryRed border-secondaryRed'
                              : 'text-slate-900 border'
                          }
                          `}
                          onClick={() => handleChangeFilter(item.id)}
                        >
                          <p className=" text-sm font-normal ">{item.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                 
                </div>

                <div className="mt-8" />

                <div className="grid grid-cols-1 min-[305px]:grid-cols-2 gap-4 items-center content-center  w-full mt-auto ">
                  <div
                    onClick={handleClearFilter}
                    className="bg-inherit hover:bg-gray-100 hover:text-primaryRed text-gray-900 flex items-center justify-center rounded-lg py-3 px-7 cursor-pointer"
                  >
                    <h6 className="text-base font-semibold text-center ">
                      Clear All
                    </h6>
                  </div>

                  <div
                    className="bg-primaryRed hover:bg-primaryRed/90 flex items-center justify-center rounded-lg py-3 px-7 cursor-pointer"
                    onClick={onClose}
                  >
                    <h6 className="text-base font-semibold text-white">
                      Apply
                    </h6>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}