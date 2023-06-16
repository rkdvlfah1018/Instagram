import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//import the seed file

const config = {};

const firebase = Firebase.initializeApp(config);
const {FieldValue} = Firebase.firestore;

//call the seed file ONLY ONCE

export {firebase, FieldValue};