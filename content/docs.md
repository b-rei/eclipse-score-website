+++
title = "Documentation"
description = "A guide to the documentation behind Eclipse S-CORE: where it lives, how the repositories fit together, and where to go next."
type = "docs"
layout = "single"
active_nav = "docs"
stage_eyebrow = "DOCUMENTATION GUIDE"
stage_title = "Explore the S-CORE documentation"
stage_description = "S-CORE is built across multiple repositories. This guide explains which documentation lives where and helps you find the right path for your work."

[start]
eyebrow = "A GOOD PLACE TO BEGIN"
title = "New to S-CORE? Start with the User’s Guide."
description = "Get oriented with the platform, learn its key concepts, and follow a practical path to building your first application."
label = "Open the User’s Guide"
href = "https://eclipse-score.github.io/score/main/users_guide/index.html"

[repository_map]
eyebrow = "HOW THE PROJECT IS ORGANIZED"
title = "Documentation follows the work"
description = "There is no single repository that contains every implementation detail. Documentation is maintained alongside the project area it describes, while reference integration documents how the pieces work together."

[[repository_map.repositories]]
name = "S-CORE platform"
role = "Platform concepts, architecture, features, requirements, user guidance, and project plans."
label = "Browse platform docs"
href = "https://eclipse-score.github.io/score/main/"

[[repository_map.repositories]]
name = "Module repositories"
role = "Module-specific implementation guidance and details live with the repositories that own those modules."
label = "Explore S-CORE repositories"
href = "https://github.com/eclipse-score"

[[repository_map.repositories]]
name = "Reference integration"
role = "The cross-repository integration baseline brings modules together and documents integration status, workflows, and releases."
label = "Open reference integration"
href = "https://github.com/eclipse-score/reference_integration"

[[doc_sections]]
title = "Understand the platform"
nav_label = "Platform"
description = "Explore S-CORE’s architecture, capabilities, and requirements."

[[doc_sections.links]]
title = "Platform architecture"
description = "See how the platform is structured and how its building blocks interact."
label = "Read architecture docs"
href = "https://eclipse-score.github.io/score/main/architecture/index.html"

[[doc_sections.links]]
title = "Features and interfaces"
description = "Explore platform features and the logical interfaces that connect them."
label = "Browse features"
href = "https://eclipse-score.github.io/score/main/features/index.html"

[[doc_sections.links]]
title = "Requirements"
description = "Review stakeholder needs and the assumptions that shape the platform."
label = "Read requirements"
href = "https://eclipse-score.github.io/score/main/requirements/index.html"

[[doc_sections]]
title = "Contribute and understand the process"
nav_label = "Contribute"
description = "Find contributor guidance and learn how project work is planned and reviewed."

[[doc_sections.links]]
title = "Contribute to S-CORE"
description = "Learn the contribution workflow, expectations, and ways to participate."
label = "Open contributor guide"
href = "https://eclipse-score.github.io/score/main/contribute/index.html"

[[doc_sections.links]]
title = "Process areas"
description = "Find process requirements, guidance, workflows, and work products."
label = "Browse process docs"
href = "https://eclipse-score.github.io/process_description/main/process_areas/index.html"

[[doc_sections.links]]
title = "Project and safety plans"
description = "Understand project organization and the plans for safety and verification."
label = "Read platform plans"
href = "https://eclipse-score.github.io/score/main/platform_management_plan/index.html"

[[doc_sections]]
title = "Releases and integration"
nav_label = "Releases & integration"
description = "Check what has been released and how modules are validated together."

[[doc_sections.links]]
title = "Releases and roadmap"
description = "Review release information and the platform’s published release direction."
label = "View releases"
href = "https://eclipse-score.github.io/score/main/score_releases/index.html"

[[doc_sections.links]]
title = "Integration status"
description = "Check the current state of the integrated platform baseline."
label = "View status dashboard"
href = "https://eclipse-score.github.io/reference_integration/main/status_dashboard.html"

[[doc_sections.links]]
title = "Integration process"
description = "Learn how platform modules are brought together and validated."
label = "Read integration process"
href = "https://eclipse-score.github.io/reference_integration/main/integration_process/integration_process.html"

[[doc_sections]]
title = "Tools and infrastructure"
nav_label = "Tools"
description = "Find information about the build, test, documentation, and CI tooling."

[[doc_sections.links]]
title = "Infrastructure and tooling"
description = "Explore the infrastructure behind S-CORE development, builds, tests, and CI."
label = "Read infrastructure docs"
href = "https://eclipse-score.github.io/infrastructure/dev/index.html"

[[doc_sections.links]]
title = "S-CORE tools"
description = "Find guidance on tools and workflows used across the platform."
label = "Browse tool documentation"
href = "https://eclipse-score.github.io/score/main/score_tools/index.html"

[[doc_sections.links]]
title = "C++ Bazel toolchain"
description = "Explore the hermetic C++ toolchain used across S-CORE modules."
label = "Open C++ toolchain repository"
href = "https://github.com/eclipse-score/bazel_cpp_toolchains"

[[doc_sections.links]]
title = "Rust toolchains"
description = "Explore the Rust toolchains used to build S-CORE modules."
label = "Open Rust toolchain repository"
href = "https://github.com/eclipse-score/toolchains_rust"
+++
