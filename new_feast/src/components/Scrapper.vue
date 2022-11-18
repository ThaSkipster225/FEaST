<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable vue/require-v-for-key -->
<template>
  <div>
    <h1>
      Web Scrapper
    </h1>
    <div class="wrapper">
      <div v-for="(article, index) in latestArticles" :key="index">
        <span v-text = "article.menuItem"></span>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase'
  const axios = require('axios')
  const cheerio = require('cheerio')

export default {
  data(){
    return{
      latestArticles: [],
    }
  },
  methods:{
    getWebsiteData(){
      let url = 'https://www.flsouthern.edu/campus-offices/dining-services/daily-menu.aspx';
      let DataArray = [];
      let self = this;
      // GET request for remote image in node.js
      axios({
        method: 'get',
        url: url,
      })
      .then(function (response) {
        let html = response.data;
        let $ = cheerio.load(html);
        $("container").each(function(){
          const menuItem = $(this).find('br');
          DataArray.push({
            'menuItem': menuItem 
          })
        });
        self.latestArticles = DataArray;
        console.log(DataArray);
      });
    }
  },
  created(){
    this.getWebsiteData()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.wrapper {
  width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 20px 40px;
}
</style>