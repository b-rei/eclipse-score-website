+++
title = "About Eclipse S-CORE"
description = "Meet the people, goals, governance, and communities building Eclipse S-CORE in the open."
type = "about"
layout = "single"
active_nav = "about"
extra_scripts = ["js/about-members.js", "js/about-voices.js"]

[about_hero]
eyebrow = "ABOUT ECLIPSE S-CORE"
headline = ["One open core.", "Built together."]
description = "We unite automotive experts, technology partners, developers, and innovators to build an open, safe, and scalable foundation for vehicle software."
image = "images/about-us/hero-automotive-platform-original.svg"
image_alt = "A low, left-facing automotive coupe with connected vertical software signal lines."

[[about_hero.links]]
label = "Our mission"
href = "#targets"
style = "primary"

[[about_hero.links]]
label = "Join the community"
href = "#communities"
style = "secondary"

[built_open]
eyebrow = "BUILT IN THE OPEN"
heading = ["Shared work.", "Shared progress."]
paragraph = "Eclipse S-CORE is developed collaboratively under the Eclipse Foundation. Member organizations contribute to a common codebase, align on transparent processes, and build reusable automotive software together."
member_heading = "Active contributors in the past 3 months"
member_loading = "Loading current member organizations…"
member_error = "Member organizations are provided by the Eclipse Foundation."
member_total = "More than 35 organizations have contributed to Eclipse S-CORE so far."

[commitment]
eyebrow = "COMMITMENT & BACKING"
heading = "Committed organizations, industry-wide support"
engagement_heading = "Eclipse S-CORE Engagement Program"
engagement_paragraph = "The program recognizes organizational participation and commitment through Silver, Gold, and Platinum levels. Each level has defined contributor requirements and recognition. Platinum also offers eligibility to participate in the X-CORE Platform Council, subject to a successful application and Eclipse SDV Steering Committee approval."
engagement_link_label = "Explore levels and requirements"
engagement_url = "how_to_contribute.html#engagement-program"
engagement_participants_heading = "Acknowledged Engagement Program Organizations"

[[commitment.engagement_participants]]
level = "Platinum"
organizations = ["Accenture GmbH", "BMW Group", "ETAS GmbH", "Mercedes-Benz Tech Innovation GmbH", "Qorix GmbH"]

[[commitment.engagement_participants]]
level = "Gold"
organizations = ["Red Hat, LLC."]

[commitment.mou]
heading = "Backed by an industry-wide Memorandum of Understanding"
paragraph = "In June 2025, automotive companies signed a Memorandum of Understanding (MoU), supported by the German Association of the Automotive Industry (VDA), for cooperation in open-source software development. This development takes place in the vendor-independent environment of the Eclipse Foundation as and target e.g. the S-CORE project. By January 2026, the MoU had grown to 32 companies across the global automotive value chain, with Eclipse S-CORE at the centre of the collaboration."

[[commitment.mou.facts]]
value = "32"
label = "MoU signatories by January 2026"

[[commitment.mou.facts]]
value = "Up to 40%"
label = "Less effort for development and maintenance"

[[commitment.mou.facts]]
value = "Up to 30%"
label = "Faster time to market"

[[commitment.mou.links]]
label = "VDA press release, June 2025"
url = "https://www.vda.de/en/press/press-releases/2025/250624_PM_Automotive_industry_signs_Memorandum_of_Understanding"

[[commitment.mou.links]]
label = "VDA press release, January 2026"
url = "https://www.vda.de/en/press/press-releases/2026/260107_Automotive-innovation-through-open-collaboration--Momentum-builds-around-open-source-software-as-a-key-driver-of-efficiency-and-success"

[targets]
eyebrow = "Our Mission"
heading = "Benefits of an open and joined core"

[[targets.items]]
icon = "images/about-us/icons/speed.svg"
title = "Speed & competitiveness"
description = "Accelerate development with open-source, code-centric methods and stay competitive."
metric = "Up to 30% faster time to market"

[[targets.items]]
icon = "images/about-us/icons/reuse.svg"
title = "Efficiency & reuse"
description = "Share artefacts across development, integration, and maintenance."
metric = "Up to 40% effort reduction"

[[targets.items]]
icon = "images/about-us/icons/qualification.svg"
title = "Compatibility & qualification"
description = "A compatible, resilient stack designed for reuse across vehicle programs."
metric = "Safety-qualified to automotive standards"

[[targets.items]]
icon = "images/about-us/icons/business.svg"
title = "Business model"
description = "Create services and products around a shared open-source platform."
metric = "Opportunities for every ecosystem player"

[[targets.items]]
icon = "images/about-us/icons/ai.svg"
title = "AI enabled"
description = "X-as-code creates the basis for automation and AI-assisted delivery."
metric = "Ready for AI-assisted engineering"

[work]
eyebrow = "HOW WE WORK"
heading = "Clear ownership, open collaboration"
description = "S-CORE works in two parallel tracks. On the non-technical side, the X-CORE Platform Council provides strategy and guidance, steering the project without managing it. On the technical side, project leads, technical leads, and contributors define modules, propose requirements, and evolve the platform in open working groups."
structure_image = "images/about-us/community-structure-v2.svg"
structure_alt = "Diagram with two parallel hierarchies. Non-technical X-CORE structure: Eclipse SDV Steering Committee, X-CORE Platform Council, and Engagement Program organizations. Technical project structure: Project Leads, Technical Leads, and Eclipse S-CORE contributors working in five open working groups. The Platform Council is loosely coupled to the project through steering."

