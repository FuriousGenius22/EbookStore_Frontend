
import NavBar from './NavBar'
import {type FC} from 'react'
import { type ReactNode } from 'react'

interface Props{
    children:ReactNode
}
const Container:FC<Props> = ({children}) => {
  return (
    <div className='min-h-screen max-w-5xl mx-auto flex flex-col bg-gray-600' >
        <NavBar />
        <div className="flex-1 flex flex-col bg-gray-400">{children}</div>
    </div>
  )
}

export default Container