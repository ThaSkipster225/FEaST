<template>
  
    <div v-if="PersonEven" class="col-lg-3 col-sm-6 team-member">
    <div class="team-member-img">
        <img :src="PersonImage" alt="AC Photo">
        <div class="social-icons">
        <a :href="`mailto:${PersonEmail}`"></a>
        <a href="https://www.linkedin.com/in/anselmiscolumna/" target="_blank"><i class="fa fa-address-card"
            aria-hidden="true"></i></a>
        <a href="https://www.instagram.com/a__cado/" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="https://github.com/anselmiscolumna" target="_blank"><i class="fab fa-github"></i></a>
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
    PesronEmail: String,
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