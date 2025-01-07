import React from 'react'
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
} from 'react-icons/ri'
  import Link from 'next/link';
  const icons = [
    {
      path:'https://github.com/emran-binhasan',
      name: <RiGithubFill/>
    },
    {
      path:'https://web.facebook.com/emran.bin.hasan.2024/',
      name: <RiFacebookFill/>
    },
    {
      path:'https://www.linkedin.com/in/emran-binhasan/',
      name: <RiLinkedinFill/>
    },
    {
      path:'https://www.youtube.com/emran-binhasan',
      name: <RiYoutubeFill/>
    }
  ]
const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={`${containerStyles}`}>
     { icons.map((icon, index) => {
      return <Link href={icon.path} key={index}>
        <p className={`${iconStyles}`}>{icon.name}</p>
      </Link>
     })}
    </div>
  )
}

export default Socials