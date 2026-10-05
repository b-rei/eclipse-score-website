+++
title = "Frequently Asked Questions"
description = "Answers to common questions about Eclipse S-CORE, its platform, governance, and contribution process."
type = "faq"
layout = "single"
active_nav = "faq"
extra_scripts = ["js/faq.js"]

stage_eyebrow = "FREQUENTLY ASKED QUESTIONS"
stage_title = "Frequently Asked Questions"
stage_description = "Find answers about the project, its technology, governance, and how to contribute."

[faq]
search_label = "Search questions"
search_placeholder = "Search the FAQ"
results_label = "questions"
empty_message = "No questions match your search. Try another term."

[[faq.categories]]
id = "about-governance"
title = "About S-CORE & Governance"

[[faq.categories.questions]]
question = "What is the main purpose of the S-CORE project?"
answer = "Eclipse S-CORE develops a shared, open-source software platform for onboard automotive ECUs. The platform is maintained across multiple repositories; the separate [Reference Integration](https://eclipse-score.github.io/reference_integration/main/index.html) brings modules together and verifies them as a baseline."

[[faq.categories.questions]]
question = "How is work organized across communities and feature teams?"
answer = "Communities handle cross-cutting topics such as architecture, process, infrastructure, testing, and integration. Feature Teams own specific functionality end to end, from architecture through integration testing. See the [Project Management Plan](https://eclipse-score.github.io/score/main/platform_management_plan/project_management.html#pmp-pm-communities)."

[[faq.categories.questions]]
question = "Which leadership groups steer S-CORE?"
answer = "The Project Lead Circle and Technical Lead Circle coordinate strategic and technical steering. Communities and Feature Teams organize work in their respective areas; their membership and responsibilities vary. See the [Project Management Plan](https://eclipse-score.github.io/score/main/platform_management_plan/project_management.html#pmp-pm-steering-committees)."

[[faq.categories.questions]]
question = "How is project management structured in S-CORE?"
answer = "Project and technical steering are coordinated through the Project Lead Circle and Technical Lead Circle. Communities and Feature Teams plan and carry out work, with public meetings and notes documented through project channels. The [Project Management Plan](https://eclipse-score.github.io/score/main/platform_management_plan/project_management.html) describes the current organization."

[[faq.categories.questions]]
question = "How are decisions about project leads and committers made?"
answer = "S-CORE follows Eclipse Foundation project governance. Current responsibilities and organization are described in the [Project Management Plan](https://eclipse-score.github.io/score/main/platform_management_plan/project_management.html); committer and project-lead elections follow the applicable [Eclipse Project Handbook](https://www.eclipse.org/projects/handbook/)."

[[faq.categories]]
id = "planning-operations"
title = "Planning & Project Operations"

[[faq.categories.questions]]
question = "How are releases and milestones managed within S-CORE?"
answer = "Releases baseline development activities; milestones mark scheduled project outcomes. Overall planning is coordinated by the Project and Technical Lead Circle, while teams plan their work in their project boards. See the [Project Management Plan](https://eclipse-score.github.io/score/main/platform_management_plan/project_management.html#pmp-planning-and-tracking) and current [Reference Integration releases](https://eclipse-score.github.io/reference_integration/main/s_core_v_1/releases/releases.html)."

[[faq.categories.questions]]
question = "What platforms does S-CORE use for its development processes?"
answer = "GitHub is used for source code, issues, and pull requests; Bazel is used for builds; and project documentation is generated with Sphinx-based tooling. The exact setup is documented in the [infrastructure and tooling docs](https://eclipse-score.github.io/infrastructure/dev/index.html)."

[[faq.categories.questions]]
question = "How are platform features documented?"
answer = "The `score` platform repository contains platform-level features, requirements, and architecture. Each module repository owns its module requirements, architecture, implementation, and tests. The separate [Reference Integration](https://eclipse-score.github.io/reference_integration/main/index.html) publishes consolidated integration documentation and verification information."

[[faq.categories.questions]]
question = "What is the significance of the Technical Lead?"
answer = "Technical steering is coordinated by the Technical Lead Circle together with the Project Lead Circle. Technical and project responsibilities are described in the [Project Management Plan](https://eclipse-score.github.io/score/main/platform_management_plan/project_management.html#pmp-steering-committees)."

[[faq.categories.questions]]
question = "Who is responsible for maintaining the backlog and roadmap?"
answer = "Teams plan and track their own work in GitHub Projects. The Project and Technical Lead Circle coordinate the overall top-down plan, milestones, and releases. See [Planning and Tracking in the Project Management Plan](https://eclipse-score.github.io/score/main/platform_management_plan/project_management.html#pmp-planning-and-tracking)."

[[faq.categories]]
id = "platform-technical"
title = "Platform & Technical"

