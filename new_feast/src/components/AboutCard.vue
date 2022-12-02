<template>
  
    <div v-if="PersonEven" class="col-lg-3 col-sm-6 team-member">
    <div class="team-member-img">
        <img :src="PersonImage" alt="AC Photo">
        <div class="social-icons">
        <a :href="`mailto:${PersonEmail}`"><font-awesome-icon icon="fa-solid fa-envelope"></font-awesome-icon></a>
        <a :href="Social1" target="_blank"><font-awesome-icon icon="fa-brands fa-linkedin"></font-awesome-icon></a>
        <a :href="Social2" target="_blank"><font-awesome-icon icon="fa-brands fa-instagram"></font-awesome-icon></a>
        <a :href="Social3" target="_blank"><font-awesome-icon icon="fa-brands fa-github"></font-awesome-icon></a>
        </div>
    </div>
    <div class="p-4">
        <h5 class="title-sm mt-3 mb-0 text-white">{{ PersonName }}</h5>
        <small class="text-white">{{ PersonSmall }}</small>
        <div class="hline"></div>
        <p class="text-white">{{ PersonDesc }}</p>
    </div>
    </div>
</template>
<script>
export default {
  name: 'AboutCard',
  props: {
    PersonName: String,
    PersonSmall: String,
    PersonDesc: String,
    PersonImage: String,
    PersonEmail: String,
    Social1: String,
    Social2: String,
    Social3: String,
    PersonEven: Boolean
    
  },
  computed: {
    getMailTo() {
      return `mailto:${this.PersonEmail}`;
    }
  }
}
</script>