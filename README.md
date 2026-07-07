# The BioChem Chronicles

The BioChem Chronicles is a static science communication and project portfolio website by Avanthika Ashokkumar, A raising sophomore at Rutgers University, New Brunswick, planning to study Biotechnology specialization, Bioinformatics with a double major in Chemical Data Science.

The site documents student-built Arduino prototypes, environmental monitoring projects, assistive technology ideas, and planned bioinformatics learning. It is designed for GitHub Pages, professor outreach, LinkedIn, internship applications, and scholarship opportunities.

## Live Demo

```txt
https://avanthikaashokkumar.github.io/biochem-chronicles/
```

## Screenshot

Add a screenshot after deployment:

```txt
assets/images/site-screenshot.png
```

## Features

- Polished homepage with About, Projects, Articles, 3D Explainers, Skills, For Mentors, and Contact sections
- Real article pages for every homepage article card
- Searchable and filterable `articles.html` page
- Local custom SVG diagrams with alt text
- Project cards with materials, tools, skills, status, and honesty notes
- CSS-based 3D-style explainers that work without external models
- Downloadable one-page project summary PDFs
- Accessibility basics: skip link, keyboard focus, semantic headings, alt text, reduced motion support
- Performance basics: local assets, lazy-loaded card images, minimal JavaScript, no framework
- GitHub Pages friendly relative paths

## File Structure

```txt
biochem-chronicles/
├── index.html
├── articles.html
├── styles.css
├── script.js
├── favicon.svg
├── README.md
├── CHANGELOG.md
├── LICENSE
├── assets/
│   ├── images/
│   │   └── ATTRIBUTIONS.md
│   ├── models/
│   │   └── README.md
│   ├── summaries/
│   │   └── project summary PDFs
│   └── diagrams/
│       └── custom SVG diagrams
└── articles/
    ├── biochem-chronicles-introduction.html
    ├── soil-moisture-meter.html
    ├── diy-thermal-gun.html
    ├── blood-oxygen-heart-rate-monitor.html
    ├── automatic-pill-dispenser.html
    ├── weather-station.html
    ├── air-quality-monitor.html
    └── smart-walking-stick.html
```

## How to Run Locally

No installation is required.

```bash
cd biochem-chronicles
python3 -m http.server 8000
```

Open:

```txt
http://localhost:8000
```

You can also open `index.html` directly in a browser, but a local server is better for testing paths.

## How to Deploy on GitHub Pages

1. Create a GitHub repository named `biochem-chronicles`.
2. Upload all files and folders from this project to the repository root.
3. Go to `Settings > Pages`.
4. Under Build and deployment, choose `Deploy from a branch`.
5. Select the `main` branch and `/ (root)` folder.
6. Save and wait for GitHub Pages to publish.
7. Use the published link in LinkedIn, resumes, and professor outreach.

## Technologies Used

- HTML
- CSS
- JavaScript
- SVG
- GitHub Pages

## Article Page Structure

Every article page includes:

- Title and metadata
- Breadcrumbs
- Custom hero diagram
- Materials and tools
- Project overview
- Problem being solved
- Why I built it
- How it works
- Build process
- Calibration or testing
- Challenges
- What I learned
- Future improvements
- Safety or accuracy note
- Related projects
- Previous and next navigation
- Downloadable one-page summary

## How to Add a New Article

1. Add a new HTML file inside `articles/`.
2. Add a matching SVG diagram inside `assets/diagrams/`.
3. Add a matching summary PDF inside `assets/summaries/`.
4. Add the article object to `ARTICLE_DATA` in `script.js`.
5. Add the project object to `PROJECT_DATA` if it should appear in the Projects section.
6. Test links from `index.html`, `articles.html`, and the article page.

## How to Add a New 3D Model

The current version uses CSS-based 3D-style diagrams to avoid broken model links. To add real models later:

1. Add `.glb` files to `assets/models/`.
2. Add the model-viewer script to the page.
3. Replace the CSS model area in `renderExplainers()` with a `<model-viewer>` element.
4. Keep the text fallback so the explainer still works if a model fails to load.

## Image Attribution Rules

This version uses original SVG diagrams only. If future photos are added:

- Use original photos, Wikimedia Commons, Unsplash, Pexels, Openverse, or public domain assets only.
- Do not use random Google Images results.
- Save images locally in `assets/images/`.
- Add source, creator, license, and attribution details to `assets/images/ATTRIBUTIONS.md`.
- Add meaningful alt text to every image.

## Future Improvements

- Add real project photos after clean documentation photos are taken.
- Add public GitHub repositories for each Arduino build.
- Add simple charts from sensor readings.
- Add beginner-friendly code snippets inside each article.
- Add a bioinformatics project section after the work has actually started.

## Resume Bullet

Designed and built The BioChem Chronicles, a static science communication portfolio using HTML, CSS, JavaScript, SVG diagrams, and GitHub Pages to document Arduino-based biosensor, assistive technology, and environmental monitoring prototypes with clear project writeups and accessibility-conscious design.

## License Note

The website code is released under the MIT License. Project text and diagrams may be reused with attribution unless a future license states otherwise.


## Latest feedback fixes

- Flow diagrams fit inside article cards without horizontal scrolling.
- The 3D Explainers section now uses larger local material setup visuals with clickable parts.
- The contact section states that the best way to reach Avanthika is via email.
- The logo uses an AA triangle mark with connected nodes.
- The For Mentors navigation tab and section have darker contrast.
