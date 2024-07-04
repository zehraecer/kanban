### Kanban Projesi - README

# Kanban Board

This project is a simple Kanban board web application built using React and Supabase. It allows users to create tasks, assign them to columns, and manage their status.

## Features

- Add new tasks and columns.
- View tasks under different columns.
- Update tasks' status by moving them between columns.
- Responsive design for better user experience on different devices.

## Project Structure

The project is structured as follows:

- `App.js`: The main component that sets up the context and renders the header, content, and modals.
- `components/`: Contains all the React components used in the project.
  - `header.js`: Renders the header with an option to add new tasks.
  - `content.js`: Renders the columns and tasks, and includes functionality to add new columns.
  - `modal.js`: Modal component for adding new tasks.
  - `newColumnModal.js`: Modal component for adding new columns.
- `supabase.js`: Configures and initializes the Supabase client for interacting with the database.
- `App.css`: Contains the styling for the application.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/kanban-board.git
    cd kanban-board
    ```

2. Install the dependencies:
    ```sh
  npm i
    # or
    yarn
    # or
    pnpm i
    # or
    bun i
    ```

3. Set up the Supabase environment:
    - Create a Supabase account and set up a new project.
    - Create tables `Columns`, `Tasks`, and `Subtasks` in your Supabase database.
    - Configure your Supabase keys and URL in an `.env` file:
    ```sh
    REACT_APP_SUPABASE_URL=your-supabase-url
    REACT_APP_SUPABASE_ANON_KEY=your-supabase-anon-key
    ```

4. Start the development server:
    ```sh
   npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

5. Open the application in your browser at `http://localhost:3000`.

Deployment
The application is deployed on Vercel. You can access it at [https://kanban-beryl-two.vercel.app/](https://kanban-beryl-two.vercel)