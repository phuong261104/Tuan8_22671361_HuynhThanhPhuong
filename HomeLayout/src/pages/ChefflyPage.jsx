import React, { useState } from "react";

export default function ChefflyPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const summerRecipes = [
    { title: "Italian-style tomato salad", time: "15 minutes", image: "https://i.pinimg.com/736x/4e/56/fa/4e56fa3ef27a56c8b5e6bec2b2b18d7f.jpg" },
    { title: "Spaghetti with vegetables and shrimp", time: "15 minutes", image: "https://i.pinimg.com/736x/4e/56/fa/4e56fa3ef27a56c8b5e6bec2b2b18d7f.jpg" },
    { title: "Lotus delight salad", time: "20 minutes", image: "https://i.pinimg.com/736x/4e/56/fa/4e56fa3ef27a56c8b5e6bec2b2b18d7f.jpg" },
    { title: "Snack cakes", time: "21 minutes", image: "https://i.pinimg.com/736x/4e/56/fa/4e56fa3ef27a56c8b5e6bec2b2b18d7f.jpg" },
  ];

  const videoRecipes = [
    { title: "Salad with cabbage and shrimp", time: "32 minutes", image: "https://i.pinimg.com/736x/4e/56/fa/4e56fa3ef27a56c8b5e6bec2b2b18d7f.jpg" },
    { title: "Salad of cove beans, shrimp and potatoes", time: "20 minutes", image: "https://i.pinimg.com/736x/4e/56/fa/4e56fa3ef27a56c8b5e6bec2b2b18d7f.jpg" },
    { title: "Sunny-side up fried egg", time: "15 minutes", image: "https://i.pinimg.com/736x/4e/56/fa/4e56fa3ef27a56c8b5e6bec2b2b18d7f.jpg" },
    { title: "Lotus delight salad", time: "20 minutes", image: "https://i.pinimg.com/736x/4e/56/fa/4e56fa3ef27a56c8b5e6bec2b2b18d7f.jpg" },
  ];

  const editorsPickData = [
    { title: "Stuffed sticky rice ball", time: "34 minutes", chef: "Jennifer King", description: "Stuffed sticky rice balls: A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling...", image: "https://i.pinimg.com/736x/4e/56/fa/4e56fa3ef27a56c8b5e6bec2b2b18d7f.jpg", avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922561.png" },
    { title: "Strawberry smoothie", time: "40 minutes", chef: "Matthew Martinez", description: "Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers...", image: "https://i.pinimg.com/736x/4e/56/fa/4e56fa3ef27a56c8b5e6bec2b2b18d7f.jpg", avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png" },
    { title: "Latte Art", time: "19 minutes", chef: "Sarah Hill", description: "Latte art is the skillful craft of creating captivating designs on the surface of a latte...", image: "https://i.pinimg.com/736x/4e/56/fa/4e56fa3ef27a56c8b5e6bec2b2b18d7f.jpg", avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922556.png" },
    { title: "Butter fried noodles", time: "16 minutes", chef: "Julia Lopez", description: "Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal...", image: "https://i.pinimg.com/736x/4e/56/fa/4e56fa3ef27a56c8b5e6bec2b2b18d7f.jpg", avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922522.png" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between p-4 shadow-md bg-white relative">
        <div className="flex items-center space-x-2">
          <img src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png" alt="Cheffly Logo" className="w-8 h-8" />
          <div className="text-2xl font-bold text-pink-500">Cheffly</div>
        </div>

        {/* Search */}
        <div className="hidden md:flex items-center flex-1 mx-8">
          <div className="relative w-full">
            <input type="text" placeholder="What would you like to cook?" className="pl-10 pr-4 py-2 w-full bg-gray-100 rounded-full" />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-gray-600 text-sm">
          <a href="#" className="hover:text-black">What to cook</a>
          <a href="#" className="hover:text-black">Recipes</a>
          <a href="#" className="hover:text-black">Ingredients</a>
          <a href="#" className="hover:text-black">Occasions</a>
          <a href="#" className="hover:text-black">About Us</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl text-pink-500">
          ☰
        </button>

        {/* Login + Subscribe Desktop */}
        <div className="hidden md:flex space-x-2">
          <button className="px-4 py-2 rounded bg-pink-50 text-pink-500 border border-pink-200">Login</button>
          <button className="px-4 py-2 rounded bg-pink-500 text-white">Subscribe</button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white flex flex-col items-center space-y-4 py-6 shadow-lg md:hidden z-50 transition-transform duration-300">
            <a href="#" className="hover:text-pink-500">What to cook</a>
            <a href="#" className="hover:text-pink-500">Recipes</a>
            <a href="#" className="hover:text-pink-500">Ingredients</a>
            <a href="#" className="hover:text-pink-500">Occasions</a>
            <a href="#" className="hover:text-pink-500">About Us</a>

            {/* Thêm nút Login và Subscribe cho Mobile */}
            <div className="flex space-x-2 pt-4">
              <button className="px-4 py-2 rounded bg-pink-50 text-pink-500 border border-pink-200">Login</button>
              <button className="px-4 py-2 rounded bg-pink-500 text-white">Subscribe</button>
            </div>
          </div>
        )}

      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[500px] bg-cover bg-center" style={{ backgroundImage: 'url("https://i.pinimg.com/originals/c7/94/be/c794be5349bc93ec47a2a17daab1b279.gif")' }}>
        <div className="absolute top-10 left-10 bg-white p-6 rounded-xl shadow-lg max-w-sm">
          <div className="bg-yellow-400 text-xs font-semibold text-center py-1 rounded-full w-40 mb-4">Recipe of the day</div>
          <h2 className="text-xl font-bold text-pink-500 mb-2">Salad Caprese</h2>
          <p className="text-gray-600 mb-4">Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil, and balsamic vinegar create a refreshing dish for lunch or appetizer.</p>
        </div>
      </section>
      {/* This Summer Recipes */}
      <section className="p-8">
        <h2 className="text-3xl font-bold text-center text-pink-500 mb-2">This Summer Recipes</h2>
        <p className="text-center text-gray-600 mb-8">We have all your Independence Day sweets covered.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {summerRecipes.map((item, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <img src={item.image} alt={item.title} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-gray-800 font-semibold text-base mb-2">{item.title}</h3>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span className="text-pink-500 font-semibold">{item.time}</span>
                  <button className="text-pink-500">🔖</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recipes With Videos */}
      <section className="p-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-pink-500 mb-2">Recipes With Videos</h2>
        <p className="text-center text-gray-600 mb-8">Cooking Up Culinary Creations with Step-by-Step Videos</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {videoRecipes.map((item, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <img src={item.image} alt={item.title} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-gray-800 font-semibold text-base mb-2">{item.title}</h3>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span className="text-pink-500 font-semibold">{item.time}</span>
                  <button className="text-pink-500">🔖</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Editor's Pick */}
      <section className="p-8">
        <h2 className="text-3xl font-bold text-center text-pink-500 mb-2">Editor's Pick</h2>
        <p className="text-center text-gray-600 mb-8">Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {editorsPickData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row gap-4 hover:shadow-lg transition">
              <img src={item.image} alt={item.title} className="w-full md:w-40 h-40 object-cover rounded-lg" />
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                  <button className="text-pink-500 text-2xl">🔖</button>
                </div>
                <p className="text-xs text-gray-500 mb-2">{item.time}</p>
                <div className="flex items-center mb-2">
                  <img src={item.avatar} alt={item.chef} className="w-6 h-6 rounded-full mr-2" />
                  <span className="text-sm font-medium text-gray-800">{item.chef}</span>
                </div>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-8 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-2">About Us</h4>
            <p className="text-gray-400 mb-4">Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
            <div className="flex">
              <input type="email" placeholder="Enter your email" className="p-2 rounded-l bg-gray-800 w-full" />
              <button className="px-4 py-2 bg-pink-500 rounded-r">Send</button>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-2">Learn More</h4>
            <ul className="text-gray-400 space-y-2">
              <li>Our Cooks</li>
              <li>See Our Features</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-2">Shop</h4>
            <ul className="text-gray-400 space-y-2">
              <li>Gift Subscription</li>
              <li>Send Us Feedback</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-2">Recipes</h4>
            <ul className="text-gray-400 space-y-2">
              <li>What to Cook This Week</li>
              <li>Pasta</li>
              <li>Dinner</li>
              <li>Healthy</li>
              <li>Vegetarian</li>
              <li>Vegan</li>
              <li>Christmas</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-500 text-xs mt-8">
          © 2025 Cheffly Company | Terms of Service | Privacy Policy
        </div>
      </footer>
    </div>
  );
}
