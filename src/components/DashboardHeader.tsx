/* eslint-disable */
import { Popover } from '@headlessui/react'
import Link from 'next/link';
import Image from "next/image";
import WalletComponent from './WalletComponent';

const headerElements = [
    { key: 1, name: 'Certificates', href: '#what' },
    { key: 2, name: 'Employees', href: '#who' },
    // { key: 3, name: 'Graphs', href: '#blockchain' },
    { key: 4, name: 'Settings', href: '/transfer' },
    // { key: 5, name: 'Mint certificates', href: '/mint' },
];

const logo = {
    name: 'Kawi',
    src: '/images/kawi.png',
    href: '/'
}

export const DashboardHeader = () => {


    return (
        <header className="bg-white">

            <nav className="mx-auto flex items-center justify-between p-3 lg:px-8" aria-label="Global">
                {/* Logo */}
                <div className="flex lg:flex-1">
                    <Link href={logo.href} className="-m-1.5 p-1.5 flex items-center">
                        <Image className="h-16 w-auto" width={200} height={200} src={logo.src} alt={`${logo.name} logo`} />
                        <span className="font-title text-2xl inlines">{logo.name}</span>
                    </Link>
                </div>


                <div className="flex lg:hidden">
                    <WalletComponent />
                </div>


                {/* Header elements */}
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    {headerElements.map((item) => (
                        <Link key={item.key} href={item.href} className="text-sm font-semibold leading-6 hover:text-gray-700 text-gray-900">
                            {item.name}
                        </Link>
                    ))}
                </Popover.Group>



                {/* Login btn */}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <WalletComponent />
                </div>

            </nav>

            <hr className="border-1 border-black" />
        </header>
    )
}
/* eslint-disable */