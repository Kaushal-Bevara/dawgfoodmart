import { useState } from 'react'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState('home')

  const menuItems = ['Home', 'Products', 'Store Locator', 'Product Menus', 'Sales']

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return (
          <section className="content">
            <h1>Welcome to Dawg Food Mart</h1>
            <p>Your go-to destination for quality food products.</p>
          </section>
        )
      case 'products':
        return (
          <section className="content">
            <h1>Products</h1>
            <p>Explore our wide range of quality products.</p>
          </section>
        )
      case 'store-locator':
        return (
          <section className="content">
            <h1>Store Locator</h1>
            <p>Find a Dawg Food Mart location near you.</p>
          </section>
        )
      case 'product-menus':
        return (
          <section className="content">
            <h1>Product Menus</h1>
            <p>View our detailed product menus and categories.</p>
          </section>
        )
      case 'sales':
        return (
          <section className="content">
            <h1>Sales & Promotions</h1>
            <p>Check out our latest sales and special offers.</p>
          </section>
        )
      default:
        return null
    }
  }

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          <div className="brand">Dawg Food Mart</div>
          <nav className="nav-menu">
            {menuItems.map((item) => (
              <button
                key={item}
                className={`nav-link ${
                  activePage === item.toLowerCase().replace(/\s+/g, '-') ? 'active' : ''
                }`}
                onClick={() => setActivePage(item.toLowerCase().replace(/\s+/g, '-'))}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="main-content">
        {renderContent()}
      </main>
    </>
  )
}

export default App
