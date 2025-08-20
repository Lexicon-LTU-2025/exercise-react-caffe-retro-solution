# Exercise: Caffe Retro Solution – React Edition

Now it’s time to revisit the **Caffe Retro** exercise – but this time, you’ll build it using **React**.

👉 If you haven’t done the original version yet, or if you need a refresher, you can find the HTML/CSS version here:
**[Original Caffe Retro – HTML/CSS version](https://github.com/Lexicon-LTU-2025/exercise-html-css-caffe-retro)**

## Goal

You are going to **recreate the same website** using **React**. The visual design and functionality should be the same, but now you’re expected to apply a **React mindset**:

- **Think in components**: split the UI into meaningful, reusable parts (e.g. `Nav`, `Section`, `Header`, etc).
- **Use props** to pass data between components when needed.
- Use semantic HTML inside your React components.
- **Keep your code clean and organized** – folder structure matters.
- **Reusability is key** – avoid duplicating similar markup across the app.

## Instructions

The core **requirements remain the same** as in the original assignment. That means:

- Three full-screen sections: **Hot**, **Juice**, and **Cozy**.
- A fixed top **navigation bar** linking to each section.
- **Background images** that fully cover each section.
- **Semantic HTML**, **responsive design**, and **basic accessibility** must be respected.
- Use only assets provided in the `assets` folder – no custom fonts or images.

But this time, it’s your job to **interpret those instructions through React**.

## Public folder

In Vite, the **`public/`** folder is special: everything placed inside it will be copied **as-is** to the root of your project when you build. That means no hashing, no optimization, and the files keep their original names and paths.

This makes the `public/` folder useful when you want **fixed URLs** or when you want to **emulate fetching data from a backend**. For example, if you place a `data.json` file inside `public/`, you can fetch it just like you would from a real API:

```tsx
useEffect(() => {
  fetch('/data.json')
    .then((res) => res.json())
    .then((data) => setSections(data));
}, []);
```

This way, your React app can read structured data (like section content) without hardcoding it in the codebase — a good first step toward working with real APIs and databases.

### `public/` vs `src/assets/`

| Image location    | Example in code                                                               | What happens at build                                                                                 | When to use                                                                  |
| ----------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| **`public/`**     | `<img src="/hot.jpg" alt="Hot" />`                                            | File is copied **as-is**; **no hashing**, same URL (`/hot.jpg`).                                      | Fixed URLs, global/static files, JSON data to fetch, favicons, robots.txt.   |
| **`src/assets/`** | `jsx<br/>import hot from './assets/hot.jpg';<br/><img src={hot} alt="Hot" />` | Processed by Vite; file gets a **hashed name** (e.g. `/assets/hot.abc123.jpg`) for **cache-busting**. | Component-scoped assets that should be optimized and versioned with the app. |

In this solution, I use `public/data.json` and `public/links.json` to **emulate a backend fetch**, and background images can also be referenced from `public/` (e.g. `/hot.jpg`).
