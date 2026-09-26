# 💪 FitLog — Workout Library

A dark, no-nonsense gym companion. Browse twelve lifts, lock up to five into
today's plan, save others for later, and watch your daily minutes and calories
add up live.

## 🛠️ Technologies Used
- **Next.js (App Router)** — routing, pages, layouts
- **React** — UI components & hooks
- **Tailwind CSS** — styling & responsive design
- **Lucide React** — icons
- **Context API + localStorage** — global state that survives reloads
- **Vercel** — deployment

## ✨ Key Features
1. **Workout Library** — 12 lifts fetched from a live API in a responsive 3×4 grid with tags, equipment and stats.
2. **Workout Details** — full spec sheet (equipment, difficulty, sets, reps, duration, calories, rating) plus step-by-step instructions.
3. **Today's Plan (cap of 5)** — add lifts, mark them done, or remove them; live Exercises / Minutes / Calories metrics.
4. **Save for Later** — a separate saved list with its own navbar badge counter.
5. **Toast Notifications** — instant feedback on every add / save / done / remove action.
6. **Sort Controls** — re-order the library by Duration, Calories, or Rating.
7. **Persistence** — plan and saved lists survive page reloads via localStorage.
8. **Fully Responsive + 404** — works on mobile, tablet and desktop, with a custom not-found page.

## 🚀 Live Link
https://your-vercel-link.vercel.app

## 💻 Run Locally
\`\`\`bash
npm install
npm run dev
\`\`\`