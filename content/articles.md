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
    <a href="index.html" class="breadcrumb-link text-white">Home</a>
  </li>
  <li class="breadcrumb-item">
    <a href="news.html" class="breadcrumb-link text-white">News &amp; Events</a>
  </li>
  <li class="breadcrumb-item active text-white" aria-current="page">
    Articles
  </li>
---

<main class="main-section p-0 min-vh-100 d-flex flex-column">
      <section class="esc-pages-section nav-tabs-section">
        <div class="container">
          <div class="nav-tabs-wrapper">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link" href="news.html">Conferences</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="press_releases.html">Press Releases</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="articles.html">Articles & News</a>
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
            
            <!-- Dynamische Event-Datenbank -->
            <efsc-collection pagesize="2" autoscroll="true">
              <efsc-event-filters></efsc-event-filters>
              <efsc-event-list publishtarget="sdv"></efsc-event-list>
              <efsc-pagination maxvisible="5" justify="center"></efsc-pagination>
            </efsc-collection>

            <div class="col-12 col-xl-8 gap-3 mt-0">
              <div class="d-flex flex-column gap-3">
              
<!-- ========== START: S-CORE 0.7.0 Release Card (English Version) ========== -->
<div class="main-blog-item-card d-flex flex-column gap-3">
  <div class="blog-item-content">
    <div class="top-pick-date d-flex align-items-center gap-2 mb-2">
      <span class="icon d-flex align-items-center">
        <img src="images/icons/calendar.svg" alt="Calendar Icon" />
      </span>
      <span class="date">May 12, 2026</span>
    </div>
    <h2 class="h2 mb-3">
      Eclipse S-CORE 0.7 is here!
    </h2>
    <div class="card-text mb-4" markdown="1">
<p>The Eclipse Safe Open Vehicle Core (S-CORE) community is happy to announce the release of version 0.7.0. This significant update introduces a host of new features, enhancements, and stability improvements, reinforcing our commitment to providing an open and safe platform for the next generation of vehicle software.</p>
<p>With our "Open by Choice - Safe by Design" philosophy, we are paving the way for a new era of collaborative development in the automotive sector. The 0.7 release marks a major milestone in our journey.</p>
<h4 class="mt-4 mb-2"><b>What's New in 0.7?</b></h4>
<p>While earlier releases focused on establishing the foundational architecture and introducing core capabilities, release 0.7 represents a significant step forward in the maturity of the platform. This version is centered on refinement and stabilization. We have concentrated on hardening the existing feature set, improving performance across the board, and enhancing the overall developer experience. This makes S-CORE not just more powerful, but also more robust and easier to adopt for complex automotive projects.</p>
<p>Here are some of the highlights from this release:</p>
<h4 class="mt-4 mb-2"><b>Core Platform Enhancements</b></h4>
<ul>
  <li><b>Baselibs (v0.2.7):</b> Our foundational libraries have been updated for better performance and stability, ensuring a rock-solid base for your applications.</li>
  <li><b>Communication (v0.2.1):</b> We've improved our communication stack, making it easier to build robust and efficient inter-process communication.</li>
  <li><b>Persistency (v0.3.2):</b> This release introduces enhancements to our persistency module, allowing for more reliable and flexible data storage solutions.</li>
  <li><b>Logging (v0.2.0):</b> Our logging framework has been updated to provide more structured and insightful diagnostics, making it easier to debug and monitor your systems.</li>
  <li><b>Orchestrator (v0.1.1):</b> The orchestrator has been refined to offer more precise control over service management and deployment.</li>
  <li><b>Kyron (v0.1.2):</b> Our time synchronization module, Kyron, has been updated for greater accuracy, a critical feature for distributed automotive systems.</li>
  <li><b>Lifecycle & Health Management (v0.2.0):</b> We've enhanced our lifecycle and health management capabilities, providing more robust mechanisms for monitoring and managing the state of your applications.</li>
</ul>
<h4 class="mt-4 mb-2"><b>Developer Experience and Tooling</b></h4>
<ul>
  <li><b>Reference Integration (v0.7):</b> The reference integration has been updated to bring all the new features and improvements together in a single, coherent package.</li>
  <li><b>Process Description (v1.5.4):</b> We've improved our process description models, allowing for a more precise and expressive definition of system behavior.</li>
  <li><b>Docs-as-Code (v4.0.3):</b> Our documentation-as-code toolchain has been upgraded, making it easier to create and maintain high-quality documentation.</li>
  <li><b>Tooling (v1.1.2):</b> We've made several improvements to our development tools to streamline your workflow.</li>
  <li><b>ITF (Integration Testing Framework) (v0.3.0) & Test Scenarios (v0.4.1):</b> Our testing frameworks have been enhanced to provide more comprehensive and efficient testing capabilities.</li>
  <li><b>Bazel CPP Toolchain (v0.5.1):</b> The Bazel C++ toolchain has been updated to support the latest features and provide a more seamless build experience.</li>
