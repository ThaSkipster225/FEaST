<template>
  <header>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>FEaST Web App</title>
  <!-- Need to get an icon for the website and add it here. -->
  <link rel="icon" href="Images/FeastIcon.png">

  <!-- 
        Created by Sebastian Skippy Paquette, Austin Scheetz, and Anselmis AC Columna for our 2022/2023 School Year.
        The web app is called FEaST (Food Expedited and Service Terminal) and will serve as a mobile ordering system for our campus's food locations.
        -->

  <!-- Bootstrap 5.2.1 CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <!-- External CSS File Link -->
  <link rel="stylesheet" href="CSS/FEaST_CSS.css">
</header>

<body data-bs-spy="scroll" data-bs-target=".navbar">
  <!-- Top Bar for the log in -->

  <div class="top-bar bg-light UpperNav">
    <div class="container">
      <div class="col-12">
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Log In
        </button>
      </div>
    </div>
  </div>

  <!-- End Top Bar -->

  <!-- Lower Nav Bar for proper Navigation. It's sticky and has Scroll spy in it so it will highlight the section we are currently in.-->
  <nav class="navbar sticky-top navbar-expand-lg bg-white">
    <div class="container-fluid bg-white">
      <a class="navbar-brand" href="index.html"><img src="Images/FeastIcon.png" alt="Feast Logo" width=50 height=50></a>
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
              <!-- This UL holds all of the different food locations on campus.-->
              <li>Computer Science</li>
              <li><a class="dropdown-item" href="CompSci.html">Fresh Twist (Pretzel Place)</a></li>
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
        </ul>
      </div>
    </div>
  </nav>

  <!-- Rest of the Body -->
  <div id="Home">

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Log into your FEaST Account</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-2 emailInput">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="passwordInput">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Log In</button>
          </div>
        </div>
      </div>
    </div>

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
          <img src="Images/pexels-antony-trivet-12884061.jpg" class="d-block justify-content-center" alt="...">
        </div>
        <div class="carousel-item slide2">
          <img src="Images/pexels-ketut-subiyanto-4473095.jpg" class="d-block justify-content-center" alt="...">
        </div>
        <div class="carousel-item slide3">
          <img src="Images/food-festival.jpg" class="d-block justify-content-center" alt="...">
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
      on campus. In order to use the app, you'll firtst need to create an account with all of your information. Once, you
      have created an account, you'll be able to complete your orders, before that you will just be able to view the site and not make any
      purchases.
    </p>

  </div>
  <br />

  
  <!-- Three Column Section -->

  <Section id="Locations" class="row g-0">
    <h2>Locations</h2>
    <!-- Computer Science Section (Fresh Twist) -->
    <div class="col-lg-3 col-sm-6">
      <div class="food-location">
        <h3>Fresh Twist</h3>
        <a href="CompSci.html"><img src="Images/FreshTwist/FreshTwistImage.jpg" alt="" class="w-100">
        <div class="location-overlay">
          <div>
            <h3>Fresh Twist</h3>
            <h6>Located in the Weinstein building, Pretzelmaker has been making fresh baked and handcrafted pretzels since 1991. If you ever get a craving for something salty, you can’t go wrong going with Freshtwist!</h6>
          </div>
        </div>
        </a>
      </div>
    </div>

    <!-- The Caf Section (Wynee's Bistro {In the Lower Section}, Sushi Place, Superbowls, Steak and Shake) -->
    <div class="col-lg-3 col-sm-6">
      <div class="food-location">
        <h3>Kazan Sushi</h3>
        <a href="Cafeteria.html"><img src="Images/placeholder.jpg" alt="" class="w-100">
        <div class="location-overlay">
          <div>
            <h3>Kazan Sushi</h3>
            <h6>Built within the cafeteria and next to Portabellos, Kazan promises the highest quality gyoza, spring rolls, and sushi! Hand-rolled every day and in all varieties and tastes, get your sushi needs today!</h6>
          </div>
        </div>
        </a>
      </div>
    </div>

    <div class="col-lg-3 col-sm-6">
      <div class="food-location">
        <h3>Super Bowls</h3>
        <a href="Cafeteria.html"><img src="Images/placeholder.jpg" alt="" class="w-100">
        <div class="location-overlay">
          <div>
            <h3>Super Bowls</h3>
            <h6>New, improved, and set next to Wynee's Bistro, Superbowls provides a relaxing, hands-off experience in crafting "superbowls" made to order. With additional options offered on special occasions, try this option today!</h6>
          </div>
        </div>
      </a>
      </div>
    </div>

    <div class="col-lg-3 col-sm-6">
      <div class="food-location">
        <h3>Steak & Shake</h3>
        <a href="Cafeteria.html"><img src="Images/placeholder.jpg" alt="" class="w-100">
        <div class="location-overlay">
          <div>
            <h3>Steak & Shake</h3>
            <h6>Located in the back of the cafeteria, come to Steak and Shake to enjoy a fast-casual and hand-prepared steakburger with a refreshing and delicious milkshake. After all, “If it's in sight, it must be right!”
            </h6>
          </div>
        </div>
        </a>
      </div>
    </div>

    <!-- Undercaf Section (Boar's Head Deli and Freshens) -->
    <div class="col-lg-3 col-sm-6">
      <div class="food-location">
        <h3>Boar's Head Deli</h3>
        <a href="Undercaf.html"><img src="Images/Undercaf/UnderCafBoarsHeadImage.jpg" alt="" class="w-100">
        <div class="location-overlay">
          <div>
            <h3>Boar's Head Deli</h3>
            <h6>More than just a sandwich shop located in the undercaf, Boar's Head has been dedicated to the quality of its craft since 1905. Offering both hot and cold sandwich options as well as soups, come experience these delectable offerings!</h6>
          </div>
        </div>
        </a>
      </div>
    </div>

    <div class="col-lg-3 col-sm-6">
      <div class="food-location">
        <h3>Freshen's</h3>
        <a href="Undercaf.html"><img src="Images/Freshens/FreshensImage.jpg" alt="" class="w-100">
        <div class="location-overlay">
          <div>
            <h3>Freshen's</h3>
            <h6>Set alongside Boar's Head Deli in the undercaf, Freshens offers refreshing smoothies prepared to order. Come into the cafe space, grab a fresh and healthy smoothie, and study for those exams while stimulating your brain with vitamins galore!</h6>
          </div>
        </div>
        </a>
      </div>
    </div>

    <!-- Central Campus Section (Buckstop) -->
    <div class="col-lg-3 col-sm-6">
      <div class="food-location">
        <h3>Buckstop</h3>
        <a href="Central.html"><img src="Images/BuckStop/BuckstopImage.jpg" alt="" class="w-100">
        <div class="location-overlay">
          <div>
            <h3>Buckstop</h3>
            <h6>Located along the walk between the Spivey/JR compound and the LP Ordway Building, Buckstop offers a unique pizza and grill experience. Come out, grab a slice, and experience the open-air brick-oven pizza experience!</h6>
          </div>
        </div>
        </a>
      </div>
    </div>

    <!-- South Side of Campus (Happy Place, Mocketship, Tutu's Cyber Cafe, Grill Master) -->
    <div class="col-lg-3 col-sm-6">
      <div class="food-location">
        <h3>Happy Place</h3>
        <a href="South.html"><img src="Images/HappyPlace/HappyPlaceImage.jpg" alt="" class="w-100">
        <div class="location-overlay">
          <div>
            <h3>Happy Place</h3>
            <h6>Recently relocated to the food court next to the Branscomb Auditorium, Happy Place offers barbeque food at affordable prices to students and staff alike. Come and get a bag full of happiness today!</h6>
          </div>
        </div>
        </a>
      </div>
    </div>

    <div class="col-lg-3 col-sm-6">
      <div class="food-location">
        <h3>Mocketship</h3>
        <a href="South.html"><img src="Images/MocketShip/MocketShipImage.jpg" alt="" class="w-100">
        <div class="location-overlay">
          <div>
            <h3>Mocketship</h3>
            <h6>The newest offering at FSC, Mocketship is located in the food court next to the Branscomb Auditorium. Come to Mocketship and be taken to the stars with the healthiest options across campus including wraps and snacks!</h6>
          </div>
        </div>
        </a>
      </div>
    </div>

    <div class="col-lg-3 col-sm-6">
      <div class="food-location">
        <h3>Tutu's Cyber Cafe</h3>
        <a href="South.html"><img src="Images/TutusCyberCafe/TuTusImage.jpg" alt="" class="w-100">
        <div class="location-overlay">
          <div>
            <h3>Tutu's Cyber Cafe</h3>
            <h6>Located within the Roux Library, Tutu's is the campus Starbucks, offering locally brewed coffee and pastries for the delight of the campus. Stop on by to use the free computers, get a bite to eat and something warm to drink!</h6>
          </div>
        </div>
        </a>
      </div>
    </div>

    <div class="col-lg-3 col-sm-6">
      <div class="food-location">
        <h3>Grillmaster</h3>
        <a href="South.html"><img src="Images/Grillmasters/GrillmastersImage.jpg" alt="" class="w-100">
        <div class="location-overlay">
          <div>
            <h3>Grillmaster</h3>
            <h6>Come to Grillmasters, set within and outside of Roux Library! Here, grilled burgers, hot dogs, and other specialties are offered with the comforts of a fresh cookout are available for your enjoyment.</h6>
          </div>
        </div>
        </a>
      </div>
    </div>

    <!-- The Caf -->
    <div class="col-lg-3 col-sm-6">
      <div class="food-location">
        <h3>Wynee's Bistro</h3>
        <a href="South.html"><img src="Images/WyneesBistro/WyneesImage.jpg" alt="" class="w-100">
        <div class="location-overlay">
          <div>
            <h3>Wynee's Bistro</h3>
            <h6>Wynee's Bistro, otherwise known as the cafeteria, offers a rotating menu daily to offer students a wide variety of warm meals every day of the week. Alongside this location is Portabellos, a constant stop for your flatbread pizza needs.</h6>
          </div>
        </div>
        </a>
      </div>
    </div>


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
      <div class="col-lg-3 col-sm-6 team-member" >
        <div class="team-member-img">
          <img src="Images/People/AC (2).jpg" alt="AC Photo">
          <div class="social-icons">
            <a href="mailto:anselmiscolumna@gmail.com"><i class="fa fa-envelope"></i></a>
            <a href="https://www.linkedin.com/in/anselmiscolumna/" target="_blank"><i class="fa fa-address-card"
              aria-hidden="true"></i></a>
            <a href="https://www.instagram.com/a__cado/" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://github.com/anselmiscolumna" target="_blank"><i class="fab fa-github"></i></a>
          </div>
        </div>
        <div class="p-4">
          <h5 class="title-sm mt-3 mb-0 text-white">Anselmis 'AC' Columna</h5>
          <small class="text-white">CS Student - AI & Machine Learning</small>
          <div class="hline"></div>
          <p class="text-white">Born in Patterson, New Jersey and raised in Kissimmee, Florida. Began studying Computer Science Fall Semester of 2019.
            Expecting to graduate Spring 2023.
          </p>
        </div>
      </div>

      <div class="col-lg-3 col-sm-6 team-member even">
        <div class="team-member-img">
          <img src="Images/People/AustinImage.jpg" alt="Austin Photo">
          <div class="social-icons">
            <a href="mailto:austinscheetz4business@gmail.com"><i class="fa fa-envelope"></i></a>
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
      </div>

      <div class="col-lg-3 col-sm-6 team-member">
        <div class="team-member-img">
          <img src="Images/People/Skippy_SGA_Headshot1.jpg" alt="">
          <div class="social-icons">
            <a href="mailto:sebastian.paquette0@gmail.com"><i class="fa fa-envelope"></i></a>
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
      </div>

      <div class="col-lg-3 col-sm-6 team-member even">
        <div class="team-member-img">
          <img src="Images/People/JC-jpg-1.jpg" alt="Dr. Cazalas Photo">
          <div class="social-icons">
            <a href="mailto:jcazalas@flsouthern.edu"><i class="fa fa-envelope"></i></a>
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
      </div>

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
</template>

<script setup>
/* IMPORTS */
import { ref, onMounted } from "vue";
import {
  collection, onSnapshot,
  addDoc,  deleteDoc, doc, updateDoc,
  query, orderBy
} from "firebase/firestore";
import { db } from "@/firebase";


/* USER INFO */

</script>