[[work.principles]]
title = "Transparent decisions"
description = "Direction is shaped in public, with proposals and outcomes visible to contributors."

[[work.principles]]
title = "Shared artefacts"
description = "Specifications, code, and development knowledge build on one another across the ecosystem."

[[work.principles]]
title = "Defined responsibilities"
description = "Council, leads, contributors, and working groups each have clear roles in their track."

[governance]
eyebrow = "PROJECT GOVERNANCE"
heading = "Two lead circles. One shared direction."
description = "Within the technical track, two circles lead the project. Project leads represent their organizations and coordinate direction, planning, and resources. Technical leads guide architecture and technical alignment. Strategic steering comes from the X-CORE Platform Council."

[[governance.groups]]
number = "01"
name = "Project Lead Circle"
short = "Project direction"
description = "Coordinates project planning, resources, and progress across the participating members."
responsibilities = ["Roadmap and planning", "Coordination", "Project health"]

[[governance.groups]]
number = "02"
name = "Technical Lead Circle"
short = "Technical direction"
description = "Guides architecture, technical decisions, and alignment with S-CORE’s goals."
responsibilities = ["Architecture and design", "Technical decisions", "Engineering alignment"]

[communities]
eyebrow = "GET INVOLVED"
heading = "Find your working group"
description = "Every S-CORE community has a focus topic. Members are welcome to join discussions and help shape the outcome."
discussion_url = "https://github.com/eclipse-score/score/discussions"
discussion_label = "Join the discussion"

[[communities.items]]
icon = "images/about-us/icons/architecture.svg"
title = "Software Architecture"
description = "Plan the overall architecture and shape upcoming platform capabilities."
href = "https://github.com/orgs/eclipse-score/discussions/categories/architecture-community"
action = "Join architecture discussion"
external = true

[[communities.items]]
icon = "images/about-us/icons/process.svg"
title = "Software Development Process"
description = "Design and improve the processes needed for a safety-certifiable stack."
href = "https://github.com/orgs/eclipse-score/discussions/categories/sw-dev-process-community"
action = "Join process discussion"
external = true

[[communities.items]]
icon = "images/about-us/icons/infrastructure.svg"
title = "Infrastructure"
description = "Build the tools, CI/CD pipelines, and shared development environment."
href = "https://github.com/orgs/eclipse-score/discussions/categories/infrastructure-community"
action = "Join infrastructure discussion"
external = true

[[communities.items]]
icon = "images/about-us/icons/testing.svg"
title = "Testing"
description = "Develop test strategy and practice to help meet S-CORE quality goals."
href = "https://github.com/orgs/eclipse-score/discussions/categories/testing-community"
action = "Join testing discussion"
external = true

[[communities.items]]
icon = "images/about-us/icons/communication.svg"
title = "Marketing & Communication"
description = "Share community outcomes and welcome more participants into S-CORE."
href = "https://github.com/orgs/eclipse-score/discussions/categories/marcom-community"
action = "Join marketing discussion"
external = true

[voices]
eyebrow = "FROM THE COMMUNITY"
heading = "Community voices"
description = "Perspectives from people helping to shape the platform."

[[voices.items]]
name = "Mike Milinkovich"
role = "Executive Director, Eclipse Foundation"
image = "images/about-us/mikem.jpg"
quote = "With S-CORE, we’re providing developers with a reliable, safety-grade runtime environment that lets the industry focus on innovation while reducing duplication of effort."

[[voices.items]]
name = "Anton Krivoborodov"
role = "Technical Project Lead, BMW"
image = "images/about-us/antonk.jpg"
quote = "With S-CORE, we can shape the future of the Safe-POSIX platform with the support of a strong open-source community."

[[voices.items]]
name = "Markus Schupfner"
role = "CEO, Qorix"
image = "images/about-us/Markus S.jpg"
quote = "S-CORE is the foundation of an open, collaborative future for automotive software. Shared challenges become shared progress."

[[voices.items]]
name = "Sven Kappel"
role = "Head of ETAS.NEXT"
image = "images/about-us/sven.jpg"
quote = "As a founding member of Eclipse S-CORE, ETAS is committed to shaping a robust platform that fosters seamless integration, sustainable development processes, and cutting-edge automotive software."

[[voices.items]]
name = "Lars Bauhofer"
role = "Product Program Manager, Qorix"
image = "images/about-us/lars.jfif"
quote = "S-CORE makes collaboration tangible. From architecture workshops to release planning, we’re actively building the stack, aligning teams, and turning code into common ground."

[[voices.items]]
name = "Dr. Nico Hartmann"
role = "CTO, Qorix"
image = "images/about-us/nico.jpg"
quote = "Contributing to S-CORE means contributing to what matters: deterministic execution, safety by design, and reusable infrastructure. We bring the middleware expertise—and we’re here to make it usable at scale."
+++