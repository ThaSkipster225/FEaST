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
              <label for="InputStudentID" class="form-label">Student ID</label>
              <input class="form-control" v-model="studID" id="InputStudentID">
            </div>

            <!-- First Name -->
            <div class="firstName">
              <label for="InputFirstName" class="form-label">First Name</label>
              <input class="form-control" v-model="firstName" id="inputFirstName">
            </div>

            <!-- Last Name -->
            <div class="lastName">
              <label for="InputLastName" class="form-label">Last Name</label>
              <input class="form-control" v-model="lastName" id="InputLastName">
            </div>

            <!-- Email -->
            <div class="mb-2 emailInput">
              <label for="userEmail" class="form-label">Email address</label>
              <input type="email" class="form-control" v-model="email" id="userEmail"
                aria-describedby="emailHelp">
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>

            <!-- Password -->
            <div class="passwordInput">
              <label for="userPassword" class="form-label">Password</label>
              <input type="password" class="form-control" v-model="password" id="userPassword">
            </div>

            <!-- check box options for meal plan -->
            <div class="Meal-Plan-Radios">
              <label class="form-label" for="inlineRadio1">Meal Plan</label>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="RadioOption1" id="Meal1" value="160"
                  v-model="option" checked>
                <label class="form-check-label" for="inlineRadio1">Meal Plan A: 20-Meals (160 Snake Bites)</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="RadioOption2" id="Meal2" value="120"
                  v-model="option">
                <label class="form-check-label" for="inlineRadio2">Meal Plan B: 15-Meals (120 Snake Bites)</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="RadioOption3" id="Meal3" value="80"
                  v-model="option">
                <label class="form-check-label" for="inlineRadio3">Meal Plan C: 10-Meals (80 Snake Bites)</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="RadioOption4" id="Meal4" value="40"
                  v-model="option">
                <label class="form-check-label" for="inlineRadio3">Meal Plan D: 5-Meals (40 Snake Bites)</label>
              </div>
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
const studID = ref()
const option = ref()

const auth = getAuth(firebase)
const db = getFirestore(firebase)

const Register = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      const docRef = setDoc(doc(db, "users", auth.currentUser.uid), {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        StudentID: parseInt(studID.value),
        SnakeBites: parseInt(option.value)
      })
      console.log("Document written with ID: ", docRef.id)
      console.log(option.value)
      alert("Register complete!")
    })
    .catch(err => console.log('Something went wrong with adding user to firestore: ', err.message));
}

</script>