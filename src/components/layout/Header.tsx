import { useTranslation } from "react-i18next";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { LangueSwitcher } from "../widgets/LangueSwitcher";
import { ModeToggle } from "../widgets/ModeToggle";
import { HashLink } from 'react-router-hash-link';
import { useState } from "react";
import { Dialog } from '@headlessui/react';

export function Header(){
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navigation = [
        { name: t('projets'), href: '/#projects' },
        { name: t('experience'), href: '/#experience' },
        { name: t('competences'), href: '/#skills' },
        { name: 'Formations', href: '/#formations' },
        { name: 'Contact', href: '/#contact' },
    ]

    return (
        <header className='top-0'>

            <nav className='py-4 flex justify-between items-center'>
                <div className="flex md:flex-1">
                    <a href='/' className="font-semibold">
                        Max
                    </a>
                </div>

                <div className="md:flex md:gap-x-10 hidden">
                    {navigation.map((item) => (
                        <HashLink key={item.name} 
                            smooth to={item.href} 
                            className="text-sm font-semibold leading-6 text-primary hover:text-primary/70"
                        >
                            {item.name}
                        </HashLink>
                    ))}
                </div>

                <div className='md:flex md:flex-1 md:justify-end md:items-center md:gap-x-3.5 hidden'>
                    <LangueSwitcher />
                    <ModeToggle />
                </div>
            
                <div className="md:hidden flex">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
            </nav>  
            <Dialog as="div" className="md:hidden" open={isMenuOpen} onClose={setIsMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="/" className="-m-1.5 p-1.5">
                            <p>Max</p>
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.slice(0, -1).map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <a
                                    href="#contact"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>

        </header>
    )
}