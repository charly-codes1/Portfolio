import { FORMSPREE_KEY, SOCIALS } from '@/constans/common'
import type { Metadata } from 'next'
import PageTitle from '../components/PageTitle'
import ContactForm from './components/ContactForm'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Contact - Oluwaseun Bamgbala',
  openGraph: {
    title: 'Contact - Oluwaseun Bamgbala',
    url: '/contact',
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <PageTitle title="Contact" />
      <div className="flex flex-col lg:flex-row">
        <div className="mb-4 w-full text-center lg:w-[480px] lg:text-left">
          <div className="mb-8">
            <h2 className="mb-3 text-lg font-bold">TEMPORARY ADDRESS</h2>
            <p className="text-sm leading-5">
              Abuja, Maitama. <br />
              900271
            </p>
          </div>
          <div className="mb-8">
            <h2 className="mb-3 text-lg font-bold">EMAIL ADDRESS</h2>
            <p className="text-sm leading-5">
              <a href="mailto:charlybamgbala101@gmail.com" rel="noopener" className="hover:text-yellow-600">
                charlybamgbala101@gmail.com
              </a>
              <br />
              <a href="mailto:adebolabangbala@gmail.com" rel="noopener" className="hover:text-yellow-600">
                adebolabangbala@gmail.com
              </a>
            </p>
          </div>
          <div className="mb-8">
            <h2 className="mb-3 text-lg font-bold">MOBILE PHONE</h2>
            <p className="text-sm leading-5">
              <span>Call: </span>
              <a href="tel:+2347067589828" target="_blank" rel="noopener" className="hover:text-yellow-600">
                +2347067589828
              </a>
              <br />
              <span>WhatsApp: </span>
              <a href={SOCIALS.WA} target="_blank" rel="noopener" className="hover:text-yellow-600">
                +2347067589828
              </a>
            </p>
          </div>
        </div>
        <div className="lg:flex-1">
          <ContactForm formspreeKey={FORMSPREE_KEY} />
        </div>
      </div>
    </>
  )
}
