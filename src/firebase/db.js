import { getFirestore, collection, getDocs, query, where, doc, getDoc, addDoc } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app)

export const getItems = async() => {
    const querySnapshot = await getDocs(collection(db, "items"))
    const items = []

    querySnapshot.forEach((doc) => {
        items.push({...doc.data(), id: doc.id})
    })

    return items
}

export const getItemsByCategory = async(category) => {
    const q = query(collection(db,"items"), where("p_category", "==", category))
    const querySnapshot = await getDocs(q)
    const items = []

    querySnapshot.forEach((doc) => {
        items.push({...doc.data(), id: doc.id})
    })

    return items

}

export const getItem = async(id) => {
    const docRef = doc(db, "items", id)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()){
        return {...docSnap.data(), "id":docSnap.id}
    }else{
        console.log("No product")
    }
}

export const createDocument = async (collectionName, data) => {
    try {
        const docRef = await addDoc(collection(db, collectionName), data);
        return docRef.id; 
    } catch (error) {
        console.error("Error creating document:", error);
        throw error;
    }
};
