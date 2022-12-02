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
                  <div class="mb-2 emailInput">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" v-model="email" id="exampleInputEmail1" aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div class="passwordInput">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" v-model="password" id="exampleInputPassword1">
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#LoginModal">I already have an account</button>
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
import { ref } from 'vue';
import firebase from '../firebaseInit'

const email = ref('')
const password = ref('')

const auth = getAuth(firebase)

const Register = () =>{
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(user => {
      alert(user);
    })
    .catch(err => alert(err.message));
}

</script>