[[faq.categories.questions]]
question = "Is Eclipse S-CORE suitable for 32-bit Microcontrollers?"
answer = "S-CORE targets high-performance automotive ECUs; do not assume a 32-bit microcontroller is supported. Suitability depends on the hardware, operating system, and selected modules. Check the current [platform assumptions](https://eclipse-score.github.io/score/main/requirements/platform_assumptions/index.html) and the [Reference Integration](https://eclipse-score.github.io/reference_integration/main/index.html) for supported configurations."

[[faq.categories.questions]]
question = "What programming languages are supported by S-CORE?"
answer = "S-CORE includes C++ and Rust modules. Required language standards and supported subsets can vary by module and toolchain; check the relevant module documentation and the [C++](https://github.com/eclipse-score/bazel_cpp_toolchains) and [Rust](https://github.com/eclipse-score/toolchains_rust) toolchain repositories for current details."

[[faq.categories.questions]]
question = "What kinds of feature and component requests can I submit?"
answer = "Feature Requests propose a new feature or a major feature change and follow the Feature Enhancement Proposal process. Component Requests cover changes within an existing feature and are handled with the responsible team. See the [contribution request guide](https://eclipse-score.github.io/score/main/contribute/contribution_request/index.html)."

[[faq.categories.questions]]
question = "Which information should an issue or request include?"
answer = "Use the current GitHub issue template for the request type; it defines the required information. The [Project Management Plan](https://eclipse-score.github.io/score/main/platform_management_plan/project_management.html#pmp-issues) describes common tracking fields and issue categories."

[[faq.categories.questions]]
question = "How is safety managed in the components of S-CORE?"
answer = "S-CORE publishes platform safety documentation and assumptions of use, but this does not certify a vehicle program’s final system. Integrators must assess their selected hardware, operating system, modules, and safety goals, and provide any additional verification needed. Start with the [Safety documentation](https://eclipse-score.github.io/score/main/safety/index.html) and [platform assumptions](https://eclipse-score.github.io/score/main/requirements/platform_assumptions/index.html)."

[[faq.categories.questions]]
question = "How are platform features and components integrated?"
answer = "Platform changes are tracked through GitHub issues and pull requests. The [Reference Integration](https://eclipse-score.github.io/reference_integration/main/index.html) combines selected modules and verifies them together; system integrators still need to validate their own target configuration."

[[faq.categories.questions]]
question = "What are the criteria for reporting a problem in S-CORE?"
answer = "Report bugs and propose improvements through GitHub Issues. Use the issue template that best matches the problem or request; the [contributor guide](https://eclipse-score.github.io/score/main/contribute/index.html) explains the project workflow."

[[faq.categories]]
id = "contributing"
title = "Contributing"

[[faq.categories.questions]]
question = "What is the process for submitting a feature request in S-CORE?"
answer = "Start with a Feature Request that describes the motivation, intended functionality, and requirements. New or major feature changes follow the [Feature Enhancement Proposal process](https://eclipse-score.github.io/score/main/contribute/contribution_request/feature_request.html#doc__feature_request_guideline); the current requests are tracked on the [Feature Request Board](https://github.com/orgs/eclipse-score/projects/4)."

[[faq.categories.questions]]
question = "How are contributions accepted or declined in the project?"
answer = "The Architecture Community reviews Feature Enhancement Proposals through a shepherd and Final Comment Period. The Project and Technical Lead Circle triage incoming requests for project planning; Component Requests are discussed with the responsible team. See the [contribution request guide](https://eclipse-score.github.io/score/main/contribute/contribution_request/index.html)."

[[faq.categories.questions]]
question = "How should contributors handle their Eclipse Foundation account?"
answer = "Contributors need an Eclipse Foundation account. For contributions to be attributed to an organization, use the corporate email associated with that account for Git commits and link the account to the employer. Follow the current [contribution attribution guidance](https://eclipse-score.github.io/score/main/contribute/general/contribution_attribution.html)."

[[faq.categories.questions]]
question = "Why link my Eclipse account to my employer?"
answer = "This allows eligible contributions to be attributed to the organization in project contribution reporting. The [attribution guide](https://eclipse-score.github.io/score/main/contribute/general/contribution_attribution.html) explains the account, employer, and commit-email requirements."

[[faq.categories.questions]]
question = "What documentation covers contribution requests?"
answer = "The [contribution request guide](https://eclipse-score.github.io/score/main/contribute/contribution_request/index.html) covers Feature Requests, Component Requests, and the pull request workflow."

[[faq.categories.questions]]
question = "How are contributions reviewed?"
answer = "Pull requests are reviewed by automatically assigned reviewers based on repository CODEOWNERS, and must pass the applicable checks before merge. See the [pull request guidance](https://eclipse-score.github.io/score/main/contribute/contribution_request/index.html#what-is-a-pull-request-pr)."

+++
