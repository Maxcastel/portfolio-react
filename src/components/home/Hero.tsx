import { useTranslation } from "react-i18next";
import { FadeText } from "../ui/FadeText";

export function Hero(){
    const { t } = useTranslation();

    // const HeaderContentHeight = 40;
    // const HeaderPaddingY = 16;

    return (
        <div className="px-4 flex items-center h-[calc(100vh-(24px+32px))] lg:h-[calc(100vh-(40px+32px))] pb-[calc(24px+32px)] lg:pb-[calc(40px+32px)]">

            <div className="flex flex-col leading-tight">
                <h1 className="text-[clamp(3rem,10vw,6rem)] font-extrabold bg-gradient-to-t from-slate-900 to-slate-500 bg-clip-text text-transparent dark:bg-gradient-to-t dark:from-slate-100 dark:to-slate-300">
                    Maxence Castel
                </h1>
                <FadeText
                    className="text-left tracking-normal text-[clamp(2rem,10vw,3rem)] font-bold dark:bg-gradient-to-r dark:from-slate-50 dark:to-slate-500 dark:bg-clip-text dark:text-transparent"
                    direction="down"
                    framerProps={{
                        show: { transition: { delay: 0.2 } },
                    }}
                    text={t('developpeurfullstack')}
                />
            </div>
            
        </div>
    )

}