import { useTranslation } from "react-i18next";
import { Bars3Icon } from '@heroicons/react/24/outline'
import { LangueSwitcher } from "../widgets/LangueSwitcher";
import { ModeToggle } from "../widgets/ModeToggle";

export function Header(){
    const { t } = useTranslation();

    const navigation = [
        { name: t('projets'), href: '/#projects' },
        { name: t('experience'), href: '/#experience' },
        { name: t('competences'), href: '/#skills' },
        { name: 'Formations', href: '/#formations' },
    ]

    return (
        <header className='top-0'>

            <nav className='py-4 flex justify-between items-center'>
                <a href='/' className="flex lg:flex-1 font-semibold">Max</a>
            
                <div className="lg:flex lg:gap-x-12 hidden">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm font-semibold leading-6">
                            {item.name}
                        </a>
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