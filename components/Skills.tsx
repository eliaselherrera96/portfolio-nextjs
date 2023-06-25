import React from 'react'
import Title from './Title'
import {GiSkills} from "react-icons/gi"
import SkillsInput from './SkillsInput'

function Skills() {
  return (
    <div className='wrapper'>
        <Title text="Skills" icon={<GiSkills/>}/>
        <div className='flex gap-4 flex-wrap'>
            <SkillsInput title='HTML5' link='https://www.w3schools.com/html/html_intro.asp'/>
            <SkillsInput title='CSS3' link='https://developer.mozilla.org/en-US/docs/Web/CSS'/>
            <SkillsInput title='Javascript' link='https://developer.mozilla.org/en-US/docs/Web/JavaScript'/>
            <SkillsInput title='Typescript' link='https://www.typescriptlang.org/docs/'/>
            <SkillsInput title='Reactjs' link='https://legacy.reactjs.org/docs/getting-started.html'/>
            <SkillsInput title='Nextjs' link='https://nextjs.org/docs'/>
            <SkillsInput title='Nodejs' link='https://nodejs.org/en/docs'/>
            <SkillsInput title='Expressjs' link='https://expressjs.com/'/>
            <SkillsInput title='MongoDB' link='https://www.mongodb.com/docs/'/>
            <SkillsInput title='Git' link='https://git-scm.com/doc'/>
            <SkillsInput title='Github' link='https://docs.github.com/en'/>
            <SkillsInput title='Vercel' link='https://vercel.com/docs'/>
            <SkillsInput title='VS Code' link='https://code.visualstudio.com/docs'/>
        </div>
    </div>
  )
}

export default Skills