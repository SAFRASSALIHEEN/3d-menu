import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const items = [
    {
      id: 1,
      img: '/burger.jpg',
      hoverImg: '/burger-hover.jpg',
      name: 'Cheeseburger Sliders',
      price: '$9.99',
    },
    {
      id: 2,
      img: '/pizza.jpg',
      hoverImg: '/pizza-hover.jpg',
      name: 'Appetizer Sampler',
      price: '$8.99',
    },
    {
      id: 3,
      img: '/sushi.jpg',
      hoverImg: '/sushi-hover.jpg',
      name: 'Jalapeño Poppers',
      price: '$5.99',
    },
    {
      id: 4,
      img: '/pasta.jpg',
      hoverImg: '/pasta-hover.jpg',
      name: 'Chicken Alfredo Pasta',
      price: '$11.49',
    },
    {
      id: 5,
      img: '/tacos.jpg',
      hoverImg: '/tacos-hover.jpg',
      name: 'Taco Fiesta',
      price: '$6.49',
    },
    {
      id: 6,
      img: '/salad.jpg',
      hoverImg: '/salad-hover.jpg',
      name: 'Greek Salad',
      price: '$4.99',
    },
    {
      id: 7,
      img: '/steak.jpg',
      hoverImg: '/steak-hover.jpg',
      name: 'Grilled Steak',
      price: '$14.99',
    },
    {
      id: 8,
      img: '/dessert.jpg',
      hoverImg: '/dessert-hover.jpg',
      name: 'Chocolate Lava Cake',
      price: '$3.99',
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="group bg-gray-900 text-white rounded-xl overflow-hidden shadow-lg transition duration-500 
             hover:-translate-y-2 hover:shadow-2xl hover:bg-white cursor-pointer"
            >
              <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-100 group-hover:opacity-0"
                />
                <img
                  src={item.hoverImg}
                  alt={`${item.name} Hover`}
                  className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold mb-1 transition duration-300 group-hover:text-[#101828]">
                  {item.name}
                </h3>
                <p className="text-yellow-500 text-sm group-hover:text-yellow-600">{item.price}</p>
                <button className="mt-4 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded text-sm font-semibold">
                  ADD TO ORDER
                </button>
              </div>
            </div>

          ))}
        </div>
      </div>
    </>
  )
}

export default App
