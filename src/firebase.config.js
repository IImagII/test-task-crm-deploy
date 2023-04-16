import { initializeApp } from 'firebase/app'
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth
} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAPJB-BOjmbymi6ZNN96_VbWuhcWvP9V2s',
  authDomain: 'crm-test-50a2c.firebaseapp.com',
  projectId: 'crm-test-50a2c',
  storageBucket: 'crm-test-50a2c.appspot.com',
  messagingSenderId: '377634802889',
  appId: '1:377634802889:web:75fb9346b74b6b263f1118'
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

export const auth = getAuth()

export const provider = new GoogleAuthProvider()

export const providerFacebook = new FacebookAuthProvider()
