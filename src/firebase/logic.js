import { collection, onSnapshot, addDoc } from 'firebase/firestore'
import { db } from './index'


const info = []

const REF_COLLECTION = collection(db, 'reservaciones')

const obtenerReservacion = () => {
     onSnapshot(REF_COLLECTION, (snapshot) => {
        snapshot.docs.forEach((reservacion) => {
            info.push({
                ...reservacion.data(),
                id: reservacion.id
            })
        })
    })
}

obtenerReservacion()



const agregarReservacion = async (reservacion) => {
    const resp = await addDoc(REF_COLLECTION, reservacion);
}

export { obtenerReservacion, agregarReservacion, info }