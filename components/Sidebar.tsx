import React,{useState} from 'react'
import { NextPage } from 'next'
import {useRouter} from 'next/router'
import Link from 'next/link'
import {AiFillHome,AiOutlineMenu} from 'react-icons/ai'
import {ImCancelCircle} from 'react-icons/im'
import GoogleLogin from 'react-google-login'

// Components
import Discover from './Discover'
import Footer from './Footer'
import SuggestedAccounts from './SuggestedAccounts'

const Sidebar = () => {
  const [showSidebar,setShowSidebar] = useState(true);
  const userProfile = false

  const { pathname } = useRouter();

  const normalLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold rounded';
  const activeLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#F51997] rounded';
  return (
    <div>
      <div
      className='block xl:hidden m-2 ml-4 mt-3 text-xl'
      onClick={()=> setShowSidebar((prev)=> !prev)}
      >
      {showSidebar ? <ImCancelCircle/> : <AiOutlineMenu/>}
      </div>
      {showSidebar && (
        <div className='xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3'>
          <div className='xl:border-b-2 border-gray-200 xl:pb-4'>
            <Link href="/">
            <div className={pathname === '/' ? activeLink : normalLink}>
                <p className='text-2xl'>
                  <AiFillHome/>
                </p>
                <span className='text-xl hidden xl:block'>
                  For You
                </span>
              </div>
            </Link>

          </div>
          
          {!userProfile && (
            <div className='px-2 py-4 hidden xl:block'>
              <p className='text-gray-400 '>
                Log in to like and comment on videos
              </p>
              <div className='pr-4'>
                {/* <GoogleLogin/> */}
              </div>
            </div>
          )}
          <Discover/>
          <SuggestedAccounts/>
          <Footer/>
        </div>
      )}
      
    </div>
  )
}

export default Sidebar