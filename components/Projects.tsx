import React from 'react'
import Title from './Title'
import {FaProjectDiagram} from "react-icons/fa"
import ProjectCard from './ProjectCard'
import Image from 'next/image'
import profileImg from "@/public/images/profileImg.jpg"


function Projects() {
  return (
    <div className='wrapper'>
        <Title text="Projects" icon={<FaProjectDiagram/>}/>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center'>
        <ProjectCard img={profileImg.src} title="test1" link='/'/>
        <ProjectCard img={profileImg.src} title="test2" link='/'/>
        <ProjectCard img={profileImg.src} title="test3" link='/'/>
        <ProjectCard img={profileImg.src} title="test4" link='/'/>
        <ProjectCard img={profileImg.src} title="test5" link='/'/>
        <ProjectCard img={profileImg.src} title="test6" link='/'/>
        </div>
    </div>
  )
}

export default Projects