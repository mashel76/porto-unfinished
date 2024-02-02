import { FaHtml5, FaCss3Alt, FaPython, FaReact, FaUnity, FaVuejs } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiTypescript, SiUnrealengine } from "react-icons/si";
import { Progress } from "@nextui-org/react";
import { motion } from "framer-motion"

const skills = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ x: 10, opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-20 mx-20 text-[14px] ">
            <div className="flex flex-col gap-3">
                <div className="flex flex-row items-center">
                    HTML
                    <FaHtml5 />
                </div>
                <Progress classNames={{
                    track: "drop-shadow-md border border-default",
                    indicator: "bg-gradient-to-r from-teal-200 to-teal-500",
                }}
                    value={70}
                />
                <div className="flex flex-row items-center gap-2">
                    CSS
                    <FaCss3Alt />
                </div>
                <Progress classNames={{
                    track: "drop-shadow-md border border-default",
                    indicator: "bg-gradient-to-r from-teal-200 to-teal-500",
                }} value={60} />
                <div className="flex flex-row items-center gap-2">
                    JAVASCRIPT
                    <IoLogoJavascript />
                </div>
                <Progress classNames={{
                    track: "drop-shadow-md border border-default",
                    indicator: "bg-gradient-to-r from-teal-200 to-teal-500",
                }} value={10} />
                <div className="flex flex-row items-center gap-2">
                    PYTHON
                    <FaPython />
                </div>
                <Progress classNames={{
                    track: "drop-shadow-md border border-default",
                    indicator: "bg-gradient-to-r from-teal-200 to-teal-500",
                }} value={87} />
                <div className="flex flex-row items-center gap-2">
                    REACT
                    <FaReact />
                </div>
                <Progress classNames={{
                    track: "drop-shadow-md border border-default",
                    indicator: "bg-gradient-to-r from-teal-200 to-teal-500",
                }} value={34} />
                <div className="flex flex-row items-center gap-2">
                    TAILWIND
                    <SiTailwindcss />
                </div>
                <Progress classNames={{
                    track: "drop-shadow-md border border-default",
                    indicator: "bg-gradient-to-r from-teal-200 to-teal-500",

                }} value={95} />
                <div className="flex flex-row items-center gap-2">
                    TYPESCRIPT
                    <SiTypescript />
                </div>
                <Progress classNames={{
                    track: "drop-shadow-md border border-default",
                    indicator: "bg-gradient-to-r from-teal-200 to-teal-500",

                }} value={88} />
                <div className="flex flex-row items-center gap-2">
                    VUE
                    <FaVuejs />
                </div>
                <Progress classNames={{
                    track: "drop-shadow-md border border-default",
                    indicator: "bg-gradient-to-r from-teal-200 to-teal-500",
                }} value={66} />
                <div className="flex flex-row items-center gap-2">
                    UNITY
                    <FaUnity />
                </div>
                <Progress classNames={{
                    track: "drop-shadow-md border border-default",
                    indicator: "bg-gradient-to-r from-teal-200 to-teal-500",
                }} value={70} />
                <div className="flex flex-row items-center gap-2">
                    UNREAL
                    <SiUnrealengine />
                </div>
                <Progress classNames={{
                    track: "drop-shadow-md border border-default",
                    indicator: "bg-gradient-to-r from-teal-200 to-teal-500",
                }} value={70} />
            </div>
        </motion.div>
    )
}

export default skills