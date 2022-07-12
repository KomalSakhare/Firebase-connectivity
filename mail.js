const firebaseConfig = {
    apiKey: "AIzaSyDr5_TpUcKMHJzeACDtmPaQrTlwGCJvsuY",
    authDomain: "form-b693e.firebaseapp.com",
    databaseURL: "https://form-b693e-default-rtdb.firebaseio.com",
    projectId: "form-b693e",
    storageBucket: "form-b693e.appspot.com",
    messagingSenderId: "617233925926",
    appId: "1:617233925926:web:306ee7757ea6f1aef2a3e7"
  };

  firebase.initializeApp(firebaseConfig);

var formdb = firebase.database().ref('form');

document.getElementById('form').addEventListener('submit',submitform); 

function submitform(e){
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    var password = getElementVal('password');
    var cpassword = getElementVal('cpassword');


    saveMessages(name,email,password,cpassword);


}
const saveMessages = (name,email,password,cpassword) =>{
    var newform = formdb.push();

    newform.set({
        name : name,
        email : email,
        password : password,
        cpassword : cpassword,
    })
}

const getElementVal = (id) =>{
    return document.getElementById(id).value;
}