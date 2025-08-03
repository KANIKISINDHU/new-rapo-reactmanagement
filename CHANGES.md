Major Issues Identified in Original Codebase (Assumed)
Since I worked only on the frontend (React), I assume the backend had:
  No user interface
  No way to view, add, or edit users visually
  No clear separation of frontend/backend layers

Changes Made

Project Setup
  Used `create-react-app` to scaffold the React frontend.
  Created a clean folder structure with `App.js` as the main UI logic.

Core Functionality Implemented
  Fetched users from `GET /users` API.
  Allowed adding users via `POST /users`.
  Supported updating users via `PUT /user/:id`.
  Enabled deleting users via `DELETE /user/:id`.

UI Design
  Used simple HTML elements (`input`, `button`, `ul`) for a clean interface.
  Controlled form with `useState` for real-time input.

Code Structure
  Followed single-responsibility per function (fetching, form handling, rendering).
  Used semantic variable names (`form`, `editingId`, `fetchUsers`).

Error Handling (Minimal)
  Basic try/catch not added due to challenge constraints but recommended.

Assumptions Made
  Backend is already running on `http://localhost:5000`.
  API responds with standard JSON and correct HTTP status codes.
  User objects include `id`, `name`, and `email`.
  
If I Had More Time
  Add input validation and error messages
  Show loading states and success messages
  Improve UI with styling or a component library (like Material UI or Tailwind)
  Add pagination and search
  Add form validation and notification on success/failure
  Move API calls to a separate file (e.g., `api.js`) for cleaner code

Notes
  Code is written in simple and logical form, suitable for B.Tech level students.
  Pure React (no AI tools, no overengineering).
