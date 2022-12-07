<template>
  <div class="modal fade" id="LoginModal" tabindex="-1" aria-labelledby="LoginModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="ModalLabel">Log into your FEaST Account</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="Login">
            <div class="mb-2 emailInput">
              <label for="InputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" v-model="email" id="InputEmail1"
                aria-describedby="emailHelp">
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="passwordInput">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" v-model="password" id="InputPassword1">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <input type="submit" class="btn btn-primary" value="Login" @click="onSubmit" placeholder="Log In">
              <button type="button" class="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#RegisterModal">Register Here!</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue';
import firebase from '../firebaseInit';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { getDoc, doc, getFirestore } from '@firebase/firestore';

const email = ref('')
const password = ref('')

const auth = getAuth(firebase)
const db = getFirestore(firebase)

const Login = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(async() => {
      // Signed in 
      const docRef = doc(db, "/users", auth.currentUser.uid)
      const profile = await getDoc(docRef)
       
      console.log(userInfo(profile))
      let user = userInfo(profile)

      alert("Login Successful!")

      return{
        user
      }      
    })
    .catch((error) => {
      alert(error.message);
    });
}


function userInfo(doc){
  let firstName = doc.data().firstName
  let lastName = doc.data().lastName
  let StudentID = doc.data().StudentID
  let email = doc.data().email

  return {firstName, lastName, StudentID, email}
}

</script>
