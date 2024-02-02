import { motion } from "framer-motion"
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="m-10 flex flex-col items-center justify-center">
      <img src="./avatar.jpg" className="w-1/4 h-full rounded-full" />
      <p className="mx-64 pt-20">Velit eu mollit ipsum magna qui ex voluptate proident. Culpa ullamco reprehenderit qui veniam do cillum labore. Ullamco deserunt cupidatat anim deserunt. Quis incididunt ullamco incididunt commodo est ex id Lorem tempor ut tempor labore sunt mollit.</p>
    </motion.div>
  )
}

export default Home