---
title: "Eclipse S-CORE"
render_raw: true
extra_styles:
  - "css/bootstrap.min.css"
  - "css/loading.css"
  - "css/navbar.css"
  - "css/globals.css"
  - "css/footer.css"
  - "css/styleguide.css"
  - "css/news.css"
extra_scripts:
  - "js/jquery-3.7.1.min.js"
  - "js/bootstrap.min.js"
  - "js/loading.js"
use_shared_header: true
use_shared_footer: true
active_nav: "news"
header_class: "news-page-header"
header_title: "News & Events"
breadcrumb_html: |
  
                  <li class="breadcrumb-item">
                    <a href="index.html" class="breadcrumb-link text-white"
                      >Home</a
                    >
                  </li>
                  <li class="breadcrumb-item">
                    <a href="news.html" class="breadcrumb-link text-white"
                      >News &amp; Events</a
                    >
                  </li>
                  <li
                    class="breadcrumb-item active text-white"
                    aria-current="page"
                  >
                    Conferences
                  </li>
---

<main class="main-section p-0 min-vh-100 d-flex flex-column">
      <section class="esc-pages-section nav-tabs-section">
        <div class="container">
          <div class="nav-tabs-wrapper">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link active" href="news.html">Conferences</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="press_releases.html">Press Releases</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="articles.html">Articles & News</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="townhalls.html">Townhalls</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        class="esc-section esc-news-container-section pt-0 min-vh-100 mt-4"
      >
        <div class="container">
          
          <div class="row w-100 g-4">
            <div class="col-12 col-xl-8 gap-3 mt-0">
              <div class="d-flex flex-column gap-3">
                
                <div class="main-blog-item-card d-flex flex-column gap-3">
                    <h5 class="h5 fw-semibold mb-3">Upcoming Conferences</h5>

                  <!-- BESTEHENDER UPCOMING EVENT: OCX 2026 -->
                  <div class="main-blog-item-card d-flex flex-column gap-3">
                    <div class="blog-img d-flex align-items-center justify-content-center">
                      <img src="images/news/OCX26.png" alt="" />
                    </div>

                    <div class="blog-item-content">
                      <div
                        class="top-pick-date d-flex align-items-center gap-2 mb-2"
                      >
                        <span class="icon d-flex align-items-center">
                          <img src="images/icons/calendar.svg" alt="" />
                        </span>
                        <span class="date">21-23 Apr, 2026</span>
                      </div>
                      <h2 class="h2 mb-3">
                        OCX 2026 | Open Community Experience, <br> Brussels, Belgium
                      </h2>
                      <p>
                        Presenter: Björn Reistel <br>
                        Topic: S-CORE | Background, Status and Insights to S-CORE 0.5 "Certifiable"
                      </p>
                      <a
                        class="read-more btn btn-primary main-primary mt-4 d-inline-block text-center"
                        href="https://www.ocxconf.org/event/2026/summary"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                     
                </div> <!-- /main-blog-item-card for Upcoming Conferences -->

              </div>
              <div class="text-center mt-3">
                <a
                  class="show-more btn btn-primary main-outline-primary mt-4 d-inline-block text-center"
                  href="#"
                >
                  Show More
                </a>
              </div>
            </div>
            <div class="col-12 col-xl-4 mt-xl-0 mt-5">
              <div class="main-search-top-picks-card d-flex flex-column gap-4">
               
                <div class="top-picks-container">
                  <h5 class="h5 fw-semibold mb-3">Previous Conferences</h5>

                  <aside class="top-picks-our-blogs">

                    <!-- MOVED EVENT: Open Chain and Friends in Stuttgart -->
                    <a href="https://openchainproject.org/news/2025/12/09/openchain-and-friends-2026"
                    class="top-pick-item d-flex align-items-start gap-3" target="_blank" rel="noopener noreferrer">
                    <div class="top-pick-img">
                      <img src="images/news/2026_openchain_and_friends.png" alt="Open Chain and Friends" />
                    </div>                     
                    <div class="top-pick-content">
                      <div
                        class="top-pick-date d-flex align-items-center gap-2 mb-2"
                      >
                        <span class="icon d-flex align-items-center">
                          <img src="images/icons/calendar.svg" alt="" />
                        </span>
                        <span class="date">24-26 Mar, 2026</span>
                      </div>
                      <h3>Open Chain and Friends, <br> Stuttgart, Germany</h3>
                      <p class="text-muted">
                        Presenter: Björn Reistel <br>
                        Topic: Eclipse S-CORE: Open by Choice, Safe by Design.
                      </p>
                    </div>
                  </a>

                    <!-- NEUER PREVIOUS EVENT: SDV Community Days at T-Systems -->
                    <a href="https://www.eclipse-foundation.events/event/SDV-Community-Days-2026/home"
                    class="top-pick-item d-flex align-items-start gap-3" target="_blank" rel="noopener noreferrer">
                    <div class="top-pick-img">
                      <img src="images/news/2026_community_day_bonn.png" alt="SDV Community Days" />
                    </div>                     
                    <div class="top-pick-content">
                      <div
                        class="top-pick-date d-flex align-items-center gap-2 mb-2"
                      >
                        <span class="icon d-flex align-items-center">
                          <img src="images/icons/calendar.svg" alt="" />
                        </span>
                        <span class="date">24 Feb, 2026</span>
                      </div>
                      <h3>SDV Community Days at T-Systems, <br>
                        Bonn, Germany</h3>
                      <p class="text-muted">
                        Presenter: Philipp Ahmann, Björn Reistel <br>
                        Topic: "Eclipse Safe Open Vehicle Core: Introduction to latest Eclipse S-CORE Release, Current Momentum, and Outlook 2026."
                      </p>
                    </div>
                  </a>  

                    <!-- VERSCHOBENER EVENT: SIA 2026 -->
                    <a href="https://www.sia.fr/evenements/404-study-day-future-proofing-sdv"
                    class="top-pick-item d-flex align-items-start gap-3" target="_blank" rel="noopener noreferrer">
                    <div class="top-pick-img">
                      <img src="images/news/SIA_logo.png" alt="SIA 2026" />
                    </div>                     
                    <div class="top-pick-content">
                      <div
                        class="top-pick-date d-flex align-items-center gap-2 mb-2"
                      >
                        <span class="icon d-flex align-items-center">
                          <img src="images/icons/calendar.svg" alt="" />
                        </span>
                        <span class="date">5 Feb, 2026</span>
                      </div>
                      <h3>SIA 2026 | Future Proofing SDV Study Day, <br>
                        Paris, France</h3>
                      <p class="text-muted">
                        Presenter: Björn Reistel (ETAS) <br>
                        Topic: S-CORE | Background, Status and Insights to S-CORE 0.5 "Certifiable"
                      </p>
                    </div>
                  </a>

                    <!-- BESTEHENDE EVENTS (unverändert) -->
                    <a href="https://www.eventbrite.com/e/eclipse-sdv-community-meetup-japan-co-hosted-by-bosch-group-tickets-1540218427779"
                    class="top-pick-item d-flex align-items-start gap-3" target="_blank" rel="noopener noreferrer">
                    <div class="top-pick-img">
                      <img src="images/news/EclipseMeetupJapan.jfif" alt="Top Picks" />
                    </div>                     
                    <div class="top-pick-content">
                      <div
                        class="top-pick-date d-flex align-items-center gap-2 mb-2"
                      >
                        <span class="icon d-flex align-items-center">
                          <img src="images/icons/calendar.svg" alt="" />
                        </span>
                        <span class="date">11 Dec, 2025</span>
                      </div>
                      <h3>Eclipse SDV Community Meetup, <br>
                        Japan/ Yokohama (BOSCH)</h3>
                      <p class="text-muted">
                        Presenter: Sven Kappel (ETAS) <br>
                        Topic: "S-CORE, a holistic approach for automotive towards open source."
                      </p>
                    </div>
                  </a>  

                  <a href="https://www.eventbrite.com/e/eclipse-sdv-south-korea-lg-tickets-1742261403759"
                      class="top-pick-item d-flex align-items-start gap-3" target="_blank" rel="noopener noreferrer">
                      <div class="top-pick-img">
                        <img src="images/news/EF_MeetUp_KR.PNG" alt="Top Picks" />
                      </div>                     
                      <div class="top-pick-content">
                        <div
                          class="top-pick-date d-flex align-items-center gap-2 mb-2"
                        >
                          <span class="icon d-flex align-items-center">
                            <img src="images/icons/calendar.svg" alt="" />
                          </span>
                          <span class="date">04 Dec, 2025</span>
                        </div>
                        <h3>Eclipse SDV Community Meetup, <br>
                          Korea/ Seoul (LG)</h3>
                        <p class="text-muted">
                          Presenter: Memsud Godinjak (BMW), <br>
                          Björn Reistel (ETAS) <br>
                          Topic: "S-CORE, a holistic approach for automotive towards open source."
                        </p>
                      </div>
                    </a>  
                    
                    
                    <a
                      href="https://www.exida-eu.com/images/home/exida%20Automotive%20Symposium%202025-V04.pdf"
                      class="top-pick-item d-flex align-items-start gap-3" target="_blank" rel="noopener noreferrer">
                      <div class="top-pick-img">
                        <img src="images/news/exida_Symposium.webp" alt="Top Picks" />
                      </div>                     
                      <div class="top-pick-content">
                        <div
                          class="top-pick-date d-flex align-items-center gap-2 mb-2"
                        >
                          <span class="icon d-flex align-items-center">
                            <img src="images/icons/calendar.svg" alt="" />
                          </span>
                          <span class="date">27-29 Oct, 2025</span>
                        </div>
                        <p class="text-muted">
                          Exida Automotive Symposium, Spitzingsee <br>
                          Presenter: Markus Schu (Accenture) <br>
                          Topic: "Achieving Functional Safety with Open-Source Software in Automotivee"
                        </p>
                      </div>
                    </a>  

                    <a
                      href="https://www.vdi-wissensforum.de/eliv/"
                      class="top-pick-item d-flex align-items-start gap-3" target="_blank" rel="noopener noreferrer">
                      <div class="top-pick-img">
                        <img src="images/news/ELIV.png" alt="Top Picks" />
                      </div>
                      <div class="top-pick-content">
                        <div
                          class="top-pick-date d-flex align-items-center gap-2 mb-2"
                        >
                          <span class="icon d-flex align-items-center">
                            <img src="images/icons/calendar.svg" alt="" />
                          </span>
                          <span class="date">15-16 Oct, 2025</span>
                        </div>
                        <p class="text-muted">
                          ELIV 2025, Bonn <br>
                          Panel: Acceleration: How Open Source will Transform the Automotive industry 
                          Moderation: Michael Plagge, Eclipse Foundation Europe 
                          Panelist: Participants to be confirmed.
                        </p>
                      </div>
                    </a>   

 
                    <a
                      href="#"
                      class="top-pick-item d-flex align-items-start gap-3" target="_blank" rel="noopener noreferrer">
                      <div class="top-pick-img">
                        <img src="images/news/Eclipse_Detroit.PNG" alt="Top Picks" />
                      </div>
                      <div class="top-pick-content">
                        <div
                          class="top-pick-date d-flex align-items-center gap-2 mb-2"
                        >
                          <span class="icon d-flex align-items-center">
                            <img src="images/icons/calendar.svg" alt="" />
                          </span>
                          <span class="date">07 Oct, 2025</span>
                        </div>
                        <p class="text-muted">
                          Eclipse SDV Community Meetup, Detroit <br>
                          TOP: "Topic: Eclipse S-CORE –  Why join? What to expect and how to get involved!" <br>
                          Presenter: Thomas Fleischmann (Accenture)
                        </p>
                      </div>
                    </a>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</main>