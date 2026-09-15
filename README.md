# Frontend Developer Portfolio

A separate, static portfolio site for presenting the existing frontend projects in this workspace. It does not import or modify any existing project.

## Run locally

Open `index.html` directly in a browser, or serve the folder with any static file server:

```bash
cd portfolio
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Personalization checklist

Edit the following values in `script.js`:

- `placeholderGithub`: replace with the correct GitHub URL for each project.
- `placeholderDemo`: replace with the correct live demo URL for each project.
- Each project's `githubUrl` and `liveUrl` can be customized independently.
- `description`, `technologies`, and `type` contain the portfolio copy.
- `preview` selects the built-in CSS preview for each project.

Edit the following values in `index.html`:

- The `YOUR_EMAIL@example.com` text and `mailto:` value in the contact section.
- The LinkedIn URL containing `REPLACE_WITH_PROFILE`.
- The GitHub profile URL containing `REPLACE_WITH_USERNAME`.
- The `DD` brand initials.
- The page title and meta description.
- The Experience section values if your role, company, tenure, or responsibilities change.

The Selected Professional Work section is defined in `script.js` as `professionalProjects`. Each entry contains the supplied title, description, technologies/tools, contribution, and live website URL. Its links are rendered to open in a new tab.

The Email Development section is a dedicated personal project feature in `index.html`. Its content is based on the verified `davidisaac22/email-portfolio` repository, which contains HTML and MJML newsletter/promotional templates, table-based layouts, responsive rules, inline/embedded CSS, Outlook/MSO considerations, organized campaign assets, and screenshots. It links to the repository only and does not present the templates as client work.

## Screenshots

No project screenshot files were present in the inspected project folders. The portfolio therefore uses lightweight CSS previews based only on the actual interfaces and features. To use real screenshots, add image files under `portfolio/assets/`, then replace the relevant preview markup in `script.js` with an image element and update the corresponding styles.

The professional-work cards use a clean production-project visual treatment rather than invented screenshots. Live-site screenshots can be added later only after confirming that the source websites can be captured and used appropriately.
