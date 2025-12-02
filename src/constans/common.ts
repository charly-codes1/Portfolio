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
  apiKey: 'AIzaSyCVXW6MTdRVtYPTOoV92ruBQ3ZQcF5Ho0g',
  authDomain: 'dede-ard.firebaseapp.com',
  databaseURL: 'https://dede-ard.firebaseio.com',
  projectId: 'dede-ard',
  storageBucket: 'dede-ard.appspot.com',
  messagingSenderId: '120930847292',
  appId: '1:120930847292:web:eb77034f59e9ee37b65139',
  measurementId: 'G-KJRFL3X06T',
}
