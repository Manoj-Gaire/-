import React from "react";
import { FaSearch } from "react-icons/fa";

export default function App() {
  const posts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900",
      title: "Labor Depar rules pro as tweaks overtime",
      desc: "You're cooking a meal, especially a holiday meal, to be served to friends or family, the key to success is planning. Don't run around second guessing yourself and what you're going to make. Plan your menu, do the shopping, and…",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?w=900",
      title: "New restaurant town that Looking think that",
      desc: "You're cooking a meal, especially a holiday meal, to be served to friends or family, the key to success is planning. Don't run around second guessing yourself and what you're going to make. Plan your menu, do the shopping, and…",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1550317138-10000687a72b?w=900",
      title: "Starbucks invests $100M in new retail startups",
      desc: "You're cooking a meal, especially a holiday meal, to be served to friends or family, the key to success is planning. Don't run around second guessing yourself and what you're going to make. Plan your menu, do the shopping, and…",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* ================= HEADER ================= */}
      <header className="relative h-[320px] bg-gradient-to-r from-yellow-500 via-orange-500 to-orange-300">

        
        <nav className="flex justify-between items-center px-16 py-6 text-white">

          <ul className="flex items-center gap-8 uppercase text-sm font-semibold">
            <li className="relative group cursor-pointer">
           < div className="flex items-center gap-1">
              Home
              <span className="text-[10px]">▼</span>
            </div>
            <ul className="absolute top-7 left-0 hidden group-hover:block bg-white text-gray-700 rounded shadow-lg w-44">
                <li className="px-4 py-2 hover:bg-orange-100">
                  Home1
                </li>
                <li className="px-4 py-2 hover:bg-orange-100">
                  Home2
                </li>
                <li className="px-4 py-2 hover:bg-orange-100">
                  Home3
                </li>
                 <li className="px-4 py-2 hover:bg-orange-100">
                  Home4
                </li>
              </ul>
                

            </li>

            
            <li className="relative group cursor-pointer">
              <div className="flex items-center gap-1">
                Menu
                
              </div>

              
            </li>

            
            <li className="relative group cursor-pointer">
              <div className="flex items-center gap-1">
                Pages
                <span className="text-[10px]">▼</span>
              </div>

              <ul className="absolute top-7 left-0 hidden group-hover:block bg-white text-gray-700 rounded shadow-lg w-44">
                <li className="px-4 py-2 hover:bg-orange-100">
                  About Us
                </li>
                <li className="px-4 py-2 hover:bg-orange-100">
                  Reservation
                </li>
                <li className="px-4 py-2 hover:bg-orange-100">
                  Our Team
                </li>
                <li className="px-4 py-2 hover:bg-orange-100">
                  Faq
                </li>

              </ul>
            </li>

            
            <li className="relative group cursor-pointer">
              <div className="flex items-center gap-1">
                Shop
                <span className="text-[10px]">▼</span>
              </div>



              <ul className="absolute top-7 left-0 hidden group-hover:block bg-white text-gray-700 rounded shadow-lg w-44">
                <li className="px-4 py-2 hover:bg-orange-100">
                  Shop1
                </li>
                <li className="px-4 py-2 hover:bg-orange-100">
                  Shop2
                </li>
                <li className="px-4 py-2 hover:bg-orange-100">
                  Shop3
                </li>
                 <li className="px-4 py-2 hover:bg-orange-100">
                  Cart
                </li>
              </ul>
            </li>

            <li className="cursor-pointer hover:text-gray-200">
              Contact
            </li>

          </ul>
        
           <div className="flex items-center gap-4">
             <button className="bg-[#c74b46] hover:bg-[#b03d39] text-white px-7 py-3 rounded-full text-sm font-semibold uppercase tracking-wide transition duration-300">
                  Online Order
            </button>

  
              <button className="text-white text-xl hover:text-gray-200">
                🛒
              </button>

            
              <button className="w-12 h-12 bg-[#b63d3a] rounded-md flex items-center justify-center text-white text-xl hover:bg-[#9f312f]">
                ☰
              </button>

              
            </div>
  
          
          



        </nav>

        
        <div className="absolute left-1/2 top-24 -translate-x-1/2 text-center">

          <img
            src="https://demo-themewinter.com/gloreya/vegan/wp-content/uploads/sites/4/2019/10/logo.png"
            alt=""
            className="w-16 h-16 mx-auto"
          />

          <h1 className="text-4xl text-white font-bold mt-5 tracking-widest">
            Gloreya
          </h1>

        </div>

      </header>

     

      <main className="max-w-6xl mx-auto py-12 px-5">

        <div className="grid lg:grid-cols-3 gap-8">

          <section className="lg:col-span-2 space-y-8">

            {posts.map((post) => (

              <div
                key={post.id}
                className="bg-white shadow rounded overflow-hidden"
              >

                <img
                  src={post.image}
                  alt=""
                  className="w-full h-72 object-cover"
                />

                <div className="p-6">

                  <h2 className="text-2xl font-bold mb-3">
                    {post.title}
                  </h2>

                  <p className="text-gray-600">
                    {post.desc}
                  </p>

                  <button className="mt-4 text-orange-600 font-semibold hover:underline">
                     Continue→
                  </button>

                </div>

              </div>

            ))}

          </section>


          <aside className="space-y-6">

           

            <div className="bg-white shadow rounded p-5">

              <h3 className="font-bold text-lg mb-3">
                Search
              
              </h3>

              <input
                type="text"
                placeholder="Search..."
                className="w-full border rounded p-2 outline-none focus:border-orange-500 "
                
              
              />
              <FaSearch className="absolute s right-70  -translate-y-1/2 text-gray-500 cursor-pointer" />
              
              
              

            </div>

            

            <div className="bg-white shadow rounded p-5">

              <h3 className="font-bold text-lg mb-4">
                Recent Posts
              </h3>

              <ul className="space-y-3 text-gray-600">

                <li>Labor Depar rules pro as tweaks overtime</li>

                <li>New restaurant town that looking think that</li>

                <li>Starbucks invests $100M in new retail startuos</li>

                

              </ul>

            </div>

            
            <div className="bg-white shadow rounded p-5">

              <h3 className="font-bold text-lg mb-4">
                Categories
              </h3>
              
              <ul className="space-y-3 text-gray-600">
                <li>Burger</li>
              </ul>

            </div>
            <div className="bg-white shadow rounded p-5">

              <h3 className="font-bold text-lg mb-4">
                Recent Comments
              </h3>
            </div>
            <div className="bg-white shadow rounded p-5">
              <h3 className="font-bold text-lg mb-4">
                Archives
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>October 2019</li>
              </ul>
            </div>
            <div className="bg-white shadow rounded p-5">

              <h3 className="font-bold text-lg mb-4">
                Meta
              </h3>

              <ul className="space-y-3 text-gray-600">

                <li>Login</li>

                <li>Entries RSS</li>

                <li>Comments RSS</li>

                <li>WordPress.org</li>

              </ul>

            </div>

          </aside>

        </div>
        

      </main>
      <footer className="bg-neutral-900 text-gray-400 pt-16 pb-8 border-t border-neutral-800 relative">
        
        <div className="flex justify-center -mt-24 mb-12">
          <div className="bg-red-600 text-white w-24 h-24 rounded-full border-4 border-neutral-900 shadow-xl flex flex-col items-center justify-center ">
            <img src="https://demo-themewinter.com/gloreya/wp-content/themes/gloreya/assets/images/logo/footer_logo.png" alt="logo bott"></img>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

          <div>
            <h4 className="text-white text-lg font-bold mb-4">Address</h4>
            <p className="text-sm leading-relaxed">
              570 8th Ave,<br />
              New York, NY 10018<br />
              United States
            </p>
          </div>

          <div>
            <h4 className="text-white text-lg font-bold mb-4">Book a table</h4>
            <p className="text-sm leading-relaxed mb-2">
              Dogfood och Sliders foodtruck.<br />Under Om oss kan ni läsa
            </p>
            <a href="tel:8504354155" className="text-amber-400 font-bold text-base hover:underline block">
              (850) 435-4155
            </a>
          </div>

          <div>
            <h4 className="text-white text-lg font-bold mb-4">Opening hours</h4>
            <p className="text-sm leading-relaxed">
              Monday – Friday<br />
              10.00 AM – 11.00 PM
            </p>
          </div>

          <div>
            <img src="https://demo-themewinter.com/gloreya/vegan/wp-content/uploads/sites/4/2019/10/logo.png"></img>
            <p className="text-xs leading-relaxed text-gray-400">
              We like to keep our fans up-to-date. By accepting our terms, you agree to receive.
            </p>
          </div>

        </div>

        <div className="max-w-6xl mx-auto px-4 border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs gap-6">

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">About us</a>
            <a href="#" className="hover:text-white transition">Menu</a>
            <a href="#" className="hover:text-white transition">Blog</a>
            <a href="#" className="hover:text-white transition">Gallery</a>
            <a href="#" className="hover:text-white transition">Faq</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>

          <p>© 2026 Gloreya. All rights reserved</p>

          <div className="flex gap-2">
            <a href="#" className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs hover:opacity-80 transition">f</a>
            <a href="#" className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold text-xs hover:opacity-80 transition">t</a>
            <a href="#" className="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold text-xs hover:opacity-80 transition">in</a>
            <a href="#" className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs hover:opacity-80 transition">yt</a>
          </div>

        </div>

        <a href="#" className="fixed bottom-6 right-6 bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" /></svg>
        </a>

      </footer>

    </div>
    
  );
  
}