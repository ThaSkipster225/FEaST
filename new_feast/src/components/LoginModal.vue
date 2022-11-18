<template>
     <div class="modal fade" id="LoginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Log into your FEaST Account</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form @submit.prevent="Login">
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
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <input type="submit" class="btn btn-primary" value="Login" placeholder="Log In">
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

</template>

<script>
import { ref } from 'vue';
import firebase from 'firebase';
import {useRouter} from 'vue-router';

export default {
    setup(){
        const email = ref('')
        const password =ref('')

        const router = useRouter()

        const Login = () => {
            firebase
                .auth()
                .signInWithEmailAndPassword(email.value, password.value)
                .then(data => console.log(data))
                .catch(err => alert(err.message));
            
                router.push('/')
        }

        return {
            Login,
            email,
            password
        }
    }
}

</script>