"use client";
import React, { useTransition, useState, Suspense } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "./Cube";

const TAB_DATA = [
  {
    title: "FrontEnd",
    id: "frontend",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "BackEnd",
    id: "Backend",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>ExpressJs</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    title: "Programming Languages",
    id: "programming",
    content: (
      <ul className="list-disc pl-2">
        <li>C++</li>
        <li>Java</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("frontend");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
            <OrbitControls enableZoom={false} autoRotate />
          </Suspense>
        </Canvas>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I&apos;m a full-stack developer proficient in HTML, React, CSS, and
            JavaScript for the front end, and Node.js for the back end. I&apos;m
            dedicated to building web applications that combine sleek user
            interfaces with robust server-side functionality.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("frontend")}
              active={tab === "frontend"}
            >
              {" "}
              FrontEnd{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Backend")}
              active={tab === "Backend"}
            >
              {" "}
              Backend{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("programming")}
              active={tab === "programming"}
            >
              {" "}
              Programming Languages{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
