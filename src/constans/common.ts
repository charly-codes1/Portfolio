import { FiBookOpen, FiClipboard, FiGlobe, FiHome, FiMail, FiUser } from 'react-icons/fi'

export const HOST = process.env.NEXT_PUBLIC_HOST || 'http://localhost:3000'

export const NAV_ITEMS = [
  { path: '/', label: 'Home', Icon: FiHome },
  { path: '/about', label: 'About', Icon: FiUser },
  { path: '/projects', label: 'Projects', Icon: FiClipboard },
  { path: '/contact', label: 'Contact', Icon: FiMail },
]

export const PAGE_TITLES = {
  '/': '._',
  '/about': 'About',
  '/projects': 'Projects',
  '/contact': 'Contact',
}

export const SOCIALS = {
  GH: 'https://github.com/charly-codes1/charly-codes1.git',
  IG: '',
  IN: 'https://www.linkedin.com/in/oluwaseun-bamgbala-b9a134233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
  WA: 'http://wa.me/+2347067589828',
}

export const RESUME_URL = 'https://docs.google.com/document/d/1txdRuu4d22rn4vN0TdQSoQkqJT5ki-_kj6F-twBkAqk/edit?usp=sharing'

export const FORMSPREE_KEY = process.env.NEXT_PUBLIC_FORMSPREE_KEY || 'xzzqerqz'

export const FIREBASE_CONFIG = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || '',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '',
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || '',
}
