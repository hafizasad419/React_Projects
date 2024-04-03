import React from 'react'

function SwapButton({ swap }) {
    return (
        <div className="btnContainer  absolute flex justify-center w-28 md:w-32 h-10 md:h-12 top-[260px] md:top-[286px] left-[180px] lg:left-[600px] md:left-[375px]">
            <button
                onClick={swap}
                type='button'
                className='w-full text-white font-semibold bg-blue-400 rounded text-2xl duration-200 hover:bg-blue-500 hover:duration-200 hover:scale-105'

            >
                Swap
            </button>
        </div>
    )
}

export default SwapButton