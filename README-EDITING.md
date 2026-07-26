# How to Edit & Update Your Portfolio Content

This portfolio is built with a **single-file content repository** located at `src/data/content.ts`. You do NOT need to edit HTML, layout, or animation code to update text, certificates, or projects.

---

## 1. Updating Text, Projects & Certificates (Single File)

Open `src/data/content.ts` in your code editor.

### To Add a New Certificate:
1. Save your certificate image file in the `public/certificates/` folder (e.g., `public/certificates/my-new-cert.jpg`).
2. Open `src/data/content.ts` and add a new object to the `certifications` array:

```ts
{
  id: "cert-10",
  title: "Full Stack Web Development",
  issuer: "Udemy / Meta",
  date: "Dec 2026",
  category: "Web Development",
  imagePath: "/certificates/my-new-cert.jpg",
}
```
The certificate gallery grid and Lightbox modal preview update automatically!

---

### To Add a New Project:
Add an object to the `projects` array in `src/data/content.ts`:

```ts
{
  id: "my-project",
  title: "AI Image Generator",
  valueProposition: "Generate high resolution assets using diffusion models.",
  highlights: [
    "Integrated text-to-image API",
    "Responsive canvas interface",
  ],
  techStack: ["Python", "Next.js", "Tailwind"],
  liveUrl: "https://my-demo-link.com",
  repoUrl: "https://github.com/username/my-repo",
}
```

---

## 2. Replacing Profile Photo & PDF Documents

- **Profile Photo**: Save your picture as `profile.jpg` in `public/images/profile.jpg`.
- **Resume PDF**: Save your resume as `resume.pdf` in `public/documents/resume.pdf`.
- **Certificates PDF**: Save a combined certificates PDF as `certificates.pdf` in `public/documents/certificates.pdf`.

---

## 3. Live Browser Edits & LocalStorage Caveat

### How Live Editing Works:
- **Profile Photo (`/profile`)**: Click the camera icon on the photo to upload a new picture from your device. It updates instantly across all pages.
- **Education (`/education`)**: Click **"Edit Entries"** to edit degree titles, institution names, or add/remove entries inline. Click **"Save Changes"** to save.

### Important Note on Browser Storage:
- Edits made through the browser UI are saved to that browser's `localStorage`. They persist for you on that device across refreshes and tab closes.
- **To make your edits permanent for all public visitors on Vercel or Netlify**:
  1. Click **"Export JSON"** on the `/education` page to download your edited data file.
  2. Copy the exported array and paste it into `src/data/content.ts`.
  3. Commit and deploy.
- *Note*: Multi-device real-time syncing for all visitors globally would require connecting a cloud database (e.g. Supabase, Vercel KV, or Firebase).
