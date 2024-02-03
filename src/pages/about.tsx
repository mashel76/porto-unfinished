import { motion } from "framer-motion"
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { Divider } from "@nextui-org/react"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const About = () => {
  const [categories] = useState({
    Pendidikan: [
      {
        id: 1,
        title: 'Sekolah 1',
        date: 'teks apapun',
      },
      {
        id: 2,
        title: "Sekolah 2",
        date: 'teks apapun',
      },
      {
        id: 3,
        title: "Sekolah 3",
        date: 'teks apapun',
      },
      {
        id: 4,
        title: "Sekolah 4",
        date: 'teks apapun',
      },
    ],
    Experience: [
      {
        id: 1,
        title: 'Exp 1',
        date: 'teks apapun',
      },
      {
        id: 2,
        title: 'Exp 2',
        date: 'teks apapun',
      },
      {
        id: 3,
        title: 'Exp 3',
        date: 'teks apapun',
      },
      {
        id: 4,
        title: 'Exp 4',
        date: 'teks apapun',
      },
    ],
    Achievment: [
      {
        id: 1,
        title: 'Achiev 1',
        date: 'teks apapun',
      },
      {
        id: 2,
        title: "Achiev 2",
        date: 'teks apapun',
      },
      {
        id: 3,
        title: 'Achiev 3',
        date: 'teks apapun',
      },
      {
        id: 4,
        title: "Achiev 4",
        date: 'teks apapun',
      },
    ],
  })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <div className="m-10 flex gap-5">
        <img src="./avatar.jpg" className="w-40 h-40 rounded-full" />
        <div className="text-justify w-3/5 pt-8">
          <p>Nostrud sint officia sit adipisicing consequat nisi adipisicing sunt voluptate non. Ut et ea exercitation adipisicing aliquip deserunt consectetur. Laborum qui sit occaecat non eu nisi Lorem dolore aute sit qui occaecat. Sunt sit quis laboris veniam Lorem consequat nostrud occaecat eiusmod ipsum.</p>
        </div>
      </div>
      <Divider className="mr-4" />
      <div className="m-10">
        <div className="flex w-full flex-col">
        <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-teal-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-white/60 ring-offset-2 ring-offset-teal-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white text-teal-700 shadow'
                    : 'text-teal-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white/60 ring-offset-2 ring-offset-teal-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li>{post.date}</li>
                    </ul>

                    <a
                      href="#"
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'ring-teal-400 focus:z-10 focus:outline-none focus:ring-2'
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
        </div>
      </div>
    </motion.div>
  )
}

export default About