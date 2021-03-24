import firebase from 'firebase/app'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA0EwUembVe1U8c5RAsGkGQMkh49itSdic",
    authDomain: "gear-closet-photos.firebaseapp.com",
    projectId: "gear-closet-photos",
    storageBucket: "gear-closet-photos.appspot.com",
    messagingSenderId: "562470785958",
    appId: "1:562470785958:web:ee27abc5bdc61efe23b567",
    measurementId: "G-4TT27C9E07"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage()

export {
    storage, firebase as default
}