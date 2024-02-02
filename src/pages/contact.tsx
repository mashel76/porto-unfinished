import { Popover, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";
import { RiMailSendFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion"
const contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ x: 20, opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mx-10 my-10 flex flex-col gap-24 justify-between">
      <Popover placement="right" className="w-4/6 h-32">
        <PopoverTrigger>
          <Button isIconOnly className="w-32 h-32 text-6xl bg-transparent rounded-full border-4 border-teal-500">
            <RiMailSendFill />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="bg-teal-500 mx-2">
          <div className="px-1 py-2">
            <div className="text-small font-bold">Exercitation ullamco ut incididunt consequat ex deserunt cillum laboris consequat non. Excepteur cupidatat duis est labore sit et dolor culpa ex tempor et ut pariatur consectetur. Minim culpa officia aliquip consectetur velit irure. Exercitation sit mollit in ex veniam id esse. Qui pariatur sint ad commodo occaecat cupidatat.</div>
          </div>
        </PopoverContent>
      </Popover>
      <Popover placement="right" className="w-4/6 h-32">
        <PopoverTrigger>
          <Button isIconOnly className="w-32 h-32 text-6xl bg-transparent rounded-full border-4 border-teal-500">
            <FaWhatsapp />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="bg-teal-500 mx-2">
          <div className="px-1 py-2 ">
            <div className="text-small font-bold">Qui irure cupidatat culpa adipisicing laboris Lorem elit tempor officia enim ex cupidatat velit exercitation. Cillum eiusmod aliqua laborum tempor ipsum eiusmod do dolore veniam ut officia excepteur laborum officia. Pariatur velit ea ipsum sint do eu est exercitation laboris excepteur. Fugiat ut officia laborum aliqua ea.</div>
          </div>
        </PopoverContent>
      </Popover>
      <Popover placement="right" className="w-4/6 h-32">
        <PopoverTrigger>
          <Button isIconOnly className="w-32 h-32 text-6xl bg-transparent rounded-full border-4 border-teal-500">
            <FaLocationDot />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="bg-teal-500 mx-2">
          <div className="px-1 py-2 ">
            <div className="text-small font-bold">Qui irure cupidatat culpa adipisicing laboris Lorem elit tempor officia enim ex cupidatat velit exercitation. Cillum eiusmod aliqua laborum tempor ipsum eiusmod do dolore veniam ut officia excepteur laborum officia. Pariatur velit ea ipsum sint do eu est exercitation laboris excepteur. Fugiat ut officia laborum aliqua ea.</div>
          </div>
        </PopoverContent>
      </Popover>
    </motion.div>
  )
}

export default contact