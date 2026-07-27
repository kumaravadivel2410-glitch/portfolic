# How to Edit & Update Your Portfolio Content

This portfolio is built with a **centralized content architecture**. You can update text, projects, certificates, and documents in two ways:
1. **Single-File Editor (`src/data/content.ts`)**: Best for permanent global updates visible to all visitors.
2. **Live Browser Edit Mode (No Code Needed)**: Edit text, add projects, add certificates, or upload a new photo directly in your browser on the live site!

---

## 1. Single-File Content Updates (`src/data/content.ts`)

Open `src/data/content.ts` in any code editor (VS Code, Notepad, etc.).

### To Add a New Certificate:
1. Drop your certificate image file into `public/certificates/` (e.g. `public/certificates/my-new-cert.jpg`).
2. Open `src/data/content.ts` and add an object to the `certifications` array:

```ts
{
  id: "cert-10",
  title: "Advanced Data Science & AI",
  issuer: "Coursera / IBM",
  date: "Dec 2026",
  category: "Data Science",
  imagePath: "/certificates/my-new-cert.jpg",
}
```
The gallery grid and full-screen Lightbox modal update automatically!

---

### To Add a New Project:
Add an object to the `projects` array in `src/data/content.ts`:

```ts
{
  id: "my-new-project",
  title: "AI Voice Assistant 2.0",
  valueProposition: "Enhanced speech recognition with custom local LLM integration.",
  highlights: [
    "Offline speech-to-text pipeline",
    "Real-time sensor data streaming",
    "Custom desktop widget interface",
  ],
  techStack: ["Python", "Next.js", "Tailwind CSS"],
  liveUrl: "https://my-demo-link.com",
  repoUrl: "https://github.com/username/my-repo",
}
```

---

## 2. Replacing Profile Photo & PDF Documents

- **Profile Photo**: Save your picture as `profile.jpg` inside `public/images/profile.jpg`.
- **Resume PDF**: Save your resume as `resume.pdf` inside `public/documents/resume.pdf`.
- **Certificates PDF**: Save a combined certificates PDF as `certificates.pdf` inside `public/documents/certificates.pdf`.

---

## 3. Live In-Browser Editing (No Redeploy Required)

You can edit content directly on the hosted, live website without opening a code editor:

- **Profile Photo (`/profile` page)**: Click the camera icon on your profile photo to pick a new picture from your device. It updates instantly across all pages and saves to your browser!
- **Projects Section (`/#projects`)**: Click **"Edit Projects"** to edit titles, value propositions, highlights, tech tags, or click **"+ Add New Project Card"** to add a new project with image upload!
- **Certifications Section (`/#certifications`)**: Click **"Edit Certifications"** to edit course names, dates, or click **"+ Add Cert"** to upload a new certificate image directly from your phone or computer!
- **Education Page (`/education`)**: Click **"Edit Entries"** to edit degree titles, institution names, or add/remove qualifications.

---

## 4. How Browser Storage Works & Exporting Edits

- Edits made via the live website UI are saved to your device's `localStorage`. They persist across page refreshes and browser tab closes.
- **To make your browser edits permanent for all public visitors on Vercel or Netlify**:
  1. Click **"Export JSON"** in the edit toolbar to download a `.json` file containing your updated array.
  2. Copy the exported array and paste it into `src/data/content.ts`.
  3. Save the file and push to GitHub — Vercel/Netlify will redeploy automatically!

*Note*: For real-time multi-device cloud syncing across all global visitors, you can connect a light database (such as Supabase, Vercel KV, or Firebase).