</ul>
    </div>
    <a class="read-more btn btn-primary main-primary mt-4 d-inline-block text-center" href="https://github.com/eclipse-score/reference_integration/releases/tag/v0.7.0" target="_blank">
      Get Started with Eclipse S-CORE 0.7
    </a>
  </div>
</div>
<!-- ========== END: S-CORE 0.7.0 Release Card (English Version) ========== -->

<!-- ========== START: NEW ARTICLE - OCX 2026 Recap ========== -->
<div class="main-blog-item-card d-flex flex-column gap-3">
  <div class="blog-img d-flex align-items-center justify-content-center">
    <img src="images/news/OCX26.png" alt="OCX 2026 Community" />
  </div>
  <div class="blog-item-content">
    <div class="top-pick-date d-flex align-items-center gap-2 mb-2">
      <span class="icon d-flex align-items-center">
        <img src="images/icons/calendar.svg" alt="Calendar Icon" />
      </span>
      <span class="date">April 24, 2026</span>
    </div>
    <h2 class="h2 mb-3">
      OCX 2026: Community and Collaboration Drive the Future of Eclipse S-CORE
    </h2>
    <div class="card-text mb-4" markdown="1">
      <p><strong>BRUSSELS, BE</strong> – The Eclipse Foundation's Open Community Experience (OCX) 2026 has successfully concluded, marking another milestone for open source innovation. The three-day event brought together developers, industry leaders, and researchers from around the globe for an inspiring series of collaborative sessions. For the Eclipse S-CORE project, it was a particularly impactful gathering, filled with deep dives into the future of the Software-Defined Vehicle (SDV).</br></br></p>
      
      <p>Discussions throughout the automotive track highlighted the project's growing maturity and strategic relevance, with several key presentations demonstrating the community's progress.</br></br></p>
      
      <p>Setting the stage, a joint presentation by Björn Reistel and Philipp Ahmann (ETAS GmbH) titled, <em>"Eclipse S-CORE: Open by Choice. Safe by Design. Driving Automotive Innovation Together!"</em> provided a comprehensive overview of the project's current status and its clear roadmap toward production readiness. Their talk underscored the advanced processes and the immense collaborative effort required to meet stringent automotive standards like ISO 26262.</br></br></p>
      
      <p>Functional safety, security, and reliability were central themes. Dr. Oliver Pajonk (Elektrobit) showcased the integration of Eclipse S-CORE with Elektrobit corbos Linux for Safety Applications, demonstrating a concrete, functionally safe software stack. This was complemented by Ulrich Huber (BMW AG) presenting an innovative, automated approach to enabling functional safety in open-source projects. Further deep dives included a session from Michael Schneider (AUMOVIO Germany GmbH) on critical cybersecurity challenges, and one from Isabella Stilkerich and Johannes Lex (Schaeffler Technologies), who presented a research project on increasing fault tolerance in new E/E architectures and an approach to examining system properties to increase system reliability.</br></br></p>
      
      <p>A presentation by Thilo Schmitt and Alexander Mohr (Mercedes-Benz Tech Innovation) on Eclipse OpenSOVD, explained how the project is creating a production-grade standard for vehicle diagnostics through open collaboration and how this integrated with the Eclipse S-CORE project. Laying out a path for other projects integrating with Eclipse S-CORE.</br></br></p>
      
      <p>Another highlight was the presentation on Eclipse OpenSOVD by Thilo Schmitt (Mercedes-Benz Tech Innovation), which demonstrated a clear model for ecosystem collaboration. He explained how OpenSOVD provides a production-grade standard for vehicle diagnostics by deeply integrating with the Eclipse S-CORE platform. This process now serves as a valuable blueprint, showing a successful pathway for other projects to integrate into the S-CORE landscape.</br></br></p>
      
      <p>The collective message from OCX 2026 is clear: the Eclipse S-CORE community is vibrant, growing, and collaboratively building the safe, secure, and open foundation for the future of automotive software. The insights and partnerships forged at this event will undoubtedly accelerate our journey toward a more open and scalable SDV landscape.</br></br></p>
      
      <h4 class="mt-4 mb-2"><b>Interested to join? Get Involved!</b></h4>
      <p>As the next opportunity, the Eclipse S-CORE and Eclipse OpenSOVD projects will conduct a joint workshop to align further integration and next steps in alignment of process and collaboration:</p>

      <!-- Workshop Info Box -->
      <div class="p-3 bg-light rounded border border-primary mt-3">
        <h5 class="h5 fw-bold mb-3 text-primary">🤝 S-CORE & OpenSOVD Integration Workshop</h5>
        <ul class="mb-0 list-unstyled d-flex flex-column gap-2">
          <li><strong>📅 Date:</strong> May 20, 2026</li>
          <li><strong>📍 Location:</strong> Mercedes-Benz Tech Innovation (MBTI) facilities, Wilhelm-Runge-Str. 11, 89081 Ulm, Germany.</li>
          <li><strong>💻 Participation:</strong> Remote participation will be available; however, on-site attendance is strongly encouraged to ensure an effective and collaborative session.</li>
        </ul>
      </div>
    </div>
    <a class="read-more btn btn-primary main-primary mt-2 d-inline-block text-center" href="https://github.com/eclipse-score" target="_blank">
      Get Involved with S-CORE
    </a>
  </div>
