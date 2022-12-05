<template>

  <div class="modal fade" id="RegisterModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Create your FEaST account</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="Register">
            <!-- Student ID -->
            <div class="studentID">
              <label for="InputFirstName" class="form-label">Student ID</label>
              <input class="form-control" v-model="studID" id="exampleInputPassword2">
            </div>

            <!-- First Name -->
            <div class="firstName">
              <label for="InputFirstName" class="form-label">First Name</label>
              <input class="form-control" v-model="firstName" id="exampleInputPassword2">
            </div>

            <!-- Last Name -->
            <div class="lastName">
              <label for="InputLastName" class="form-label">Last Name</label>
              <input class="form-control" v-model="lastName" id="exampleInputPassword2">
            </div>

            <!-- Email -->
            <div class="mb-2 emailInput">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" v-model="email" id="exampleInputEmail2"
                aria-describedby="emailHelp">
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>

            <!-- Password -->
            <div class="passwordInput">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" v-model="password" id="exampleInputPassword2">
            </div>

            <!-- check box options for meal plan -->
            <div class="form-check form-check-inline" >
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" v-model="option1">
              <label class="form-check-label" for="inlineRadio1">Meal Plan A</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" v-model="option2">
              <label class="form-check-label" for="inlineRadio2">Meal Plan B</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" v-model="option3">
              <label class="form-check-label" for="inlineRadio3">Meal Plan C</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" v-model="option4">
              <label class="form-check-label" for="inlineRadio3">Meal Plan D</label>
            </div>

            <!-- Modal Footer -->
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#LoginModal">I
                already have an account</button>
              <input type="submit" class="btn btn-primary" value="Register" placeholder="Register">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="register">
    <h1>Register</h1>
    <form @submit.prevent="Register">
      <input type="text" placeholder="Email" v-model="email"/>
      <input type="password" placeholder="Password" v-model="password"/>
      <input type="submit" value="Register"/>
    </form>
  </div> -->
</template>

<script setup>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import 'firebase/auth'
import { ref } from 'vue';
import { getFirestore, setDoc, doc } from 'firebase/firestore'
import firebase from '../firebaseInit'


const email = ref('')
const password = ref('')
const firstName = ref('')
const lastName = ref('')
const studID = ref('')
const option1 = ref('')

const auth = getAuth(firebase)
const db = getFirestore(firebase)

const Register = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      const docRef = setDoc(doc(db, "users", auth.currentUser.uid),{
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        StudentID: studID.value
      })
      console.log("Document written with ID: ", docRef.id)
      console.log(option1)
      
    })
    .catch(err => console.log('Something went wrong with adding user to firestore: ', err, option1.value));
}

</script>