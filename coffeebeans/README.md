# ☕ CoffeeBeans — Online Coffee Store (Learning Project)

CoffeeBeans is a non-commercial learning project built using the MERN stack. It is a modern frontend application for an online coffee store, focusing on structure, routing, and reusable component patterns.

---

## 🧰 Tech Stack

- **Frontend**: React 19 + Vite
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **State/Context**: React Context API
- **Notifications**: React Toastify
- **Linting**: ESLint
- **Bundler**: Vite

---

## 📂 Project Structure

```
src/
│
├── assets/              # Static images, icons, and product data
├── components/          # Reusable UI components (e.g., Navbar, Footer)
├── context/             # Global state using React Context API
├── pages/               # Main route components
│   ├── Home.jsx
│   ├── Collection.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Product.jsx
│   ├── Cart.jsx
│   ├── Login.jsx
│   ├── PlaceOrder.jsx
│   └── Orders.jsx
├── App.jsx              # Main app component with routing
└── main.jsx             # Entry point, sets up context and routing
```

---

## 🧭 Route Overview

The application uses React Router v7 for page navigation. Each route renders a corresponding page from `pages/`.

| Route Path             | Component    | Description                           |
| ---------------------- | ------------ | ------------------------------------- |
| `/`                    | `Home`       | Landing page with highlights          |
| `/collection`          | `Collection` | Displays all coffee products          |
| `/about`               | `About`      | About the coffee store/project        |
| `/contact`             | `Contact`    | Contact form or details               |
| `/products/:productId` | `Product`    | Dynamic route for individual products |
| `/cart`                | `Cart`       | Shopping cart page                    |
| `/login`               | `Login`      | Login/Authentication page             |
| `/palace-order`        | `PlaceOrder` | Order confirmation (likely a typo)    |
| `/orders`              | `Orders`     | Order history (for logged-in users)   |

> ⚠️ Note: Route `/palace-order` seems to contain a typo — it might be intended as `/place-order`.

---

## 🛒 Global Shop Context

`ShopContext` is used to store and share global values such as:

```js
{
  products, // Imported from assets
  currency: "$"
}
```

This context is initialized in `ShopContextProvider` and wrapped around the entire app in `main.jsx`.

---

## 📌 `Navbar` Component Overview

The `Navbar` is a responsive navigation component that includes:

- Logo and brand name
- Route navigation links (`Home`, `Collection`, `About`, `Contact`)
- User icon with dropdown menu (`My Account`, `Orders`, `Logout`)
- Shopping cart icon with item count badge
- Hamburger menu for mobile view with slide-in panel

#### Features:

- **Responsive**:
  - Horizontal menu for screen widths `sm` and above
  - Collapsible mobile menu (slide-in from the right)
- **State**:
  - `visible` state controls mobile menu visibility
  - `useEffect` disables page scroll when mobile menu is open
- **Navigation**:
  - Uses `React Router`'s `<NavLink>` for active route styling
- **Icons**:
  - `PiUser` for user account
  - `BsBag` for cart
  - `RiMenu3Fill` for hamburger menu
  - `IoIosArrowBack` as a close button

#### Code Behavior Summary

```jsx
// Visibility toggles slide-in mobile menu
const [visible, setVisible] = useState(false);
useEffect(() => {
  document.body.classList.toggle("overflow-hidden", visible);
}, [visible]);

// NavLinks navigate via React Router
<NavLink to="/collection">Collection</NavLink>;

// User dropdown appears on hover (desktop only)
```

## ▶️ Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

## 📌 Notes

- Project uses `React.createRoot()` (React 18+ rendering API)
- Tailwind padding classes are customized for responsiveness
- Context is kept minimal for simplicity and learning purposes
