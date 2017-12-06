const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');

const firebaseApp = admin.initializeApp(
	functions.config().firebase
);

var db = admin.firestore();


const app = express();

app.get('/',(request, response) => {
   db.collection("cars").doc("Fiat").set({
       "brand":"ferrari"});
    
   response.set('Cache-Control','public,max-age=300, s-maxage=600') ;
    response.send("set");  
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.app = functions.https.onRequest(app);