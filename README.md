**Project Title**: Honest Hotel?

A client-side interactive game built with plain HTML, CSS and JavaScript. The project's primary aim is to compare AI-generated and human-written hotel reviews across 10 nationwide languages, identifying notable cross-cultural linguistic differences between real and generated content. The app is a multi-page static web game (instructor/student views) with scoring handled by `score.js` and HTML pages that present language-specific questions, overview of research paper, and score summaries.

---

**Project snapshot**

Vercel deployed link: https://hotel-by-bot-tellgame-app.vercel.app/
Paper link: 
Code & Database link: https://github.com/MichiganNLP/multilingual_reviews_deception/tree/master/data
Frontend: static HTML + CSS (no framework). Minimal dev tooling via http-server for local hosting.

---

**Features & Functionality**
- Multi-page game flow across `index.html` and per-level pages (Page2.html ... Page9.html).
- Multilingual question sets for: English, Chinese, Spanish (see folder mapping below). 
- Client-side scoring managed by `score.js` and displayed in `ScorePage.html`.
- Static assets organized under `images/`.
- Designed to be hostable on any static-file host (Vercel, Netlify, GitHub Pages).

---

**Tech Stack**
- HTML5 for markup
- CSS for styling (inline or separate files depending on pages)
- JavaScript (vanilla) for client-side logic (`score.js`)
- No backend required—static site

---

**System Architecture / Workflow Overview**

- Intro page —> Game hint page —> Language selection page —> static HTML question pages + `score.js` → in-memory scoring → `ScorePage.html` displays final results.
- There is no server-side processing; all state is stored in-browser while playing the session (e.g., local variables or sessionStorage if implemented).

---

**Folder Structure**

```
root/
├─ index.html                # Game entry page
├─ Page2.html .. Page9.html  # Game content pages
├─ Page5.html .. Page9.html   # English questions 
├─ PageC5.html .. PageC9.html # Chinese questions (C = Chinese)
├─ PageS5.html .. PageS9.html # Spanish questions (S = Spanish)
├─ Page<any>t.html            # 't' suffix = page shown when an answer is correct (true)
├─ Page<any>f.html            # 'f' suffix = page shown when an answer is incorrect (false)
├─ InfoPage.html              # More information about Research Paper
├─ ScanPage.html              # Research Paper QR code
├─ ScorePage.html             # Final score summary
├─ score.js                   # Scoring logic
├─ images/                    # Images and screenshot assets
```

---

**How to run locally**

Quick (open locally)
- Open `index.html` directly in a browser (double-click or use file → open).

---

**Deployment (Vercel)**

This repository is static and is well-suited to be deployed on Vercel as a static site.

Steps to deploy:

Push the repository to GitHub
Sign in to Vercel and click Import Project → Import Git Repository → select this repo.
Configure project settings:
Framework: Other / Static Site
Build Command: (leave empty)
Output Directory: / (root)
Click Deploy. Vercel will serve the static files directly.
Optional: set a custom domain and add analytics or environment variables from the Vercel dashboard.

---

**Future Improvements / Roadmap**
- Centralize CSS into a single stylesheet for consistent theming.
- Add exit button to each page that directly connects it to the menu page.
- Add CI/CD pipeline to auto-deploy on push (Vercel/GitHub Actions).

---