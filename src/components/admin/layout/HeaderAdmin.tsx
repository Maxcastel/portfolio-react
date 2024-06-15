import { useTranslation } from "react-i18next";
import { Bars3Icon } from '@heroicons/react/24/outline'
import { LangueSwitcher } from "@/components/widgets/LangueSwitcher";
import { ModeToggle } from "@/components/widgets/ModeToggle";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "@/components/UserContextProvider";

export function HeaderAdmin(){
    const { t } = useTranslation();
    const {logout} = useUserContext();
    const navigateTo = useNavigate();

    const navigation = [
        { name: t('projets'), href: '/admin/projets' },
        { name: t('projectEditor.create.h1'), href: '/admin/projets/create' },
        { name: "Emails", href: '/admin/emails' },
    ]

    return (
        <header className='top-0'>

            <nav className='py-4 flex justify-between items-center'>
                <div className="flex lg:flex-1 gap-4">
                    {navigation.map((item) => (
                        <a key={item.name} 
                            href={item.href}
                            className="text-sm font-semibold leading-6 text-primary hover:text-primary/80"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                <div className="lg:flex lg:gap-x-12 hidden">
                    <p className="text-sm font-semibold leading-6">
                        Administration
                    </p>
                </div>

                <div className='lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-3.5 hidden'>
                    <LangueSwitcher />
                    <ModeToggle />
                    <p className="cursor-pointer" onClick={() => {
                            logout(); 
                            navigateTo("/login");
                        }} 
                    >
                        Deconnexion
                    </p>
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