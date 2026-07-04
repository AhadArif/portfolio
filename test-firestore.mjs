import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAj2jtxZnBhga9MAA1g7JSiSKhI-om9Ul4",
  authDomain: "portfolio-aaa-8ee44.firebaseapp.com",
  projectId: "portfolio-aaa-8ee44",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function run() {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    console.log("Users collection size:", querySnapshot.size);
    querySnapshot.forEach((doc) => {
      console.log(`Doc ID: ${doc.id} => Role: ${doc.data().role}`);
    });
  } catch (error) {
    console.error("Error reading users:", error);
  }
}

run();
