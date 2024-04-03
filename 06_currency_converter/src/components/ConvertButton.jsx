import React from 'react'

function ConvertButton({ convert }) {
    return (
        <div className="btnContainer flex justify-center w-full">
            <button
                onClick={convert}
                type='button'
                className='w-80 h-16 text-white font-semibold bg-blue-400 rounded text-2xl duration-200 hover:bg-blue-500 hover:duration-200 hover:scale-105'

            >
                Convert
            </button>
        </div>
    )
}

export default ConvertButton