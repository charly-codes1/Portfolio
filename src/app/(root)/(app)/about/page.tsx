import dedeard from '@/assets/SEUN PHOTOGRAPH.jpg'
import { RESUME_URL } from '@/constans/common'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'About -  Oluwaseun Bamgbala',
  openGraph: {
    title: 'About -  Oluwaseun Bamgbala',
    url: '/about',
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <PageTitle title="About" />
      <div className="md:flex">
        <div className="mb-5 md:w-56">
          <Image src={dedeard} alt="Foto dede ariansya" className="block w-full" placeholder="blur" />
        </div>
        <div className="md:flex-1 md:pl-6">
          <h2 className="mb-2 text-xl font-bold">I’m Oluwaseun Bamgbala </h2>
          <div className="mb-6">
            <p className="mb-1">
              Front-End  Developer based in Nigeria, Abuja. <br />As a Frontend and React Developer, I focus on writing code that’s clean, readable, and easy for anyone to build upon.
            </p>
          </div>
          <h2 className="mb-2 text-xl font-bold">EXPEREINCE</h2>
          <div className="mb-6">
            <p className="mb-1">
            I have over 6 years of experience building numerous websites and web applications that always met the requirements of my clients.
  
            </p>
          </div>
          <h2 className="mb-2 text-xl font-bold">Tech Stack</h2>
          <div className="mb-6">
            <p className="mb-1">React.js • Next.js • JavaScript (ES6+) • TypeScript • HTML5 • CSS3</p>
          </div>
          <a
            download
            target="_blank"
            rel="nofollow"
            href={RESUME_URL}
            className="mr-3 inline-block bg-white px-5 py-3 hover:bg-black hover:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black"
          >
            Resume
          </a>
          <Link
            href="mailto:charlybamgbala101@gmail.com"
            rel="nofollow"
            className="inline-block bg-white px-5 py-3 hover:bg-black hover:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black"
          >
            Contact me
          </Link>
        </div>
      </div>
    </>
  )
}
