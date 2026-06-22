---
title: "Eclipse S-CORE"
render_raw: true
extra_styles:
  - "css/bootstrap.min.css"
  - "css/loading.css"
  - "css/owl.carousel.min.css"
  - "css/navbar.css"
  - "css/globals.css"
  - "css/footer.css"
  - "css/styleguide.css"
  - "css/about-us.css"
  - "css/contributor-slider.css"
extra_scripts:
  - "js/jquery-3.7.1.min.js"
  - "js/bootstrap.min.js"
  - "js/owl.carousel.min.js"
  - "js/panzoom.min.js"
  - "js/zoom.js"
  - "js/about-us.js"
  - "js/contributor-slider.js"
  - "js/member-logos.js"
  - "js/loading.js"
use_shared_header: true
use_shared_footer: true
active_nav: "about"
header_class: "about-page-header"
header_title: "About Us"
breadcrumb_html: |
  
                  <li class="breadcrumb-item">
                    <a href="index.html" class="breadcrumb-link text-white"
                      >Home</a
                    >
                  </li>
  
                  <li
                    class="breadcrumb-item active text-white"
                    aria-current="page"
                  >
                    About Us
                  </li>
---

<main class="main-section p-0 min-vh-100 d-flex flex-column">
      <section class="esc-section esc-who-we-are-container-section">
        <div class="container">
          <div class="row w-100 g-4">
            <div class="col-12 col-xl-6">
              <div class="who-we-are-content">
                <h2 class="h2 mb-3 fw-semibold">Who We Are</h2>
                <p class="mb-2">
                  We’re a collaborative and ever-growing community of automotive
                  experts, technology partners, developers, and innovators
                  united under the Eclipse Foundation. Together, we’re shaping
                  the future of automotive software by building open, safe, and
                  scalable solutions.
                </p>

                <div
                  class="vision-and-mission-container mt-4 d-flex flex-column gap-4"
                >
                  <div
                    class="vision-mission-item d-flex align-items-start gap-3"
                  >
                    <div class="icon">
                      <img
                        src="images/about-us/our-vision.svg"
                        alt="Vision Icon"
                      />
                    </div>
                    <div class="mt-3">
                      <h4 class="h4">Our Vision</h4>
                      <p>
                        “Build the best automotive runtime solution – ONLY
                        ONCE!”
                      </p>
                    </div>
                  </div>

                  <div
                    class="vision-mission-item d-flex align-items-start gap-3"
                  >
                    <div class="icon">
                      <img
                        src="images/about-us/our-mission.svg"
                        alt="Vision Icon"
                      />
                    </div>
                    <div class="mt-3">
                      <h4 class="h4">Our Mission</h4>
                      <p>
                        Unite the automotive software community around <br>
                        ONE OPEN-SOURCE CORE”
                        <br> 
                        <br>
                        
                      </p>
                      <p>
                        <strong class="fw-semibold">Reuse</strong> “Stop
                        reinventing the wheel”
                      </p>
                      <p>
                        <strong class="fw-semibold">Reduce</strong>
                        “…complexity, effort,…”
                      </p>
                      <p>
                        <strong class="fw-semibold">Evolve</strong> “Build on a
                        future-proof foundation”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-xl-6">
              <div class="about-img-card">
                <img src="images/about-us/car.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="esc-section esc-our-contributors-container-section contributor-nav-dark">
        <div class="container">
          <div class="pages-title">
            <h2 class="h2 text-white fw-bold mb-3">Our Contributors</h2>
            <p>
              S-CORE is backed by a diverse network of leading automotive
              companies, technology providers, and open-source contributors.
              These members play a vital role in driving innovation, shaping the
              platform’s direction, and ensuring its success across real-world
              applications.
            </p>
          </div>
          <div class="contributor-slider-content mt-5">
            <div class="owl-carousel-wrapper position-relative">
              <div class="owl-carousel contributor-slider">
              </div>
              <button class="custom-prev" style="display: none">
                <img src="images/icons/chevron-left.svg" alt="" />
              </button>
              <button class="custom-next" style="display: none">
                <img src="images/icons/chevron-right.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="esc-section esc-structure-container-section">
        <div class="container">
          <div class="pages-title">
            <h2 class="h2 fw-bold mb-3">S-CORE Community Structure</h2>
            <p>
              S-CORE brings together members, technical leads, and specialized
              teams to define and manage modules, propose requirements, and
              ensure the platform evolves with clarity and purpose.
            </p>
          </div>
          <div class="structure-content mt-5">
            <div class="zoom-image-wrapper">
              <div class="panzoom-container">
                <img
                  src="images/about-us/structure_new.png"
                  alt=""
                  class="zoom-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="esc-section esc-steering-committees-section">
        <div class="container">
          <div class="pages-title">
            <h2 class="h2 fw-bold mb-3">Steering Committees</h2>
            <p>
              Every core member can name a project lead. Project leads are
              representatives of their entities, and jointly they´re steering
              the project. Because of the project´s size, an additional role
              “technical leads” was introduced in S-Core. Each project lead can
              nominate one technical lead to support in operational topics like
              project planning. In order to run the project, there are two major
              committees:
            </p>
          </div>
          <div class="steering-content mt-5">
            <div class="row g-5">
              <div class="col-12 col-md-6">
                <h4 class="h4 fw-bold">
                  Technical Lead <span class="fw-normal">Circle</span>
                </h4>
                <div class="steering-item-img mb-3">
                  <img
                    src="images/about-us/technical-lead-circle.png"
                    alt=""
                    class="img-fluid"
                  />
                </div>
                <p>
                  The Technical Steering Committee (TSC) is responsible for the
                  overall technical direction of the project. It ensures that
                  the project remains aligned with its goals and objectives, and
                  it provides guidance on technical decisions.
                </p>
              </div>
              <div class="col-12 col-md-6">
                <h4 class="h4 fw-bold">
                  Project Lead <span class="fw-normal">Circle</span>
                </h4>
                <div class="steering-item-img mb-3">
                  <img
                    src="images/about-us/project-lead-circle.png"
                    alt=""
                    class="img-fluid"
                  />
                </div>
                <p>
                  The Project Management Committee (PMC) is responsible for the
                  day-to-day management of the project. It oversees the
                  project's progress, manages resources, and ensures that
                  deadlines are met.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="esc-section esc-communities-section">
        <div class="container">
          <div class="pages-title">
            <h2 class="h2 fw-bold mb-3 text-white">Communities</h2>
            <p>
              Every S-CORE community has its focus topic, and every S-CORE
              member is free to join, discuss and to shape the outcome.
            </p>
          </div>
          <div class="communities-content mt-5">
            <div class="community-card">
              <img
                src="images/about-us/SoftwareArchitecture.svg"
                alt="Software Architecture"
              />
              <h3>Software Architecture<br><br></h3>
              <p>
                
                In this community, the overall software architecture of our
                stack is planned. Join here to get the recent information about
                next features for S-CORE. .
              </p>
            </div>
            <div class="community-card">
              <img
                src="images/about-us/SoftwareDevelopmentProcess.svg"
                alt="Software Development Process"
              />
              <h3>Software Development Process</h3>
              <p>
                Due to our goal to deliver a stack which is safety certifiable,
                we need well defined software development processes. This
                community is continuously designing & improving our processes.
              </p>
            </div>
            <div class="community-card">
              <img
                src="images/about-us/Infrastructure.svg"
                alt="Infrastructure"
              />
              <h3>Infrastructure<br><br></h3>
              <p>
                To enable a fast and reliable development, this community is
                setting up the build infrastructure, the tooling, process
                enabling, the CI/CD pipelines, and more…
              </p>
            </div>
            <div class="community-card">
              <img src="images/about-us/Testing.svg" alt="Testing" />
              <h3>Testing<br><br></h3>
              <p>
                To meet our quality goals, S-CORE needs to be tested – In this
                community, experienced test managers and testers are ensuring
                exactly this.
              </p>
            </div>
            <div class="community-card">
              <img
                src="images/about-us/MarketingCommunication.svg"
                alt="Marketing & Communication"
              />
              <h3>Marketing & Communication</h3>
              <p>
                S-CORE can only be successful, when more and more members are
                joining! – This community ensures, that the great results
                -provided by S-CORE teams- are communicated to the automotive
                community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="esc-section esc-community-voices-section">
        <div class="container">
          <div class="pages-title">
            <h2 class="h2 fw-bold mb-3">
              Community Voices – What Our Members Say
            </h2>
            <p>
              Community Voices captures insights and experiences from our
              members, highlighting their role in shaping the platform and
              driving innovation within the S-CORE ecosystem. Their feedback
              reflects the impact, collaboration, and shared vision that fuel
              our open-source journey.
            </p>
          </div>
          <div class="community-voices-content mt-5">
            <div class="owl-carousel-wrapper position-relative">
              <div class="owl-carousel about-us-slider">
                <div class="card">
                  <div class="card-header">
                    <div class="user-data d-flex align-items-center gap-3 mb-2">
                      <div class="image">
                        <img src="images/about-us/mikem.jpg" alt="" />
                      </div>
                      <div class="username">
                        <div class="name">Mike Milinkovich</div>
                        <div class="role">Executive Director of the Eclipse Foundation</div>
                      </div>
                    </div>

                  </div>
                  <div class="card-body">
                    <p>
                      With S-CORE, we’re providing developers with a reliable, safety-grade runtime environment that allows the industry to focus on innovation while reducing duplication of effort. This project offers the entire sector a jumpstart in building the custom solutions that will define the future of mobility
                    </p>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header">
                    <div class="user-data d-flex align-items-center gap-3 mb-2">
                      <div class="image">
                        <img src="images/about-us/antonk.jpg" alt="" />
                      </div>
                      <div class="username">
                        <div class="name">Anton Krivoborodov</div>
                        <div class="role">Technical Project Lead - BMW</div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <p>
                      With S-Core, we can shape the future of the Safe-POSIX platform with the support of a strong open-source community.
                    </p>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header">
                    <div class="user-data d-flex align-items-center gap-3 mb-2">
                      <div class="image">
                        <img src="images/about-us/Markus S.jpg" alt="" />
                      </div>
                      <div class="username">
                        <div class="name">Markus Schupfner</div>
                        <div class="role">CEO Qorix</div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <p>
                      S-CORE is more than a project – it’s the foundation of an open, collaborative future for automotive software. As a founding contributor and distributor, Qorix is proud to shape a platform that turns shared challenges into shared progress.
                    </p>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header">
                    <div class="user-data d-flex align-items-center gap-3 mb-2">
                      <div class="image">
                        <img src="images/about-us/sven.jpg" alt="" />
                      </div>
                      <div class="username">
                        <div class="name">Sven Kappel</div>
                        <div class="role">Head of ETAS.NEXT</div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <p>
                      At ETAS, we believe in the transformative potential of open collaboration in driving software innovation. 
                      As a founding member of Eclipse S-CORE, we are committed to shaping a robust platform that fosters seamless integration, 
                      sustainable development processes, and cutting-edge solutions empowering tomorrow's automotive software
                    </p>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header">
                    <div class="user-data d-flex align-items-center gap-3 mb-2">
                      <div class="image">
                        <img src="images/about-us/lars.jfif" alt="" />
                      </div>
                      <div class="username">
                        <div class="name">Lars Bauhofer</div>
                        <div class="role">Product Program Manager - Qorix</div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <p>
                      S-CORE makes collaboration tangible. From architecture workshops to release planning – we’re actively building the stack, aligning teams, and turning code into common ground.
                    </p>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header">
                    <div class="user-data d-flex align-items-center gap-3 mb-2">
                      <div class="image">
                        <img src="images/about-us/nico.jpg" alt="" />
                      </div>
                      <div class="username">
                        <div class="name">Dr. Nico Hartmann</div>
                        <div class="role">CTO - Qorix</div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <p>
                      Contributing to S-CORE means contributing to what matters: deterministic execution, safety by design, and reusable infrastructure. We bring the middleware expertise – and we’re here to make it usable at scale.  
                    </p>
                  </div>
                </div>
              </div>
              <button class="custom-prev" style="display: none">
                <img src="images/icons/chevron-left.svg" alt="" />
              </button>
              <button class="custom-next" style="display: none">
                <img src="images/icons/chevron-right.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
</main>
