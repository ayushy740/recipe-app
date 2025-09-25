### 🍳 Recipe Ideas — React + Tailwind (Vite)

An attractive, simple UI and easy to use, responsive recipe finder for  professionals like Taylor. Enter one or more ingredients, fetch meals from TheMealDB, and browse recipe cards.



### Features
- Simple, responsive UI using Tailwind CSS
- Search by one or multiple ingredients (comma-separated)
- Loading skeletons, friendly empty and error states
- Accessible design and keyboard-friendly

### Tech Stack

- **Frontend:** React.js, JSX
- **Styling:** Tailwind CSS
- **API:** [TheMealDB](https://www.themealdb.com/api.php)
- **State Management:** React Hooks (`useState`, `useEffect`, `useMemo`)
- **Deployment Ready:** CodeSandbox / GitHub Pages 

### Project Structure

recipe-app/
├─ src/
│ ├─ App.jsx # Main app component
│ ├─ components/
│ │ ├─ Header.jsx
│ │ ├─ SearchBar.jsx
│ │ ├─ RecipesGrid.jsx
│ │ ├─ RecipeCard.jsx
│ │ ├─ LoadingSkeleton.jsx
│ │ └─ EmptyState.jsx
│ ├─ hooks/
│ │ └─ useRecipesByIngredients.jsx
│ └─ index.css # Tailwind CSS and custom styles
├─ package.json
└─ README.md

### Getting Started

**Clone the repository:**
```bash
git clone https://github.com/<username>/recipe-app.git
cd recipe-app
Install dependencies:
npm install
npm start
Open http://localhost:3000 to view it in the browser.
```

### Usage

Enter ingredients in the search bar separated by commas, e.g.,
chicken, rice, tomato then 
Click Search or press Enter then 
Recipes will appear as cards with image, title, category, and link to the meal page
If no results are found, an informative message will appear





