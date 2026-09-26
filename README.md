# 💪 FitLog — Workout Library

> **Train with intent. Log every set.**

FitLog is a modern, dark-themed workout library and planning application built to make discovering, organizing, and tracking workouts simple.

Browse workouts, view detailed exercise information, add up to five workouts to today's plan, save workouts for later, and keep your plan persistent across page reloads.

## 🚀 Live Demo

### 🌐 [Open FitLog](https://fit-log-seven-sand.vercel.app/)

**Production:**
https://fit-log-seven-sand.vercel.app/

### 💻 GitHub Repository

**[View Source Code](https://github.com/arponganapati7-byte/Fit-Log)**

---

## ✨ Features

### 🏋️ Workout Library

Browse a collection of workouts covering major muscle groups.

Each workout includes information such as:

* Exercise name
* Category
* Equipment
* Difficulty
* Sets
* Reps
* Duration
* Calories
* Rating

The current library contains **12 workouts**.

### 📋 Today's Plan

Build your daily workout plan by adding exercises from the library.

* Maximum of **5 workouts** in today's plan
* Add workouts directly from workout details
* Remove workouts
* Mark workouts as completed
* View live exercise, duration, and calorie metrics

### 🔖 Save for Later

Save workouts you want to revisit later.

Saved workouts have their own list and navbar counter.

### 🔎 Workout Details

Every workout has a dedicated details page with:

* Equipment information
* Difficulty
* Sets and reps
* Duration
* Calories
* Rating
* Step-by-step instructions

### 🔄 Sorting

The workout library can be reordered using workout statistics such as:

* Duration
* Calories
* Rating

### 💾 Persistent Data

FitLog uses **Context API + localStorage** to preserve workout-plan and saved-workout data across page reloads.

### 🔔 Toast Notifications

Instant feedback is displayed when users:

* Add a workout
* Save a workout
* Complete a workout
* Remove a workout

### 📱 Responsive Design

FitLog is designed for:

* 📱 Mobile
* 📲 Tablet
* 💻 Desktop

### ❌ Custom 404 Page

Invalid routes are handled with a custom not-found experience.

---

# 🛠️ Tech Stack

| Technology       | Purpose                           |
| ---------------- | --------------------------------- |
| **Next.js 16**   | Application framework and routing |
| **React**        | UI and component architecture     |
| **TypeScript**   | Type safety                       |
| **Tailwind CSS** | Styling and responsive design     |
| **Lucide React** | Interface icons                   |
| **Context API**  | Global application state          |
| **localStorage** | Client-side persistence           |
| **Turbopack**    | Next.js development/build tooling |
| **Vercel**       | Production deployment             |

The repository uses the Next.js App Router, React, Tailwind CSS, Lucide React, Context API/localStorage, and Vercel.

---

# 📁 Project Structure

```text
Fit-Log/
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   │
│   ├── my-plan/
│   │   └── page.tsx
│   │
│   └── workout/
│       └── [id]/
│           └── page.tsx
│
├── components/
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── Providers.tsx
│   ├── WorkoutCard.tsx
│   └── WorkoutGrid.tsx
│
├── context/
│   └── FitlogContext.tsx
│
├── lib/
│   └── api.ts
│
├── public/
│
├── types/
│   └── workout.ts
│
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

---

# 🧭 Application Routes

| Route           | Description                |
| --------------- | -------------------------- |
| `/`             | Workout library            |
| `/workout/[id]` | Individual workout details |
| `/my-plan`      | Today's workout plan       |
| `/_not-found`   | Custom 404 page            |

---

# ⚙️ Getting Started

## Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/)
* npm
* Git

Check your installed versions:

```bash
node --version
npm --version
git --version
```

---

## 📥 Installation

Clone the repository:

```bash
git clone https://github.com/arponganapati7-byte/Fit-Log.git
```

Enter the project directory:

```bash
cd Fit-Log
```

Install dependencies:

```bash
npm install
```

---

# ▶️ Run Locally

Start the development server:

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:3000
```

The development server supports hot reload, so changes made to the source code will appear automatically.

---

# 🏗️ Production Build

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

The production build should complete successfully before deployment.

---

# 📜 Available Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Create an optimized production build |
| `npm start`     | Start the production server          |
| `npm run lint`  | Run linting when configured          |

---

# 🧩 Application Architecture

## Context

```text
context/FitlogContext.tsx
```

The FitLog context manages application-wide workout state.

It handles:

* Today's plan
* Saved workouts
* Adding workouts
* Removing workouts
* Checking saved status
* Checking plan status
* Completing workouts

---

## Workout Types

```text
types/workout.ts
```

Workout data is represented using TypeScript interfaces to provide consistent type checking throughout the application.

---

## API Layer

```text
lib/api.ts
```

API-related functionality is separated from the UI layer to keep components easier to maintain.

---

## Components

Reusable interface components are organized inside:

```text
components/
```

This includes the navigation, footer, workout cards, workout grid, and provider components.

---

# 💾 Data Persistence

FitLog uses browser `localStorage` to preserve user-selected workout information.

This means that the following data can remain available after a page reload:

```text
Today's Plan
Saved Workouts
```

No account is required for this client-side functionality.

---

# 🚀 Deployment

FitLog is deployed on **Vercel**.

### Production URL

**https://fit-log-seven-sand.vercel.app/**

### Deployment Repository

**https://github.com/arponganapati7-byte/Fit-Log**

The project can be connected to the GitHub repository so that future changes can be deployed through Vercel's Git integration.

---

# 🔄 Deployment Workflow

A typical development workflow is:

```text
Write Code
    ↓
Test Locally
    ↓
npm run build
    ↓
git add .
    ↓
git commit
    ↓
git push
    ↓
GitHub
    ↓
Vercel Deployment
```

---

# 🧪 Production Build Verification

The application has been successfully verified with:

```bash
npm run build
```

The build completed successfully through:

```text
✓ Compiled successfully
✓ Finished TypeScript
✓ Collecting page data
✓ Generating static pages
✓ Finalizing page optimization
```

Production routes include:

```text
/
 /my-plan
 /workout/[id]
 /_not-found
```

---

# 🔐 Environment Variables

If environment variables are introduced in the future, use a local:

```text
.env.local
```

Example:

```env
NEXT_PUBLIC_API_URL=your_api_url
```

Never commit private API keys, secrets, or `.env.local` to GitHub.

For Vercel deployments, production environment variables should be configured through the Vercel project settings.

---

# 📱 Responsive Experience

FitLog is designed to provide a consistent experience across:

* Mobile phones
* Tablets
* Laptops
* Desktop monitors

The interface uses responsive Tailwind CSS utilities to adapt the layout to different screen sizes.

---

# 🔮 Future Improvements

Possible future features include:

* [ ] User authentication
* [ ] Personal workout creation
* [ ] Workout history
* [ ] Progress tracking
* [ ] Strength progression charts
* [ ] Advanced filtering
* [ ] Search functionality
* [ ] Workout categories
* [ ] Custom routines
* [ ] Cloud synchronization
* [ ] Personal statistics dashboard
* [ ] Dark/light theme options

---

# 🤝 Contributing

Contributions and improvements are welcome.

## 1. Fork the repository

Create your own fork of the project on GitHub.

## 2. Clone your fork

```bash
git clone https://github.com/arponganapati7-byte/Fit-Log.git
```

## 3. Create a feature branch

```bash
git checkout -b feature/your-feature
```

## 4. Install dependencies

```bash
npm install
```

## 5. Run the project

```bash
npm run dev
```

## 6. Make your changes

Implement and test your feature.

## 7. Verify the production build

```bash
npm run build
```

## 8. Commit your changes

```bash
git add .
git commit -m "Add your feature"
```

## 9. Push your branch

```bash
git push origin feature/your-feature
```

Then create a Pull Request on GitHub.

---

# 👨‍💻 Author

## Ashim Ganapati

**FitLog — Workout Library**

Built with:

* Next.js
* React
* TypeScript
* Tailwind CSS
* Lucide React
* Vercel

---

# 🔗 Project Links

| Resource                   | Link                                           |
| -------------------------- | ---------------------------------------------- |
| 🌐 **Live Website**        | https://fit-log-seven-sand.vercel.app/         |
| 💻 **GitHub Repository**   | https://github.com/arponganapati7-byte/Fit-Log |
| 🚀 **Deployment Platform** | https://vercel.com/                            |

---

# ⭐ Support the Project

If you find FitLog useful or interesting, consider giving the repository a ⭐ on GitHub.

Your feedback, suggestions, and contributions are welcome.

---

<div align="center">

### 💪 FITLOG

**Train with intent. Log every set.**

[🌐 Live Demo](https://fit-log-seven-sand.vercel.app/) · [💻 GitHub](https://github.com/arponganapati7-byte/Fit-Log)

</div>
