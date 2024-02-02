import { motion } from "framer-motion"
const porto = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      porto
    </motion.div>
  )
}

export default porto