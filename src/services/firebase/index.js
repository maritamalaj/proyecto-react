
import { initializeApp } from "firebase/app";
import{ getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCRKnkTC4BlWA2yO3Yyjtr3hcLBEqulU_c",
  authDomain: "proyecto-react-coder22.firebaseapp.com",
  projectId: "proyecto-react-coder22",
  storageBucket: "proyecto-react-coder22.appspot.com",
  messagingSenderId: "760314487879",
  appId: "1:760314487879:web:d8b6c69ca72d7699fe3d62"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)