import { Nodejs2Svg } from "@/svg/Nodejs2Svg";
import { ReactSvg } from "@/svg/ReactSvg";
import { SpringSvg } from "@/svg/SpringSvg";
import { SymfonySvg } from "@/svg/SymfonySvg";
import { CSSSvg } from "@/svg/CSSSvg";
import { HTMLSvg } from "@/svg/HTMLSvg";
import { JavaScriptSvg } from "@/svg/JavaScriptSvg";
import { PHPSvg } from "@/svg/PHPSvg";
import { TypeScriptSvg } from "@/svg/TypeScriptSvg";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Bootstrap2Svg } from "@/svg/Bootstrap2Svg";
import { TailwindSvg } from "@/svg/TailwindSvg";
import { JavaIconSvg } from "@/svg/JavaIconSvg";
import { useTranslation } from "react-i18next";

export function Skills(){
    const { t } = useTranslation();

    return (
        <section className="flex flex-col pb-[10vh]" id="skills">

            <h2 className="text-center text-4xl font-bold my-10">
                {t('competences')}
            </h2>
            
            <div className="flex flex-col items-center gap-y-6 mx-auto w-full max-w-[710px]">
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="text-center mb-2">
                            Frontend
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] sm:gap-9 gap-6 md:gap-9">
                        <div className="group flex flex-col items-center">
                            <div className="group-hover:scale-110 ease-in-out duration-300">
                                <HTMLSvg width={90} height={90} />
                            </div>
                            <p className="text-center font-semibold text-lg mt-3">
                                HTML
                            </p>
                        </div>
                        <div className="group flex flex-col items-center">
                            <div className="group-hover:scale-110 ease-in-out duration-300">
                                <CSSSvg width={90} height={90} />
                            </div>
                            <p className="text-center font-semibold text-lg mt-3">
                                CSS
                            </p>
                        </div>
                        <div className="group flex flex-col items-center">
                            <div className="group-hover:scale-110 ease-in-out duration-300">
                                <JavaScriptSvg width={90} height={90} />
                            </div>
                            <p className="text-center font-semibold text-lg mt-3">
                                JavaScript
                            </p>
                        </div>
                        <div className="group flex flex-col items-center">
                            <div className="group-hover:scale-110 ease-in-out duration-300">
                                <TypeScriptSvg width={90} height={90} />
                            </div>
                            <p className="text-center font-semibold text-lg mt-3">
                                TypeScript
                            </p>
                        </div>
                        <div className="group flex flex-col items-center">
                            <div className="group-hover:scale-110 ease-in-out duration-300">
                                <ReactSvg width={90} height={90} />
                            </div>
                            <p className="text-center font-semibold text-lg mt-3">
                                React
                            </p>
                        </div>
                        {/* md: = plus grand que md */}
                        <div className="group md:col-start-2 flex flex-col items-center">
                            <div className="group-hover:scale-110 ease-in-out duration-300">
                                <ReactSvg width={90} height={90} />
                            </div>
                            <p className="text-center font-semibold text-lg mt-3">
                                React Native
                            </p>
                        </div>
                        <div className="group flex flex-col items-center">
                            <div className="group-hover:scale-110 ease-in-out duration-300">
                                <Bootstrap2Svg width={90} height={90} />
                            </div>
                            <p className="text-center font-semibold text-lg mt-3">
                                Bootstrap
                            </p>
                        </div>
                        <div className="group flex flex-col items-center">
                            <div className="group-hover:scale-110 ease-in-out duration-300">
                                <TailwindSvg width={90} height={90} />
                            </div>
                            <p className="text-center font-semibold text-lg mt-3">
                                Tailwind
                            </p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="text-center mb-2">
                            Backend
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-9">
                        <div className="group flex flex-col items-center">
                            <div className="group-hover:scale-110 ease-in-out duration-300">
                                <SymfonySvg width={90} height={90} /> 
                            </div>
                            <p className="text-center font-semibold text-lg mt-3">
                                Symfony
                            </p>
                        </div>
                        <div className="group flex flex-col items-center">
                            <div className="group-hover:scale-110 ease-in-out duration-300">
                                <Nodejs2Svg width={90} height={90} /> 
                            </div>
                            <p className="text-center font-semibold text-lg mt-3">
                                NodeJS
                            </p>
                        </div>
                        <div className="group flex flex-col items-center">
                            <div className="group-hover:scale-110 ease-in-out duration-300">
                                <SpringSvg width={90} height={90} /> 
                            </div>
                           <p className="text-center font-semibold text-lg mt-3">
                                Spring
                            </p>
                        </div>
                        <div className="flex flex-col group items-center">
                            <div className="my-auto group-hover:scale-110 ease-in-out duration-300">
                                <PHPSvg width={90} height={"100%"} /> 
                            </div>
                           <p className="text-center font-semibold text-lg mt-3">
                                PHP
                            </p>
                        </div>
                        <div className="group flex flex-col items-center">
                            <div className="group-hover:scale-110 ease-in-out duration-300">
                                <JavaIconSvg width={90} height={90} /> 
                           </div>
                           <p className="text-center font-semibold text-lg mt-3">
                                Java
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
                {/* <Card>
                    <CardHeader>
                        <CardTitle className="text-center mb-2">Frontend</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap justify-center gap-8">
                        <div className="group">
                            <HTMLSvg width={100} height={100} />
                            <p className="text-center font-semibold text-lg mt-3">
                                HTML
                            </p>
                        </div>
                        <div className="group">
                            <CSSSvg width={100} height={100} />
                            <p className="text-center font-semibold text-lg mt-3">
                                CSS
                            </p>
                        </div>
                        <div className="group">
                            <JavaScriptSvg width={100} height={100} />
                            <p className="text-center font-semibold text-lg mt-3">
                                JavaScript
                            </p>
                        </div>
                        <div className="group">
                            <TypeScriptSvg width={100} height={100} />
                            <p className="text-center font-semibold text-lg mt-3">
                                TypeScript
                            </p>
                        </div>
                        <div className="group">
                            <ReactSvg width={100} height={100} />
                            <p className="text-center font-semibold text-lg mt-3">
                                React
                            </p>
                        </div>
                        <div className="group">
                            <ReactSvg width={100} height={100} />
                            <p className="text-center font-semibold text-lg mt-3">
                                React Native
                            </p>
                        </div>
                        <div className="group">
                            <Bootstrap2Svg width={100} height={100} />
                            <p className="text-center font-semibold text-lg mt-3">
                                Bootstrap
                            </p>
                        </div>
                        <div className="group">
                            <TailwindSvg width={100} height={100} />
                            <p className="text-center font-semibold text-lg mt-3">
                                Tailwind
                            </p>
                        </div>
                    </CardContent>
                </Card> */}
                {/* <Card>
                    <CardHeader>
                        <CardTitle className="text-center mb-2">Frontend</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap justify-center gap-8">
                        <div>
                            <HTMLSvg width={100} height={100} />
                            <p className="text-orange-600 text-center font-semibold text-lg mt-3">
                                HTML
                            </p>
                        </div>
                        <div>
                            <CSSSvg width={100} height={100} />
                            <p className="text-blue-500 text-center font-semibold text-lg mt-3">
                                CSS
                            </p>
                        </div>
                        <div>
                            <JavaScriptSvg width={100} height={100} />
                            <p className="text-yellow-400 text-center font-semibold text-lg mt-3">
                                JavaScript
                            </p>
                        </div>
                        <div>
                            <TypeScriptSvg width={100} height={100} />
                            <p className="text-blue-500 text-center font-semibold text-lg mt-3">
                                TypeScript
                            </p>
                        </div>
                        <div>
                            <ReactSvg width={100} height={100} />
                            <p className="text-cyan-400 text-center font-semibold text-lg mt-3">
                                React
                            </p>
                        </div>
                        <div>
                            <ReactSvg width={100} height={100} />
                            <p className="text-cyan-400 text-center font-semibold text-lg mt-3">
                                React Native
                            </p>
                        </div>
                        <div>
                            <Bootstrap2Svg width={100} height={100} />
                            <p className="text-violet-700 text-center font-semibold text-lg mt-3">
                                Bootstrap
                            </p>
                        </div>
                        <div>
                            <TailwindSvg width={100} height={100} />
                            <p className="text-cyan-400 text-center font-semibold text-lg mt-3">
                                Tailwind
                            </p>
                        </div>
                    </CardContent>
                </Card> */}
                
                {/* <Card>
                    <CardHeader>
                        <CardTitle className="text-center mb-2">Backend</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap justify-center gap-8">
                        <SymfonySvg width={100} height={100} />
                        <Nodejs2Svg width={100} height={100} />
                        <SpringSvg width={100} height={100} />
                        <PHPSvg width={100} height={"100%"} />
                        <JavaSvg width={100} height={100} />
                    </CardContent>
                </Card> */}
                
                {/* <Card>
                    <CardHeader>
                        <CardTitle className="text-center mb-2">Backend</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap justify-center gap-8">
                        <div>
                           <SymfonySvg width={100} height={100} /> 
                           <p className="text-center font-semibold text-lg mt-3">
                                Symfony
                            </p>
                        </div>
                        <div>
                           <Nodejs2Svg width={100} height={100} /> 
                           <p className="text-lime-400 text-center font-semibold text-lg mt-3">
                                NodeJS
                            </p>
                        </div>
                        <div>
                           <SpringSvg width={100} height={100} /> 
                           <p className="text-green-500 text-center font-semibold text-lg mt-3">
                                Spring
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <div className="my-auto">
                                <PHPSvg width={100} height={"100%"} />
                            </div>
                           <p className="text-indigo-400 text-center font-semibold text-lg mt-3">
                                PHP
                            </p>
                        </div>
                        <div>
                           <JavaIconSvg width={100} height={100} /> 
                           <p className="text-orange-400 text-center font-semibold text-lg mt-3">
                                Java
                            </p>
                        </div>
                    </CardContent>
                </Card> */}



                {/* <Card>
                    <CardHeader>
                        <CardTitle className="text-center mb-2">Langages</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap justify-center gap-8">
                        <HTMLSvg width={100} height={100} />
                        <CSSSvg width={100} height={100} />
                        <JavaScriptSvg width={100} height={100} />
                        <TypeScriptSvg width={100} height={100} />
                        <PHPSvg width={100} height={"auto"} />
                        <JavaSvg width={100} height={100} />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-center mb-2">Frameworks</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap justify-center gap-8">
                            <SymfonySvg width={100} height={100} />
                            <Nodejs2Svg width={100} height={100} />
                            <ReactSvg width={100} height={100} />
                            <ReactNativeSvg width={100} height={100} />
                            <SpringSvg width={100} height={100} />
                    </CardContent>
                </Card> */}
            {/* </div> */}

        </section>
    )
}