</div>
<!-- ========== END: NEW ARTICLE - OCX 2026 Recap ========== -->

<!-- ========== START: Call for Contributions (English Version) ========== -->
<div class="main-blog-item-card d-flex flex-column gap-3">
  
  <div class="blog-item-content">
    <div class="top-pick-date d-flex align-items-center gap-2 mb-2">
      <span class="icon d-flex align-items-center">
        <img src="images/icons/calendar.svg" alt="Calendar Icon" />
      </span>
      <!-- Adjust the date to the actual publication date of the call -->
      <span class="date">March 23, 2026</span> 
    </div>
    <h2 class="h2 mb-3">
      Shape the Future: Call for S-CORE Contributors & Maintainers!
    </h2>
    
    <!-- IMPORTANT: The markdown="1" attribute ensures the content is rendered correctly -->
    <div class="card-text mb-4" markdown="1">
<p>Eclipse S-CORE is actively seeking passionate contributors and dedicated maintainers to join us in shaping the core building blocks of the software-defined vehicle stack. This is a unique opportunity to actively influence, build, and maintain an open, consistent software foundation for the automotive industry's future.</p>
</br>
<p>We are specifically looking to expand our expertise and manpower in the following critical areas:</p>
<ul>
  <li>
    <strong>Generative AI (GenAI):</strong> Help us define and integrate intelligent solutions into the S-CORE ecosystem.
    <br><a href="https://github.com/eclipse-score/score/issues/1767?utm_campaign=14701658-S-CORE&utm_content=373839234&utm_medium=social&utm_source=linkedin&hss_channel=lcp-82366226" target="_blank" class="text-link">Learn more about GenAI opportunities</a>
  </li>
  <li>
    <strong>AI Platform / Inference Engine:</strong> Drive the development of robust, automotive-grade AI execution capabilities within S-CORE.
    <br><a href="https://github.com/eclipse-score/score/issues/1768?utm_campaign=14701658-S-CORE&utm_content=373839234&utm_medium=social&utm_source=linkedin&hss_channel=lcp-82366226" target="_blank">Explore AI Platform / Inference Engine roles</a>
  </li>
  <li>
    <strong>Security &amp; Cryptography:</strong> Strengthen the security posture of S-CORE, ensuring trust and integrity for safety-critical applications.
    <br><a href="https://github.com/eclipse-score/score/issues/2054?utm_campaign=14701658-S-CORE&utm_content=373839234&utm_medium=social&utm_source=linkedin&hss_channel=lcp-82366226" target="_blank">Discover Security &amp; Cryptography challenges</a>
  </li>
</ul></br>
<p><strong>What We Are Looking For:</strong></p>
<ul>
  <li>Innovative implementation concepts.</li>
  <li>Proposals for integrating existing open-source components.</li>
  <li>New module proposals that align with S-CORE's strategic objectives.</li>
</ul></br>
<p><strong>How To Contribute:</strong></p>
<p>Ready to make an impact? Submit your detailed proposal via our defined process:</p>
<ul>
    <li><a href="https://github.com/eclipse-score/score/issues/1571?utm_campaign=14701658-S-CORE&utm_content=373839234&utm_medium=social&utm_source=linkedin&hss_channel=lcp-82366226#issue-3289568769" target="_blank">Submit Your Proposal Here</a></li>
</ul>
</br>
<p><strong>What Happens Next:</strong></p>
<p>Selected contributions will be presented and discussed in the upcoming **Architecture Community Workshop in April 2026**. This workshop will be held either face-to-face or online, decision to be announced soon.</p></br>
<p><strong>Important Dates:</strong></p>
<ul>
  <li><strong>Submission Deadline:</strong> April 4, 2026</li>
  <li><strong>Workshop Format Decision:</strong> April 6, 2026</li>
</ul>
<p class="mt-3">Join us in building the open, consistent software stack for the next generation of vehicles!</p>
    </div>
    <a class="read-more btn btn-primary main-primary mt-4 d-inline-block text-center" href="https://github.com/eclipse-score" target="_blank">
      Visit S-CORE on GitHub
    </a>
  </div>
