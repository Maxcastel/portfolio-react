import { GithubSvg } from "@/svg/GithubSvg";
import { LinkedinSvg } from "@/svg/LinkedinSvg";
import { useTranslation } from "react-i18next";

export function Footer(){
    const { t } = useTranslation();

    return (
        <footer className="max-lg:flex max-lg:flex-col-reverse max-lg:gap-y-2 max-lg:pb-4">
            <div className="text-center">
                <p>{t('footer.title')}</p> 
            </div>
            <div className="flex lg:flex-row max-lg:flex-col-reverse max-lg:gap-y-2 lg:justify-between items-center min-h-16">
                <div className="flex lg:pl-4 gap-x-2 lg:mt-2">
                    <p>© 2024 Castel Maxence.</p>
                </div>
                
                <div className="flex lg:pr-4 gap-x-2 lg:mt-2">
                    <a href="https://github.com/Maxcastel" target="_blank" rel="noopener noreferrer">
                        <GithubSvg width={20} height={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/maxence-castel-46391a224/" target="_blank" rel="noopener noreferrer">
                        <LinkedinSvg width={20} height={20} />
                    </a>
                </div>
            </div>
        </footer>
    )
}