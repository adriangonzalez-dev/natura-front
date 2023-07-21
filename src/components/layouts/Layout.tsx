
import { Outlet } from 'react-router-dom'
import { Header } from '../header/Header'
import {Toaster} from 'sonner'


export const Layout = () => {

  return (
    <>
     <Header/>
        <Outlet/>
      <Toaster richColors position='top-center'/>
    </>
  )
}
