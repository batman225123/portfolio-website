import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { TerminalComponent } from "@/components/common/TerminalComponent ";
import { motion, AnimatePresence } from "framer-motion";
import { Min_projects } from "../../data/Min_projects";
import { useState } from "react";

export default function ShowTerminal() {
  const [showTerminal, setShowTerminal] = useState(true);

  return (
    <div className="terminal-container mt-24">
      <div className="w-full px-4 flex items-center justify-between">
        {showTerminal ? (
          <span>
            <h3 className="text-3xl text-green-600 font-extrabold">
              $ ~/ terminal
            </h3>
          </span>
        ) : (
          <span>
            <h3 className="text-3xl text-foreground font-extrabold mb-10">
              $ ~/ Projects
            </h3>
          </span>
        )}

        <div className="right-dev-switch flex items-center gap-2">
          <h3 className="text-md text-[#B0D4D8] font-thin opacity-50">
            Dev Mode
          </h3>
          <Switch
            checked={showTerminal}
            onCheckedChange={setShowTerminal}
            className="data-[state=checked]:bg-green-500"
          />
        </div>
      </div>
      <AnimatePresence mode="wait">
        {showTerminal ? (
          <motion.div
            key="terminal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <TerminalComponent height="min-h-[50vh]" width="w-full px-4" />
          </motion.div>
        ) : (
          <motion.div
            key="cards"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4"
          >
            {Min_projects.map((project, index) => (
              <CardContainer key={index} className="inter-var">
                <CardBody className=" bg-[#101214] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl pb-2  border">
                  <div className="flex items-center justify-between flex-row-reverse bg-[#18181B] px-3 py-4 rounded-t-xl mb-4">
                    <div className="text-sm text-foreground opacity-85">
                      {project.title}
                    </div>
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="h-3 w-3 rounded-full bg-red-500 cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      />
                      <motion.div
                        className="h-3 w-3 rounded-full bg-yellow-500 cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      />
                      <motion.div
                        className="h-3 w-3 rounded-full bg-green-500 cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      />
                    </div>
                  </div>

                  <CardItem
                    as="a"
                    href={project.link}
                    target="__blank"
                    translateZ="100"
                    className="w-full mt-5 px-4"
                  >
                    <Image
                      src={project.image}
                      width={300}
                      height={300}
                      className="h-full w-full object-cover rounded-md group-hover/card:shadow-xl  bg-white"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="mt-6">
                    <CardItem
                      translateZ="50"
                      as="a"
                      href={project.link}
                      target="__blank"
                      className="text-xl font-bold text-white dark:text-white pl-4"
                    >
                      {project.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-foreground text-xs opacity-75 max-w-sm mt-4 dark:text-neutral-300 pl-4 leading-6"
                    >
                      {project.description}
                    </CardItem>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <CardItem
                      translateZ={20}
                      as="a"
                      href={project.link}
                      target="__blank"
                      className="px-4 py-2"
                    >
                      <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-2 mt-4 md:mt-4 w-full">
                        {project.icons?.map((icon) => (
                          <div
                            className="border border-neutral-600/40 rounded-lg p-3"
                            key={`key-image`}
                          >
                            <Image
                              className="w-full"
                              width={300}
                              height={300}
                              src={icon}
                              alt="Project-icons"
                            />
                          </div>
                        ))}
                      </div>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
