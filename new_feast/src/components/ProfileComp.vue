<template>
    <div class="modal" id="ProfileModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="container mt-2 d-flex justify-content-center">

                        <div class="card p-2">

                            <div class="d-flex align-items-center">
                                <div class="image">
                                    <img src="../assets/Images/profilePhoto.jpg">
                                </div>

                                <div class="ml-3 w-100">

                                    <h4 class="mb-0 mt-0"> {{ user.firstName }} {{ user.lastName }}</h4>
                                    <span>Student ID: {{ user.StudentID }}</span>

                                    <div
                                        class="p-1 mt-2 bg-custom2 d-flex justify-content-center rounded text-white caption">

                                        <div class="d-flex flex-column justify-content-center">
                                            <span class="caption">Snake Bites</span>
                                            <span class="number1">{{ user.SnakeBites }}</span>
                                        </div>

                                    </div>


                                    <div class="button mt-2 d-flex flex-row align-items-center">

                                        <button class="btn mx-1 btn-sm btn-danger w-100 rounded" data-bs-dismiss="modal">Close</button>
                                        <button class="btn mx-1 btn-sm btn-primary w-100 ml-2 rounded" data-bs-dismiss="modal" @click="LogOut()">Log Out</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { user, checkLogin } from '@/main';
import app from '@/firebaseInit'
import { getAuth, signOut } from '@firebase/auth';


export default {
    data() {
        return {
            user,
            getAuth,
            signOut
        }
    },
    methods: {
        LogOut (){
            const auth = getAuth(app)

            signOut(auth).then(() => {
                checkLogin.check = false
                alert("Successfully Logged Out!")
            })
        }
    }
}
</script>

<style scoped>
body {

    background-color: #B3E5FC;
    border-radius: 10px;

}

.image img {
    border-radius: 50% !important;
    width: 90%;
}

.bg-custom2 {
    color: green !important;
    background-color: green !important;
}

.card {
    width: 600px !important;
    border: none;
    border-radius: 10px;

    background-color: #fff;
}


.caption {
    font-size: 15px;
    font-weight: 500px;
    color: white;
}

.number1 {
    font-weight: 500;
    align-content: center;
    color: white;
    text-align: center;
}

.followers {
    font-size: 10px;
    color: #a1aab9;

}

.number2 {
    font-weight: 500;
}

.rating {
    font-size: 10px;
    color: #a1aab9;
}

.number3 {
    font-weight: 500;
}
</style>
