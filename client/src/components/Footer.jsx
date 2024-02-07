import React from 'react'
import {Footer} from "flowbite-react";
import { Link } from 'react-router-dom';
import {BsFacebook,BsTwitterX,BsGithub,BsInstagram,BsDribbble} from "react-icons/bs";


export default function FooterCom() {

  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-col">
            <div className="mt-5">
                <Link to="/" className='self-center whitespace-nowrap text-lg 
                sm:text-xl font-semibold dark:text-white'>
                <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Shivam's</span>
                Blog
                </Link>
            </div>
            <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                <div>
                    <Footer.Title title='About'/>
                    <Footer.LinkGroup col>
                        <Footer.Link href='https://react.dev/' target='_blank' rel='noopener noreferrer'>
                            React.js Dev
                        </Footer.Link>
                        <Footer.Link href='/about' target='_blank' rel='noopener noreferrer'>
                            Shivam's Blog
                        </Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <div>
                    <Footer.Title title='Follow Us'/>
                    <Footer.LinkGroup col>
                        <Footer.Link href='https://github.com/shivamdubeyagra' target='_blank' rel='noopener noreferrer'>
                            Github
                        </Footer.Link>
                        <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>
                            Discort
                        </Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <div>
                    <Footer.Title title='Legal'/>
                    <Footer.LinkGroup col>
                        <Footer.Link href='https://loremipsum.io/privacy-policy/' target='_blank' rel='noopener noreferrer'>
                            Privacy Policy
                        </Footer.Link>
                        <Footer.Link href='https://generator.lorem-ipsum.info/terms-and-conditions' target='_blank' rel='noopener noreferrer'>
                            Term &amp; Conditions
                        </Footer.Link>
                    </Footer.LinkGroup>
                </div>
            </div> 
        </div>
        <Footer.Divider/>
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
            <Footer.Copyright href='#' by="Shivam's Blog" year={new Date().getFullYear()}/>
            <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                <Footer.Icon href='#' icon={BsFacebook}/>
                <Footer.Icon href='#' icon={BsInstagram}/>
                <Footer.Icon href='#' icon={BsTwitterX}/>
                <Footer.Icon href='#' icon={BsGithub}/>
                <Footer.Icon href='#' icon={BsDribbble}/>
            </div>
        </div>
      </div>
    </Footer>
  )
}
