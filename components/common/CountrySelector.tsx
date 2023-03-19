import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { HiChevronDown } from 'react-icons/hi2'
import Image from 'next/image'
import { BsCheckCircleFill } from 'react-icons/bs'

const countries = [
    {
        "id": 1,
        "country_code": "US",
        "flag_url": "https://flagcdn.com/64x48/us.png",
        "phone_number": "+1"
    },
    {
        "id": 2,
        "country_code": "CA",
        "flag_url": "https://flagcdn.com/64x48/ca.png",
        "phone_number": "+1"
    },
    {
        "id": 3,
        "country_code": "MX",
        "flag_url": "https://flagcdn.com/64x48/mx.png",
        "phone_number": "+52"
    },
    {
        "id": 4,
        "country_code": "NG",
        "flag_url": "https://flagcdn.com/64x48/ng.png",
        "phone_number": "+234",
    }
]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export default function CountrySelector() {
    const [selected, setSelected] = useState(countries[1])

    return (
        <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
                <>
                    <div className="relative mt-2">
                        <Listbox.Button className="relative w-full cursor-default bg-white  pl-1 pr-10 text-left text-gray-900   focus:outline-none outline-none  sm:text-sm sm:leading-6">
                            <span className="flex items-center">
                                <Image src={selected.flag_url} width={30} height={20} alt="" className="h-5 w-7 flex-shrink-0" />
                                <span className="ml-1 block truncate">{selected.phone_number}</span>
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <HiChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-max-content overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {countries.map((country) => (
                                    <Listbox.Option
                                        key={country.id}
                                        className={({ active }) =>
                                            classNames(
                                                active ? 'bg-primary text-white' : 'text-gray-800',
                                                'relative cursor-default select-none py-2 pl-3 pr-1'
                                            )
                                        }
                                        value={country}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <div className="flex items-center space-x-2 px-2">
                                                    <Image width={30} height={20} src={country.flag_url} alt="" className="h-5 w-6 flex-shrink-0 " />
                                                    <span
                                                        className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                    >
                                                        {country.phone_number}
                                                    </span>
                                                    {selected ? (
                                                        <span
                                                            className={classNames(
                                                                active ? 'text-white' : 'text-primary',
                                                                ''
                                                            )}
                                                        >
                                                            <BsCheckCircleFill className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                </div>


                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    )
}
