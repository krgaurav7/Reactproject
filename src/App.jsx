import { useState } from 'react'


function App() {
  const [color, setColor] = useState("black")

  return (
    <>
        <div className='w-full h-screen duration-200 ' 
        style={{backgroundColor : color}}
        >
          <div className='fixed w-full flex justify-center'> <h1 className='text-white text-4xl mt-2'> Background Changer  </h1></div>
          <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 py-3'> 
            <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
                <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' style={{backgroundColor:"red"}}> Red </button>

               <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' style={{backgroundColor:"green"}}> Green </button>

                <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' style={{backgroundColor:"blue"}}> Blue </button>

                <button onClick={() => setColor("#fcba03")} className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' style={{backgroundColor:"#fcba03"}}> Yellow </button>

                <button onClick={() => setColor("orange")} className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' style={{backgroundColor:"orange"}}> Orange </button>

                <button onClick={() => setColor("grey")} className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' style={{backgroundColor:"grey"}}> Grey </button>

                <button onClick={() => setColor("#fc03cf")} className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' style={{backgroundColor:"#fc03cf"}}> Pink </button>

                <button onClick={() => setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' style={{backgroundColor:"black"}}> Black </button>
            </div>
          </div>
          <div className='flex justify-center gap-1.5 text-white text-center fixed bottom-3 w-full '>
            <p className='text-blue-400'>Made with Love by </p> <a href='https://x.com/kr_gaurav_cric' target='_blank'> Gaurav Kumar !</a>
          </div>
        </div>
    </>
  )
}

export default App
