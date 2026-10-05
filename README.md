# Eclipse S-CORE Website

This repository contains the source for the public [Eclipse S-CORE project website](https://eclipse.dev/score/). Eclipse S-CORE is an open automotive software platform for software-defined vehicles; this repository contains its website content, Hugo layouts, styles, scripts, and image assets.

The site is built with [Hugo](https://gohugo.io/) **0.144.2 Extended**.

## Prerequisites

Install Docker. The commands below use the same versioned Hugo image as the website's CI workflows:

```text
eclipsefdn/hugo-node:h0.144.2-n22.14.0
```

Run commands from the root of this repository.

## Preview locally

Start the Hugo development server in Docker:

```bash
docker run --rm -it \
  -v "$PWD:/src" \
  -w /src \
  -p 1313:1313 \
  eclipsefdn/hugo-node:h0.144.2-n22.14.0 \
  hugo server --bind 0.0.0.0 --port 1313 --appendPort=false \
    --baseURL=http://localhost:1313/
```

Open <http://localhost:1313/>. Stop the server with `Ctrl+C`.

## Build the website

Build the production site with its `/score/` base path:

```bash
docker run --rm \
  -v "$PWD:/src" \
  -w /src \
  eclipsefdn/hugo-node:h0.144.2-n22.14.0 \
  hugo --minify --baseURL=https://eclipse.dev/score/
```

Hugo writes the generated static site to `public/`. That directory is generated output and is ignored by Git; edit the source files instead.

For an isolated build that does not write into the repository, set a destination such as `/tmp/s-core-site` inside the container. To access that output after the container exits, mount the destination from the host as well.

## Where to make changes

- `content/`: page copy and structured page data, primarily in Markdown front matter.
- `layouts/`: Hugo page templates and reusable partials.
- `static/css/`: site-wide and page-specific stylesheets.
- `static/js/`: page behavior such as navigation and interactive components.
- `static/images/`: logos, illustrations, icons, and other website assets.
- `config.toml`: site metadata, navigation menus, and Hugo configuration.

The shared Stay Connected content is in `content/stay-connected.md`; it is rendered on multiple pages and is not published as a standalone page. Hero images and other assets are referenced from Markdown front matter or layouts. Keep existing assets when adding a replacement that should remain available as a fallback.

## Contributing

1. Fork `eclipse-score/eclipse-score-website` on GitHub.
2. Create a branch for your change.
3. Make and preview the change locally, then run the production build above.
4. Commit and push the branch to your fork.
5. Open a pull request against the upstream repository.

Pull requests can receive a temporary website preview through the repository's GitHub Actions workflow. The preview is for review and does not publish the official site.

## Publishing

A push to a personal fork does **not** publish the official Eclipse S-CORE website. In the upstream repository, GitHub Actions builds pull requests for preview. Publishing is configured for builds of the upstream `main` branch and sends the generated site to the Eclipse S-CORE published-website repository. Merging a pull request is therefore subject to the upstream project's review and deployment permissions.

## License

See [LICENSE](LICENSE) and [NOTICE](NOTICE) for licensing and attribution information.
