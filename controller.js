const express = require('express');
var router = express.Router();
var connection = require('./database');
const firebase = require('firebase');
let db = require('./database');
var current_id = "";
router.post('/signIn',(req,res)=>{
    var signupDetailsRef = firebase.firestore().collection('signupDetails');
    console.log('thse are signup details' + signupDetailsRef);
    signupDetailsRef.where('isAdmin', '==', true ).get()
       .then(snapshot =>{
        snapshot.forEach(doc => {
        if(!doc.exists)
        {       
          console.log('data doesn');
        }
        else {
            console.log(doc.data());
            console.log(doc.id);
           current_id = doc.id
            firebase.firestore().collection('signupDetails').doc(current_id).set({
                name:'anupama',
                country:'ind'
            }).then(doc => {
                console.log(this.doc.current_id);
            }).catch(err => {
                console.log('this is some second error'+ err);
            })
            
        }
        res.status(200).send({status:true, message:'successful'})
    })
    }).catch(err => {
        console.log('this is some error'+ err);
    })
    
})

router.post('/requestbotDetails',(req,res)=>{
    firebase.firestore().collection('userbotDetails').add({botName:req.body.botName})
    .then(()=>res.status(200).send({status:true, message:'successful'}))
    .catch(err => {
        console.log('dsasafsa'+ err)
    })

})

router.post('/sendbotDetails',(req,res)=>{
    console.log(this.current_id)
 var docRef = firebase.firestore().collection('userbotDetails').doc(current_id);
 docRef.update({
            projectId:req.body.projectId,
            botId:req.body.botId
        }).then(() => {
            console.log("User created. ")
        }).catch(error => {
            console.error("Error adding user: ", error);
        });
    
 
})


module.exports = router;