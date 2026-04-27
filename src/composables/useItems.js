import { ref } from 'vue'
import { collection, getDocs, addDoc } from "firebase/firestore"
import { db } from '../firebase'

const items = ref([])
const loading = ref(false)

let isLoaded = false 
export function useItems() {

  async function fetchItems() {
    if (isLoaded) return

    loading.value = true

    const querySnapshot = await getDocs(collection(db, "animals"))

    items.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))

    loading.value = false
    isLoaded = true
  }

  async function addItem(newItem) {
    const docRef = await addDoc(collection(db, "animals"), newItem)

    items.value.push({
      id: docRef.id,
      ...newItem
    })
  }

  return { items, loading, fetchItems, addItem }
}