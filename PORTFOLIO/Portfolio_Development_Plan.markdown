# Portfolio Development Plan with MERN Stack

This guide outlines the steps to build a portfolio web application using the MERN stack, including a hidden admin route for managing projects and content. The focus is on implementing authentication, full CRUD operations, and core MERN concepts.

## Step 1: Project Setup
- **Initialize the Project Structure**
  - Create a project folder (e.g., `portfolio`).
  - Inside, create two subfolders: `client` (React frontend) and `server` (Node.js/Express backend).
- **Set Up Node.js and Express Backend**
  - Navigate to the `server` folder in the terminal.
  - Run `npm init -y` to create a `package.json`.
  - Install dependencies: `npm install express mongoose dotenv cors bcryptjs jsonwebtoken`.
  - Create a `.env` file for environment variables (e.g., MongoDB URI, JWT secret).
- **Set Up React Frontend**
  - Navigate to the `client` folder.
  - Run `npx create-react-app .` to set up React.
  - Install additional dependencies: `npm install axios react-router-dom`.
- **Install MongoDB**
  - Ensure MongoDB is installed locally or use a cloud service like MongoDB Atlas.
  - If using Atlas, create a free cluster and get the connection string.

## Step 2: Backend Development
- **Set Up Express Server**
  - Create `server/index.js`.
  - Set up a basic Express server with CORS and JSON parsing.
  - Connect to MongoDB using Mongoose.
- **Define Mongoose Models**
  - Create a `server/models` folder.
  - Define a `Project` model (e.g., fields: title, description, image URL, link, date).
  - Define a `User` model for admin (e.g., fields: username, password).
- **Implement Authentication**
  - Create `server/routes/auth.js`.
  - Add a `/register` route to create an admin user (hash password with bcrypt).
  - Add a `/login` route to authenticate and return a JWT token.
- **Create CRUD Routes for Projects**
  - Create `server/routes/projects.js`.
  - Implement routes for:
    - **GET** `/projects`: Fetch all projects (public).
    - **POST** `/projects`: Create a project (admin only).
    - **PUT** `/projects/:id`: Update a project (admin only).
    - **DELETE** `/projects/:id`: Delete a project (admin only).
  - Protect admin routes using a middleware to verify JWT tokens.
- **Secure Admin Routes**
  - Create a middleware in `server/middleware/auth.js` to check JWT tokens.
  - Apply the middleware to POST, PUT, and DELETE project routes.

## Step 3: Frontend Development
- **Set Up React Structure**
  - In `client/src`, create folders: `components`, `pages`, `context`.
  - Create main pages: `Home`, `Projects`, `AdminLogin`, `AdminDashboard`.
- **Build Public Portfolio Pages**
  - Create a `Home` page with a welcome section and portfolio overview.
  - Create a `Projects` page to display all projects fetched from the backend.
  - Use `axios` to make API calls to `/projects`.
- **Set Up React Router**
  - In `client/src/App.js`, configure `react-router-dom` for routes:
    - `/` for Home.
    - `/projects` for Projects.
    - `/admin` for AdminLogin (hidden route).
    - `/admin/dashboard` for AdminDashboard (protected).
- **Implement Admin Login**
  - Create an `AdminLogin` component with a form (username, password).
  - Use `axios` to send login data to `/login` and store the JWT in localStorage.
- **Build Admin Dashboard**
  - Create an `AdminDashboard` component with forms for creating/updating projects.
  - Display a list of projects with edit and delete buttons.
  - Use `axios` for CRUD operations to `/projects` endpoints, including the JWT in headers.
- **Protect Admin Dashboard**
  - Create a `ProtectedRoute` component to check for a valid JWT in localStorage.
  - Apply it to the `/admin/dashboard` route.

## Step 4: Styling
- **Add Basic Styling**
  - Use CSS or a library like Tailwind CSS (install via CDN in `client/public/index.html`).
  - Style the portfolio to be clean and professional (e.g., project cards, responsive layout).
  - Ensure the admin login and dashboard have a distinct, simple design.

## Step 5: Testing and Debugging
- **Test Backend**
  - Use Postman to test all API routes (`/login`, `/projects` CRUD).
  - Verify JWT protection for admin routes.
- **Test Frontend**
  - Test public pages (`Home`, `Projects`) to ensure data displays correctly.
  - Test admin login and dashboard functionality (CRUD operations).
  - Ensure the admin route (`/admin`) is not easily discoverable (e.g., not linked in UI).
- **Debug Issues**
  - Check console logs for errors.
  - Verify MongoDB connection and JWT token handling.

## Step 6: Deployment (Optional)
- **Deploy Backend**
  - Deploy the backend to a platform like Render or Heroku.
  - Update `.env` with the production MongoDB URI.
- **Deploy Frontend**
  - Build the React app: `npm run build` in the `client` folder.
  - Deploy to Netlify or Vercel.
- **Update API URLs**
  - Update the frontend’s API calls to use the deployed backend URL.

## Step 7: Final Touches
- **Add Content**
  - Add real project data (e.g., title, description, links) via the admin dashboard.
  - Ensure the portfolio reflects your skills and personality.
- **Polish and Review**
  - Test responsiveness on mobile and desktop.
  - Get feedback from peers or supervisors and refine as needed.

## Notes
- **Authentication**: Use JWT for secure admin access. Store tokens in localStorage (for simplicity) or consider HTTP-only cookies for better security.
- **Hidden Admin Route**: Keep `/admin` unlinked in the UI to make it less discoverable.
- **CRUD**: Ensure all project operations (create, read, update, delete) work seamlessly.
- **Beginner Focus**: The plan avoids complex features like payment systems, focusing on core MERN skills.
- **Next Steps**: If time allows, consider adding features like project categories or image uploads after mastering the basics.