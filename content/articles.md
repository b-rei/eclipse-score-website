+++
title = "Articles & News"
description = "Project releases, community stories, and perspectives from across Eclipse S-CORE."
type = "editorial"
layout = "single"
active_nav = "news"
news_section = "articles"
editorial_heading = "Articles & News"
editorial_description = "Project releases, community stories, and perspectives from across Eclipse S-CORE."
extra_styles = ["css/editorial.css"]

[[articles.items]]
date = "May 12, 2026"
title = "Eclipse S-CORE 0.7 is here!"
action_label = "Get started with Eclipse S-CORE 0.7"
action_url = "https://github.com/eclipse-score/reference_integration/releases/tag/v0.7.0"
external = true
body = """
The Eclipse Safe Open Vehicle Core (S-CORE) community is happy to announce the release of version 0.7.0. This significant update introduces a host of new features, enhancements, and stability improvements, reinforcing our commitment to providing an open and safe platform for the next generation of vehicle software.

With our "Open by Choice - Safe by Design" philosophy, we are paving the way for a new era of collaborative development in the automotive sector. The 0.7 release marks a major milestone in our journey.

#### What's New in 0.7?

While earlier releases focused on establishing the foundational architecture and introducing core capabilities, release 0.7 represents a significant step forward in the maturity of the platform. This version is centered on refinement and stabilization. We have concentrated on hardening the existing feature set, improving performance across the board, and enhancing the overall developer experience. This makes S-CORE not just more powerful, but also more robust and easier to adopt for complex automotive projects.

Here are some of the highlights from this release:

#### Core Platform Enhancements

- **Baselibs (v0.2.7):** Our foundational libraries have been updated for better performance and stability, ensuring a rock-solid base for your applications.
- **Communication (v0.2.1):** We've improved our communication stack, making it easier to build robust and efficient inter-process communication.
- **Persistency (v0.3.2):** This release introduces enhancements to our persistency module, allowing for more reliable and flexible data storage solutions.
- **Logging (v0.2.0):** Our logging framework has been updated to provide more structured and insightful diagnostics, making it easier to debug and monitor your systems.
- **Orchestrator (v0.1.1):** The orchestrator has been refined to offer more precise control over service management and deployment.
- **Kyron (v0.1.2):** Our time synchronization module, Kyron, has been updated for greater accuracy, a critical feature for distributed automotive systems.
- **Lifecycle & Health Management (v0.2.0):** We've enhanced our lifecycle and health management capabilities, providing more robust mechanisms for monitoring and managing the state of your applications.

#### Developer Experience and Tooling

- **Reference Integration (v0.7):** The reference integration has been updated to bring all the new features and improvements together in a single, coherent package.
- **Process Description (v1.5.4):** We've improved our process description models, allowing for a more precise and expressive definition of system behavior.
- **Docs-as-Code (v4.0.3):** Our documentation-as-code toolchain has been upgraded, making it easier to create and maintain high-quality documentation.
- **Tooling (v1.1.2):** We've made several improvements to our development tools to streamline your workflow.
- **ITF (Integration Testing Framework) (v0.3.0) & Test Scenarios (v0.4.1):** Our testing frameworks have been enhanced to provide more comprehensive and efficient testing capabilities.
- **Bazel CPP Toolchain (v0.5.1):** The Bazel C++ toolchain has been updated to support the latest features and provide a more seamless build experience.
"""

[[articles.items]]
date = "April 24, 2026"
title = "OCX 2026: Community and Collaboration Drive the Future of Eclipse S-CORE"
image = "images/news/OCX26.png"
image_alt = "Open Community Experience 2026"
action_label = "Get involved with S-CORE"
action_url = "https://github.com/eclipse-score"
external = true
body = """
**BRUSSELS, BE** - The Eclipse Foundation's Open Community Experience (OCX) 2026 has successfully concluded, marking another milestone for open source innovation. The three-day event brought together developers, industry leaders, and researchers from around the globe for an inspiring series of collaborative sessions. For the Eclipse S-CORE project, it was a particularly impactful gathering, filled with deep dives into the future of the Software-Defined Vehicle (SDV).

Discussions throughout the automotive track highlighted the project's growing maturity and strategic relevance, with several key presentations demonstrating the community's progress.

Setting the stage, a joint presentation by Björn Reistel and Philipp Ahmann (ETAS GmbH) titled, *"Eclipse S-CORE: Open by Choice. Safe by Design. Driving Automotive Innovation Together!"* provided a comprehensive overview of the project's current status and its clear roadmap toward production readiness. Their talk underscored the advanced processes and the immense collaborative effort required to meet stringent automotive standards like ISO 26262.

Functional safety, security, and reliability were central themes. Dr. Oliver Pajonk (Elektrobit) showcased the integration of Eclipse S-CORE with Elektrobit corbos Linux for Safety Applications, demonstrating a concrete, functionally safe software stack. This was complemented by Ulrich Huber (BMW AG) presenting an innovative, automated approach to enabling functional safety in open-source projects. Further deep dives included a session from Michael Schneider (AUMOVIO Germany GmbH) on critical cybersecurity challenges, and one from Isabella Stilkerich and Johannes Lex (Schaeffler Technologies), who presented a research project on increasing fault tolerance in new E/E architectures and an approach to examining system properties to increase system reliability.

A presentation by Thilo Schmitt and Alexander Mohr (Mercedes-Benz Tech Innovation) on Eclipse OpenSOVD explained how the project is creating a production-grade standard for vehicle diagnostics through open collaboration and how this integrated with the Eclipse S-CORE project. Laying out a path for other projects integrating with Eclipse S-CORE.

Another highlight was the presentation on Eclipse OpenSOVD by Thilo Schmitt (Mercedes-Benz Tech Innovation), which demonstrated a clear model for ecosystem collaboration. He explained how OpenSOVD provides a production-grade standard for vehicle diagnostics by deeply integrating with the Eclipse S-CORE platform. This process now serves as a valuable blueprint, showing a successful pathway for other projects to integrate into the S-CORE landscape.

The collective message from OCX 2026 is clear: the Eclipse S-CORE community is vibrant, growing, and collaboratively building the safe, secure, and open foundation for the future of automotive software. The insights and partnerships forged at this event will undoubtedly accelerate our journey toward a more open and scalable SDV landscape.

#### Interested to join? Get involved!

As the next opportunity, the Eclipse S-CORE and Eclipse OpenSOVD projects will conduct a joint workshop to align further integration and next steps in alignment of process and collaboration:

**S-CORE & OpenSOVD Integration Workshop**

- **Date:** May 20, 2026
- **Location:** Mercedes-Benz Tech Innovation (MBTI) facilities, Wilhelm-Runge-Str. 11, 89081 Ulm, Germany.
- **Participation:** Remote participation will be available; however, on-site attendance is strongly encouraged to ensure an effective and collaborative session.
"""

