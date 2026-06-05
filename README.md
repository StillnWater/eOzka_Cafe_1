# ☕ eOzka Cafe

A modern, responsive web application for a cafe featuring an elegant user experience with theme switching, table bookings, and customer reviews.

**Live Demo:** [eozka-cafe-1.vercel.app](https://e-ozka-cafe-1.vercel.app)

---

## 🌟 Features

- **Multi-Page Navigation** - Home, Menu, Book Visit, Reviews, and Contact pages
- **Dark/Light Theme Toggle** - Persistent theme switching with localStorage
- **Table Booking System** - Reserve tables with custom dates, times, and party sizes
- **Customer Reviews** - View and submit cafe reviews
- **Contact Form** - Get in touch with the cafe
- **Custom Animated Cursor** - Coffee-themed interactive cursor animations
- **Toast Notifications** - User feedback for actions and confirmations
- **Booking Confirmation Modal** - Display booking details after reservation
- **Mobile Responsive** - Fully responsive design using Vite + React

---

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.2.6
- **Build Tool:** Vite 8.0.12
- **Routing:** React Router DOM 7.16.0
- **Icons:** Lucide React 1.17.0
- **Styling:** CSS (with theme variables)
- **Linting:** ESLint 10.3.0

---

## 📋 Project Structure

```
eOzka_Cafe_1/
├── eOzka-cafe/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx      # Navigation bar with theme toggle
│   │   │   └── Footer.jsx      # Footer component
│   │   ├── pages/
│   │   │   ├── Home.jsx        # Landing page
│   │   │   ├── Menu.jsx        # Menu display
│   │   │   ├── BookVisit.jsx   # Table booking form
│   │   │   ├── Reviews.jsx     # Reviews section
│   │   │   └── Contact.jsx     # Contact form
│   │   ├── App.jsx             # Main app component
│   │   ├── main.jsx            # React entry point
│   │   └── index.css           # Global styles
│   ├── index.html              # HTML entry point
│   ├── vite.config.js          # Vite configuration
│   ├── package.json            # Dependencies
│   └── eslintrc.js             # ESLint configuration
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/StillnWater/eOzka_Cafe_1.git
cd eOzka_Cafe_1
```

2. Navigate to the project directory:
```bash
cd eOzka-cafe
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit:
```
http://localhost:5173
```

---

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## 🎨 Features in Detail

### Theme System
- Toggle between dark and light themes
- User preference is saved in localStorage
- Applied via `data-theme` attribute on document root

### Custom Cursor
- Coffee-themed SVG cursor
- Smooth animation following mouse movement
- Interactive feedback on click (scale and rotation effects)

### Interactive Forms
- **Book Visit:** Date, time slot, party size, and guest name
- **Reviews:** Submit cafe ratings and comments
- **Contact:** Message form for inquiries

### State Management
- Local state using React hooks (`useState`, `useRef`, `useEffect`)
- Tab-based navigation without external routing library
- Toast notifications with auto-dismiss (3-second timeout)

---

## 🔧 Configuration

### Vite Configuration
The project uses Vite with React plugin for fast development and optimized builds.

### ESLint Rules
The project follows JavaScript and React best practices with ESLint, including:
- React Hook dependencies validation
- React Refresh compatibility

---

## 🌐 Deployment

The project is deployed on Vercel. To deploy your own instance:

1. Push to your GitHub repository
2. Connect to [Vercel](https://vercel.com)
3. Select this repository
4. Deploy automatically

---

## 📧 Contact & Support

For inquiries or suggestions, please reach out through:
- **Contact Form:** Available in the Contact page
- **GitHub Issues:** [Report issues here](https://github.com/StillnWater/eOzka_Cafe_1/issues)

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙏 Credits

Original repository: [Saurabh-Mudgal-Dev/eOzka_Cafe_1](https://github.com/Saurabh-Mudgal-Dev/eOzka_Cafe_1)

---

**Enjoy your coffee! ☕**
