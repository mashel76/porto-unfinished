import { motion } from "framer-motion"
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";

const porto = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-40 mx-10 text-[14px]"
    >
      <Flicking className="text-center flex flex-col items-center justify-center" circular={true}>
        <div className="bg-blue-500 w-2/3 h-[97%]">Link Porto 1</div>
        <div className="bg-red-500 w-96 h-96">Link Porto 2</div>
        <div className="bg-green-500 w-96 h-96">Link Porto 3</div>
      </Flicking>
    </motion.div>
  )
}

export default porto