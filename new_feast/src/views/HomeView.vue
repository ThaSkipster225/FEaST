<script>
// @ is an alias to /src
import AboutCardVue from '@/components/AboutCard.vue';
import LocationCardVue from '@/components/LocationCard.vue';

import app from '../firebaseInit'
import {getFirestore, query, collection, getDocs} from 'firebase/firestore'

const db = getFirestore(app)

export default {
  name: 'HomeView',
  components: {
    AboutCardVue,
    LocationCardVue
  },
  data() {
    return {
      People: [],
    }
  },
  created () {
    this.getPeople()
  },
  methods: {
    async getPeople() {
      const querySnap = await getDocs(query(collection(db, '/About Us/')));

      querySnap.forEach((doc) => {
        this.People.push(doc.data())
      });
    }
  },
}
</script>

<template>
  <div id="app">
    <header>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>FEaST Web App</title>
    <!-- Need to get an icon for the website and add it here. -->
    <link rel="icon" href="../assets/Images/FeastIcon.png">

    <!-- 
          Created by Sebastian Skippy Paquette, Austin Scheetz, and Anselmis AC Columna for our 2022/2023 School Year.
          The web app is called FEaST (Food Expedited and Service Terminal) and will serve as a mobile ordering system for our campus's food locations.
          -->

    </header>

    <body data-bs-spy="scroll" data-bs-target=".navbar">
      <!-- Top Bar for the log in -->

      <!---->

      <!-- End Top Bar -->

      <!-- Lower Nav Bar for proper Navigation. It's sticky and has Scroll spy in it so it will highlight the section we are currently in.-->
      <!-- <nav class="navbar sticky-top navbar-expand-lg bg-white">
        <div class="container-fluid bg-white">
          <a class="navbar-brand" href="/"><img src="../assets/Images/FeastIcon.png" alt="Feast Logo" width=50 height=50></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
            aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-end" id="navbarScroll">
            
            <ul class="navbar-nav my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#Home">Home</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#link">Link</a>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#Locations" role="button"
                  aria-expanded="false">
                  Locations
                </a>
                <ul class="dropdown-menu">
                  This UL holds all of the different food locations on campus.
                  <li>Computer Science</li>
                  <li><a class="dropdown-item" href="/pretzelplace">Fresh Twist (Pretzel Place)</a></li>
                  <li>The Cafeteria (Caf)</li>
                  <li><a class="dropdown-item" href="Cafeteria.html">Wynee's Bistro</a></li>
                  <li><a class="dropdown-item" href="Cafeteria.html">Superbowls</a></li>
                  <li><a class="dropdown-item" href="Cafeteria.html">Sushi Place</a></li>
                  <li><a class="dropdown-item" href="Cafeteria.html">Steak and Shake</a></li>
                  <li>Undercaf</li>
                  <li><a class="dropdown-item" href="Undercaf.html">Boar's Head Deli</a></li>
                  <li><a class="dropdown-item" href="Undercaf.html">Freshen's</a></li>
                  <li>Central Campus</li>
                  <li><a class="dropdown-item" href="Central.html">Buckstop</a></li>
                  <li>South Side of Campus</li>
                  <li><a class="dropdown-item" href="South.html">Happy Place</a></li>
                  <li><a class="dropdown-item" href="South.html">Mocketship</a></li>
                  <li><a class="dropdown-item" href="South.html">Tutu's Cyber Cafe</a></li>
                  <li><a class="dropdown-item" href="South.html">Grill Master</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#AboutUs">About Us</a>
              </li>
              
              <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#LoginModal">
              Log In
            </button>
            
            <button type="button" class="btn btn-primary btn-sm">
              <font-awesome-icon icon="fa-solid fa-cart-shopping fa-xs" />
              Cart
            </button>
            <button type="button" class="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#RegisterModal">
              Register
            </button>
            </ul>
          </div>
        </div>
      </nav> -->

      <!-- Rest of the Body -->
      <div id="Home">

        <h1>
          Welcome to FEaST
        </h1>

        <!-- Carousel -->

        <div id="carousel1" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carousel1" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carousel1" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carousel1" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../assets/Images/pexels-antony-trivet-12884061.jpg" class="d-block justify-content-center" alt="...">
            </div>
            <div class="carousel-item slide2">
              <img src="../assets/Images/pexels-ketut-subiyanto-4473095.jpg" class="d-block justify-content-center" alt="...">
            </div>
            <div class="carousel-item slide3">
              <img src="../assets/Images/food-festival.jpg" class="d-block justify-content-center" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carousel1" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carousel1" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>

      </div> <!-- End of the Home Div -->


      <div id="link">
        <h2>FEaSt Link</h2>

        <p>
          This the FEaST ordering Web Application, you can order food from 11 out of the 12 food service locations we have
          on campus. In order to use the app, you'll first need to create an account with all of your information. Once, you
          have created an account, you'll be able to complete your orders, before that you will just be able to view the site and not make any
          purchases.
        </p>

      </div>
      <br />

      
      <!-- Three Column Section -->

      <Section id="Locations" class="row g-0">
        <h2>Locations</h2>
        <!-- Computer Science Section (Fresh Twist) -->
        <LocationCardVue 
        :FoodLoc="'Fresh Twist'" 
        :ImageString="`${require('@/assets/Images/FreshTwist/FreshTwistImage.jpg')}`" 
        :LocDesc="'Located in the Weinstein building, Pretzelmaker has been making fresh baked and handcrafted pretzels since 1991. If you ever get a craving for something salty, you can’t go wrong going with Freshtwist'" 
        :ActiveLink="'/pretzelplace'"
        />

        <!-- The Caf Section (Wynee's Bistro {In the Lower Section}, Sushi Place, Superbowls, Steak and Shake) -->
        <LocationCardVue 
        :FoodLoc="'Kazan Sushi'" 
        :ImageString="`${require('@/assets/Images/WyneesBistro/SushiBarImage.jpg')}`"
        :LocDesc="'Located in Wynees Bistro, Kazan Sushi has been feeding hungry FSC students for many years. It is always handcrafted and created with the greatest ingredients possible.'" 
        :ActiveLink="'/caf'"
        />

        <LocationCardVue 
        :FoodLoc="'Super Bowls'" 
        :ImageString="`${require('@/assets/Images/WyneesBistro/SuperBowlsImage.jpg')}`"
        :LocDesc="'Located in Wynees Bistro, Super Bowls is FSCs creation to give students a healthier and different option.'"
        />

        <LocationCardVue 
        :FoodLoc="'Steak & Shake'" 
        :ImageString="`${require('@/assets/Images/WyneesBistro/SteakAndShakeImage.jpg')}`"
        :LocDesc="'Located in Wynees Bistro, Steak & Shake has been serving the country with their very own steakburgers for many many years.'"
        />

        <LocationCardVue 
        :FoodLoc="'Portabellos'" 
        :ImageString="`${require('@/assets/Images/WyneesBistro/PortabellosImage.jpg')}`"
        :LocDesc="'Loacted in Wynees Bistro, Portabellos has been blessing the FSC community for many many years with pasta and pizza. '"
        />

        <!-- Undercaf Section (Boar's Head Deli and Freshens) -->
        <LocationCardVue 
        :FoodLoc="'Boar\'s Head Deli'" 
        :ImageString="`${require('@/assets/Images/Undercaf/UnderCafBoarsHeadImage.jpg')}`" 
        :LocDesc="'Boar\'s Head Deli has been blessing the world for many years. Started by George Jenkins himself, Florida Southern has taken up the mark of continuing his work here on campus by serving the finest of sliced meat and cheeses.'"
        />

        <LocationCardVue 
        :FoodLoc="'Freshen\'s'" 
        :ImageString="`${require('@/assets/Images/Freshens/FreshensImage.jpg')}`" 
        :LocDesc="'Located in the Undercaf, Freshen\'s has been blessing the undercaf with smoothie options for many years. They use only the freshest ingredients and prepare everything to order.'"
        />

        <!-- Central Campus Section (Buckstop) -->
        <LocationCardVue 
        :FoodLoc="'Buckstop'" 
        :ImageString="`${require('@/assets/Images/BuckStop/BuckstopImage.jpg')}`"
        :LocDesc="'Located at the heart of Florida Southern\'s campus, Buckstop prepares only the finest brick oven pizza for the student body. It is one of the only brick oven pizza places to exist on a college campus.'"
        :ActiveLink="'/buckstop'"
        />

        <!-- South Side of Campus (Happy Place, Mocketship, Tutu's Cyber Cafe, Grill Master) -->
        <LocationCardVue 
        :FoodLoc="'Happy Place'" 
        :ImageString="`${require('@/assets/Images/HappyPlace/HappyPlaceImage.jpg')}`" 
        :LocDesc="'Recently relocated to the food court next to the Branscomb Auditorium, Happy Place offers barbeque food at affordable prices to students and staff alike. Come and get a bag full of happiness today'"
         />

        <LocationCardVue
        :FoodLoc="'Mocketship'"
        :ImageString="`${require('@/assets/Images/MocketShip/MocketShipImage.jpg')}`"
        :LocDesc="'The newest offering at FSC, Mocketship is located in the food court next to the Branscomb Auditorium. Come to Mocketship and be taken to the stars with the healthiest options across campus including wraps and snacks!'"
        />

        <LocationCardVue
        :FoodLoc="'Tutu\'s Cyber Cafe'"
        :ImageString="`${require('@/assets/Images/TutusCyberCafe/TuTusImage.jpg')}`"
        :LocDesc="'Located within the Roux Library, Tutu\'s is the campus Starbucks, offering locally brewed coffee and pastries for the delight of the campus. Stop on by to use the free computers, get a bite to eat and something warm to drink!'"
        />

        <LocationCardVue
        :FoodLoc="'Grillmaster'"
        :ImageString="`${require('@/assets/Images/Grillmasters/GrillmastersImage.jpg')}`"
        :LocDesc="'Come to Grillmasters, set within and outside of Roux Library! Here, grilled burgers, hot dogs, and other specialties are offered with the comforts of a fresh cookout are available for your enjoyment.'"
        />

        <!-- The Caf -->
        <LocationCardVue
        :FoodLoc="'Wynee\'s Bistro'"
        :ImageString="`${require('@/assets/Images/WyneesBistro/WyneesImage.jpg')}`"
        :LocDesc="'Wynee\'s Bistro, otherwise known as the cafeteria, offers a rotating menu daily to offer students a wide variety of warm meals every day of the week. Alongside this location is Portabellos, a constant stop for your flatbread pizza needs.'"
        />


        <!-- Big Image for the Caf -->
        <!-- <div class="col-lg-12 col-sm-12">
                <div class="food-location">
                  <img src="Images/FeastIcon.png" alt="" class="w-25 justify-content-center">
                    <div class="location-overlay">
                      <div>
                        <h3>The Caf</h3>
                        <h6>Located not too far from the Heart of Campus, a great place to get your grub on.</h6>
                      </div>
                    </div>
                  </img>
                </div>
              </div> -->

      </Section>

      <br />

      <!-- End Three Column Section -->


      <div id="AboutUs">
        <h2>The Team</h2>
        <section id="team" class="row g-0 py-0 text-center">
          <AboutCardVue
          :PersonName="'Anselmis \'AC\' Columna'"
          :PersonImage="`${require('@/assets/Images/People/AC.jpg')}`"
          :PersonSmall="'CS Student - AI & Machine Learning'"
          :PersonDesc="'Born in Patterson, New Jersey and raised in Kissimmee, Florida. Began studying Computer Science Fall Semester of 2019. Expecting to graduate Spring 2023.'" 
          :PersonEmail="'anselmiscolumna@gmail.com'"
          :PersonEven=false
          :Social1="'https://www.linkedin.com/in/anselmiscolumna/'"
          :Social2="'https://www.instagram.com/a__cado/'"
          :Social3="'https://github.com/anselmiscolumna'"
          />
          

          <AboutCardVue
          :PersonName="'Austin Scheetz'"
          :PersonImage="`${require('@/assets/Images/People/AustinImage.jpg')}`"
          :PersonSmall="'CS Student - AI & Machine Learning'"
          :PersonDesc="'Born in North Port and raised in both Englewood and Port Charlotte FL. Started studying computer science in earnest his Freshman year of college but always had a fasination with computers throughout his life. Expecting to graduate Spring 2024 or Fall 2024.'"
          :PersonEmail="'austinscheetz4business@gmail.com'"
          :PersonEven= true
          :Social1="''"
          :Social2="''"
          :Social3="'https://github.com/AceofCardz02'"
          />

          <!-- <div class="col-lg-3 col-sm-6 team-member even">
            <div class="team-member-img">
              <img src="../assets/Images/People/AustinImage.jpg" alt="Austin Photo">
              <div class="social-icons">
                <a href="austinscheetz4business@gmail.com"><i class="fa fa-envelope"></i></a>
                <a href="#" target="_blank"><i class="fa fa-address-card"
                  aria-hidden="true"></i></a>
                <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://github.com/AceofCardz02" target="_blank"><i class="fab fa-github"></i></a>
              </div>
            </div>
            <div class="p-4">
              <h5 class="title-sm mt-3 mb-0 text-white">Austin Scheetz</h5>
              <small class="text-white">CS Student - AI & Machine Learning, Cybersecurity</small>
              <div class="hline"></div>
              <p class="text-white">Born in North Port and raised in both Englewood and Port Charlotte FL. Started studying computer science in earnest his 
                Freshman year of college but always had a fasination with computers throughout his life. Expecting to graduate Spring 2024 or Fall 2024.</p>
            </div>
          </div> -->

          <AboutCardVue 
          :PersonName="'Sebastian \'Skippy\' Paquette'"
          :PersonImage="`${require('@/assets/Images/People/Skippy_SGA_Headshot1.jpg')}`"
          :PersonSmall="'CS Student - AI & Machine Learning'"
          :PersonDesc="'Born and raised in Fort Lauderdale, FL. Started studying computer science Freshman year of highschool and graduated highschool with a Technical Trade in Database Application Development and Programming. Expecting graduation in the Spring of 2023.'"
          :PersonEmail="'sebastian.paquette0@gmail.com'"
          :PersonEven= false
          :Social1="'https://www.linkedin.com/in/sebastianpaquette/'"
          :Social2="'https://www.instagram.com/thaskipper225/'"
          :Social3="'https://github.com/ThaSkipster225'"
          />

          <!-- <div class="col-lg-3 col-sm-6 team-member">
            <div class="team-member-img">
              <img src="../assets/Images/People/Skippy_SGA_Headshot1.jpg" alt="">
              <div class="social-icons">
                <a href="sebastian.paquette0@gmail.com"><i class="fa fa-envelope"></i></a>
                <a href="https://www.linkedin.com/in/sebastianpaquette/" target="_blank"><i class="fa fa-address-card"
                    aria-hidden="true"></i></a>
                <a href="https://www.instagram.com/thaskipper225/" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://github.com/ThaSkipster225" target="_blank"><i class="fab fa-github"></i></a>
              </div>
            </div>
            <div class="p-4">
              <h5 class="title-sm mt-3 mb-0 text-white">Sebastian 'Skippy' Paquette</h5>
              <small class="text-white">CS Student - AI & Machine Learning</small>
              <div class="hline"></div>
              <p class="text-white">Born and raised in Fort Lauderdale, FL. Started studying computer science Freshman year of highschool and 
                graduated highschool with a Technical Trade in Database Application Development and Programming. Expecting graduation in the Spring
                of 2023.
              </p>
            </div>
          </div> -->

          <AboutCardVue
          :PersonName="'Dr. Cazalas'"
          :PersonImage="`${require('@/assets/Images/People/JC-jpg-1.jpg')}`"
          :PersonSmall="'Professor and Project Advisor'"
          :PersonDesc="'Dr. Cazalas received his Bachelor of Science in Computer Science from the University of Central Florida in 2006. He subsequently earned a Master of Science in Computer Science in 2008 and a Doctor of Philosophy in Computer Science in 2012, both from the University of Central Florida.'"
          :PersonEmail="'jcazalas@flsouthern.edu'"
          :PersonEven= true
          :Social1="'https://www.linkedin.com/in/jcazalas/'"
          :Social2="'https://www.instagram.com/'"
          :Social3="'https://github.com/'"
          />

          <!-- <div class="col-lg-3 col-sm-6 team-member even">
            <div class="team-member-img">
              <img src="../assets/Images/People/JC-jpg-1.jpg" alt="Dr. Cazalas Photo">
              <div class="social-icons">
                <a href="jcazalas@flsouthern.edu"><i class="fa fa-envelope"></i></a>
                <a href="https://www.linkedin.com/in/jcazalas/" target="_blank"><i class="fa fa-address-card"
                  aria-hidden="true"></i></a>
                <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://github.com/" target="_blank"><i class="fab fa-github"></i></a>
              </div>
            </div>
            <div class="p-4">
              <h5 class="title-sm mt-3 mb-0 text-white">Dr. Cazalas</h5>
              <small class="text-white">Professor and Project Advisor</small>
              <div class="hline"></div>
              <p class="text-white">Jonathan received his Bachelor of Science in Computer Science from the University of Central Florida in 2006.
                He subsequently earned a Master of Science in Computer Science in 2008 and a Doctor of Philosophy in Computer Science in 2012, 
                both from the University of Central Florida.</p>
            </div>
          </div> -->

        </section>
      </div>

      <footer>
        <div class="container">
          <div class="row text-light text-center py-2 justify-content-center">
            <div class="col-sm-10 col-md-8 col-lg-2">
              <p><a href="" id="Home">Return to Top</a></p>
            </div>
          </div>
        </div>
      </footer>
    </body>
  </div>
</template>
