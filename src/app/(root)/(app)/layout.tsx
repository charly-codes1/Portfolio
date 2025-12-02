import type { Metadata } from 'next'
import PageTitleAnimation from './components/PageTitleAnimation'
import RootBackground from './components/RootBackground'

export const metadata: Metadata = {
  title: 'Oluwaseun Bamgbala',
  description: 'I’m Oluwaseun Bamgbala, a Front End  Developer based in Abuja, Nigeria.',
  openGraph: {
    images: '/media/poster.jpg',
    title: 'Oluwaseun Bamgbala',
    description: 'I’m Oluwaseun Bamgbala, a Front End  Developer based in Abuja, Nigeria.',
    url: '/',
  },
  alternates: {
    canonical: '/',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RootBackground />
      <PageTitleAnimation />
      <main className="relative z-10 flex-1 bg-white/60 p-3 dark:bg-black/75 md:px-5 md:pb-10 lg:px-10">{children}</main>
    </>
  )
}
