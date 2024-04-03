import { useState } from 'react';
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState("green");

  return (
    <>


      <div className='h-screen w-full py-2' style={{ backgroundColor: bgColor, transition: "1s" }}>

        <div className="buttons bg-white text-white flex justify-center py-2 px-2">

          <button onClick={() => { setBgColor("red") }} className='px-6 py-2 mx-2 bg-red-600 rounded-full '>Red</button>

          <button onClick={() => { setBgColor("green") }} className='px-6 py-2 mx-2 bg-green-600 rounded-full'>Green</button>

          <button onClick={() => { setBgColor("blue") }} className='px-6 py-2 mx-2 bg-blue-600 rounded-full'>Blue</button>

          <button onClick={() => { setBgColor("orange") }} className='px-6 py-2 mx-2 bg-amber-500 rounded-full'>Orange</button>

          <button onClick={() => { setBgColor("gray") }} className='px-6 py-2 mx-2 bg-gray-600 rounded-full'>Gray</button>

          <button onClick={() => { setBgColor("yellow") }} className='px-6 py-2 mx-2 bg-yellow-400 rounded-full'>Yellow</button>

          <button onClick={() => { setBgColor("pink") }} className='px-6 py-2 mx-2 bg-pink-600 rounded-full'>Pink</button>

          <button onClick={() => { setBgColor("black") }} className='px-6 py-2 mx-2 bg-black 
          rounded-full'>Black</button>

          <button onClick={() => { setBgColor("purple") }} className='px-6 py-2 mx-2 bg-purple-600 rounded-full'>Purple</button>

          <button className='px-6 py-2 mx-2 bg-purple-600 rounded-full font-semibold' onClick={function () {
            let randomColor = "#";
            let numsAndChars = "abcdef0123456789";


            for (let i = 0; i < 6; i++) {
              randomColor += numsAndChars[Math.floor(Math.random() * 16)]
            }

            setBgColor(randomColor);
          }}>Let See</button>



        </div>

      </div>



    </>

  )
}

export default App
