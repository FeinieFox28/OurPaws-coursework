import { ref } from 'vue'
import { auth, db } from '../firebase'
import { onAuthStateChanged } from "firebase/auth"
import { doc, getDoc, setDoc } from "firebase/firestore"

const user = ref(null)
const role = ref(null)

let initialized = false

export function useUser() {

  if (!initialized) {
    initialized = true

    onAuthStateChanged(auth, async (u) => {
      user.value = u

      if (u) {
        const docRef = doc(db, "users", u.uid)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          role.value = docSnap.data().role
        } else {
          const newUser = {
            email: u.email,
            role: 'user'
          }

          await setDoc(docRef, newUser)
          role.value = 'user'
        }

      } else {
        role.value = null
      }
    })
  }

  return { user, role }
}