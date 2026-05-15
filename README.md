# CHAU-NM'S PORTFOLIO

> Personal portfolio website showcasing my skills, projects, and experience.

Welcome to my Portfolio website built with React and TypeScript.

🌐 **Live Site**: [https://chau-nm.github.io](https://chau-nm.github.io)


## Features

- 🎨 Modern and responsive UI/UX design
- 🌍 Multi-language support (English/Vietnamese) with i18next
- 🎭 Smooth animations powered by GSAP
- 📱 Fully responsive design
- 🎯 Sections: Home, About, Skills, Projects, Repository, Contact
- 📧 Contact form integration with EmailJS
- 🌓 Theme switching (Light/Dark mode)
- 📄 CV download functionality

## Tech Stack

- **Frontend Framework**: React 18.3
- **Language**: TypeScript
- **Styling**: Sass/SCSS
- **Animation**: GSAP (GreenSock Animation Platform)
- **Routing**: React Router DOM
- **Internationalization**: i18next
- **Build Tool**: Create React App
- **Deployment**: GitHub Pages

## Installation

### 1. Clone the repository:

```bash
git clone https://github.com/chau-nm/chau-nm.github.io.git
cd chau-nm.github.io
```

### 2. Install dependencies:

```bash
yarn install
```

### 3. Configure EmailJS (for contact form):

- Create file `src/mail/config.json`
- Copy content from `src/mail/config.dev.json` to `src/mail/config.json`
- Update the config with your EmailJS credentials:

```json
{
    "mailService": "YOUR_MAIL_SERVICE_ID",
    "mailThankYouTemplate": "YOUR_THANK_YOU_TEMPLATE_ID",
    "mailFeedbackTemplate": "YOUR_FEEDBACK_TEMPLATE_ID",
    "publicKey": "YOUR_PUBLIC_KEY"
}
```

### 4. Start development server:

```bash
yarn start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `yarn start` - Start development server
- `yarn build` - Build for production
- `yarn test` - Run tests
- `yarn deploy` - Deploy to GitHub Pages

## Deployment

This project is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `master` branch.

The deployment workflow:
1. Builds the React app
2. Deploys to the `gh-pages` branch using `gh-pages`

## Project Structure

```
src/
├── assets/          # Images, fonts, icons, CV
├── common/          # Common utilities and types
├── component/       # Reusable React components
├── feature/         # Feature-based components (Home, About, etc.)
├── hook/            # Custom React hooks
├── language/        # i18n translations
├── theme/           # Theme configuration
└── ...
```

## License

This project is private and personal..
