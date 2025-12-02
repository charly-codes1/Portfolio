import { FIREBASE_CONFIG } from '@/constans/common'
import { getApp, getApps, initializeApp, FirebaseApp } from 'firebase/app'
import { GithubAuthProvider, GoogleAuthProvider, getAuth, Auth } from 'firebase/auth'
import { getFirestore, Firestore } from 'firebase/firestore'

// Only initialize Firebase if an API key is provided (prevents build-time failures on Vercel when env vars are missing)
const hasFirebaseConfig = Boolean(FIREBASE_CONFIG?.apiKey)

let app: FirebaseApp | null = null
let auth: Auth | null = null
let db: Firestore | null = null

if (hasFirebaseConfig) {
  app = getApps().length > 0 ? getApp() : initializeApp(FIREBASE_CONFIG)
  auth = getAuth(app)
  db = getFirestore(app)
}

export { app, auth, db }

export const getProviderById = (id: 'github.com' | 'google.com') => {
  switch (id) {
    case 'github.com':
      return new GithubAuthProvider()
    case 'google.com':
      return new GoogleAuthProvider()
  }
}
