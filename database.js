
const firebase = require('firebase');
var config = {
    apiKey: "AIzaSyDx5noocGvBUujk6YyrkPubuSWp3Omb-ck",
    authDomain: "chatbot-a8b7c.firebaseapp.com",
    databaseURL: "https://chatbot-a8b7c.firebaseio.com",
    projectId: "chatbot-a8b7c",
    storageBucket: "chatbot-a8b7c.appspot.com",
    messagingSenderId: "629402920664"
  };
  var connection = firebase.initializeApp(config).auth();
var db = firebase.firestore();
// console.log(connection
module.exports = {
  db:  firebase.firestore(),
  connection
} 