[[articles.items]]
date = "March 23, 2026"
title = "Shape the Future: Call for S-CORE Contributors & Maintainers!"
action_label = "Visit S-CORE on GitHub"
action_url = "https://github.com/eclipse-score"
external = true
body = """
Eclipse S-CORE is actively seeking passionate contributors and dedicated maintainers to join us in shaping the core building blocks of the software-defined vehicle stack. This is a unique opportunity to actively influence, build, and maintain an open, consistent software foundation for the automotive industry's future.

We are specifically looking to expand our expertise and manpower in the following critical areas:

- **Generative AI (GenAI):** Help us define and integrate intelligent solutions into the S-CORE ecosystem. [Learn more about GenAI opportunities](https://github.com/eclipse-score/score/issues/1767?utm_campaign=14701658-S-CORE&utm_content=373839234&utm_medium=social&utm_source=linkedin&hss_channel=lcp-82366226)
- **AI Platform / Inference Engine:** Drive the development of robust, automotive-grade AI execution capabilities within S-CORE. [Explore AI Platform / Inference Engine roles](https://github.com/eclipse-score/score/issues/1768?utm_campaign=14701658-S-CORE&utm_content=373839234&utm_medium=social&utm_source=linkedin&hss_channel=lcp-82366226)
- **Security & Cryptography:** Strengthen the security posture of S-CORE, ensuring trust and integrity for safety-critical applications. [Discover Security & Cryptography challenges](https://github.com/eclipse-score/score/issues/2054?utm_campaign=14701658-S-CORE&utm_content=373839234&utm_medium=social&utm_source=linkedin&hss_channel=lcp-82366226)

**What we are looking for:**

- Innovative implementation concepts.
- Proposals for integrating existing open-source components.
- New module proposals that align with S-CORE's strategic objectives.

**How to contribute:**

Ready to make an impact? Submit your detailed proposal via our defined process: [Submit your proposal here](https://github.com/eclipse-score/score/issues/1571?utm_campaign=14701658-S-CORE&utm_content=373839234&utm_medium=social&utm_source=linkedin&hss_channel=lcp-82366226#issue-3289568769).

**What happens next:**

Selected contributions will be presented and discussed in the upcoming Architecture Community Workshop in April 2026. This workshop will be held either face-to-face or online, decision to be announced soon.

**Important dates:**

- **Submission deadline:** April 4, 2026
- **Workshop format decision:** April 6, 2026

Join us in building the open, consistent software stack for the next generation of vehicles!
"""

[[articles.items]]
date = "Feb 23, 2026"
title = "Revoked: Eclipse S-CORE v0.6.0 Milestone Released!"
body = """
Revoked: The milestone release was revoked due to incompatibility of some modules.

#### What's new in v0.6.0

- **Dual-Language Platform:** S-CORE now offers equal support for C++ and Rust, with 5 modules featuring Rust APIs and integration of the Ferrocene safety-critical Rust toolchain.
- **Platform Expansion:** Two major new modules added:
  - **Baselibs Rust:** Foundation utilities for Rust development.
  - **Lifecycle & Health Management:** Launch Manager and Health Monitoring for robust process supervision.
- **Enhanced Capabilities:** Rust backends for Persistency, Communication, and Logging, an interactive example menu, and full CI/CD automation with a unified Bazel module.
- **Matured Infrastructure:** A comprehensive S-CORE Handbook, enhanced ISO 26262/21434 & ASPICE 4.0 process compliance, and updates for QNX, Red Hat AutoSD, and more.
"""

[[articles.items]]
date = "Nov 6th, 2025"
title = "Eclipse S-CORE 0.5 - What’s inside the first public release"
image = "images/news/s-core_05_release_teaser.png"
image_alt = "Eclipse S-CORE 0.5 release teaser"
summary = "The first version of Eclipse S-CORE (Safe Open Vehicle Core) lays the groundwork for open, safety-ready automotive software."
source = "Eclipse SDV WG LinkedIn"
action_label = "Read more and discuss"
action_url = "https://www.linkedin.com/posts/software-defined-vehicle_s-core-05-release-activity-7392145693861363712-JWqw"
external = true

[[articles.items]]
date = "Sept 30, 2025"
title = "Eclipse S-CORE: A new approach to building automotive software together"
image = "images/news/EF_Newsletter_2025_09.PNG"
image_alt = "Eclipse Foundation newsletter featuring S-CORE"
summary = "By Valerie Hasler and Memsud Godinjak."
action_label = "Read more"
action_url = "https://newsroom.eclipse.org/eclipse-newsletter/2025/september/eclipse-s-core-new-approach-building-automotive-software-together"
external = true
+++
