import { useTranslation } from "react-i18next";
import { Bars3Icon } from '@heroicons/react/24/outline'
import { LangueSwitcher } from "../widgets/LangueSwitcher";
import { ModeToggle } from "../widgets/ModeToggle";
import { HashLink } from 'react-router-hash-link';

export function Header(){
    const { t } = useTranslation();

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
                <div className="flex lg:flex-1">
                    <a href='/' className="font-semibold">
                        Max
                    </a>
                </div>

                <div className="lg:flex lg:gap-x-10 hidden">
                    {navigation.map((item) => (
                        <HashLink key={item.name} 
                            smooth to={item.href} 
                            className="text-sm font-semibold leading-6 text-primary hover:text-primary/50"
                        >
                            {item.name}
                        </HashLink>
                    ))}
                </div>

                <div className='lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-3.5 hidden'>
                    <LangueSwitcher />
                    <ModeToggle />
                </div>
            
                <div className="lg:hidden flex">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
            </nav>   

        </header>
    )
}