</div>
<!-- ========== END: Call for Contributions ========== -->

                <!-- ========== START: S-CORE 0.6.0 Release Card (English Version) ========== -->
<div class="main-blog-item-card d-flex flex-column gap-3">
  
  <div class="blog-item-content">
    <div class="top-pick-date d-flex align-items-center gap-2 mb-2">
      <span class="icon d-flex align-items-center">
        <img src="images/icons/calendar.svg" alt="Calendar Icon" />
      </span>
      <!-- Adjust the date to the actual release date -->
      <span class="date">Feb 23, 2026</span>
    </div>
    <h2 class="h2 mb-3">
      Revoked: Eclipse S-CORE v0.6.0 Milestone Released!
    </h2>
    
    <!-- IMPORTANT: The markdown="1" attribute ensures the content is rendered correctly -->
    <div class="card-text mb-4" markdown="1">
<p>Revoked: The milestone release was revoked due to incompatibility of some modules.</p>
<h4 class="mt-4 mb-2">What's New in v0.6.0:</h4>
<ul>
  <li>
    <strong>Dual-Language Platform:</strong> S-CORE now offers equal support for C++ and Rust, with 5 modules featuring Rust APIs and integration of the Ferrocene safety-critical Rust toolchain.
  </li>
  <li>
    <strong>Platform Expansion:</strong> Two major new modules added:
    <ul>
      <li><strong>Baselibs Rust:</strong> Foundation utilities for Rust development.</li>
      <li><strong>Lifecycle &amp; Health Management:</strong> Launch Manager and Health Monitoring for robust process supervision.</li>
    </ul>
  </li>
  <li>
    <strong>Enhanced Capabilities:</strong> Rust backends for Persistency, Communication, and Logging, an interactive example menu, and full CI/CD automation with a unified Bazel module.
  </li>
  <li>
    <strong>Matured Infrastructure:</strong> A comprehensive S-CORE Handbook, enhanced ISO 26262/21434 &amp; ASPICE 4.0 process compliance, and updates for QNX, Red Hat AutoSD, and more.
  </li>
</ul>
  </div>
</div>
<!-- ========== END: S-CORE 0.6.0 Release Card (English Version) ========== -->

                <div class="main-blog-item-card d-flex flex-column gap-3">
                  <div
                    class="blog-img d-flex align-items-center justify-content-center"
                  >
                    <img src="images/news/s-core_05_release_teaser.png" alt="" />
                  </div>
                  <div class="blog-item-content">
                    <div
                      class="top-pick-date d-flex align-items-center gap-2 mb-2"
                    >
                      <span class="icon d-flex align-items-center">
                        <img src="images/icons/calendar.svg" alt="" />
                      </span>
                      <span class="date">Nov 6th, 2025</span>
                    </div>
                    <h2 class="h2 mb-3">
                      Eclipse S-CORE 0.5 – What’s inside the first public release.
                    </h2>
                    <p>
                      Source: Eclipse SDV WG Linkedin <br/><br/>
                    </p>
                    <p>
                      The first version of Eclipse S-CORE (Safe Open Vehicle Core) lays the groundwork for open, safety-ready automotive software.<br/>
                      
                    </p>
                    <a
                      class="read-more btn btn-primary main-primary mt-4 d-inline-block text-center"
                      href="https://www.linkedin.com/posts/software-defined-vehicle_s-core-05-release-activity-7392145693861363712-JWqw" target="_blank"
                    >
                      Read More and Discuss
                    </a>
                  </div>
                </div>
                <div class="main-blog-item-card d-flex flex-column gap-3">
                  <div
                    class="blog-img d-flex align-items-center justify-content-center"
                  >
                    <img src="images/news/EF_Newsletter_2025_09.PNG" alt="" />
                  </div>
                  <div class="blog-item-content">
                    <div
                      class="top-pick-date d-flex align-items-center gap-2 mb-2"
                    >
                      <span class="icon d-flex align-items-center">
                        <img src="images/icons/calendar.svg" alt="" />
                      </span>
                      <span class="date">Sept 30, 2025</span>
                    </div>
                    <h2 class="h2 mb-3">
                      Eclipse S-CORE: A new approach to building automotive software together
                    </h2>
                    <p>
                      by Valerie Hasler and Memsud Godinjak 
                    </p>
                    <a
                      class="read-more btn btn-primary main-primary mt-4 d-inline-block text-center"
                      href="https://newsroom.eclipse.org/eclipse-newsletter/2025/september/eclipse-s-core-new-approach-building-automotive-software-together"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              
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
                
              </div>
            </div>
          </div>
        </div>
      </section>
</main>
