# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/7e3c0e82-406c-45b3-8f2d-aba5b75077d6

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/7e3c0e82-406c-45b3-8f2d-aba5b75077d6) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

Additional local notes for branding and fonts
------------------------------------------------

- The project uses the brand font located in `Diseño/Montserrat Alternates Regular.ttf`.
- The CSS loads it from `src/index.css` via a `@font-face` rule. If you move the font, update the path in `src/index.css`.
- Logos are in the `Diseño/` folder and are referenced directly from components (`Navbar` and `Footer`). If you prefer them in `src/assets`, copy the files there and update imports in `src/components/Navbar.tsx` and `src/components/Footer.tsx`.

Run on Windows (cmd.exe)
------------------------

Open cmd.exe in the project folder and run:

```
npm install
npm run dev
```

Then open the local URL that Vite prints (normally http://localhost:5173).

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/7e3c0e82-406c-45b3-8f2d-aba5b75077d6) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
