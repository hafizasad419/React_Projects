import React, { useCallback, useEffect, useRef, useState } from 'react';
import './PasswordGenerator.css'

function PasswordGenerator() {

    const [length, setLength] = useState(8);
    let [password, setPassword] = useState("");
    const [sliderValue, setSliderValue] = useState(8);

    let [characters, setCharacters] = useState(false);
    let [numbers, setNumbers] = useState(false);

    const passwordRef = useRef(null);

    const handleCharacters = () => {

        setCharacters(!characters)
    }


    const handleNumbers = () => {
        setNumbers(!numbers)
    }

    const handleSliderChange = (e) => {
        const value = parseInt(e.target.value);
        setLength(value);
        setSliderValue(value);
    };


    const generatePassword = useCallback(() => {
        let lowerCase = "abcdefghijklmnopqrstuvwxyz";
        let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let charactersList = "~!@#$%^&*()_+}{";
        let numbersList = "0123456789";

        let availableChars = upperCase + lowerCase;
        if (characters) availableChars += charactersList;
        if (numbers) availableChars += numbersList;

        let newPassword = '';
        for (let i = 0; i < length; i++) {
            newPassword += availableChars.charAt(Math.floor(Math.random() * availableChars.length));
        }
        setPassword(newPassword);
    }, [length, characters, numbers, setPassword])


    useEffect(() => {
        generatePassword()
    }, [length, characters, numbers, setPassword]);






    return (
        <div className='w-full h-screen bg-red-400 py-8 '>


            <div className="main-container bg-red-400 w-[50vw] mx-auto my-[15vh] py-8 px-8 rounded">
                <h1 className='px-4 text-4xl font-bold'>Random <span className='text-purple-500'>Password</span> Generator
                    <i className="fa-solid fa-bolt bg-white"></i> </h1>

                <div className="input-container h-10 flex justify-center my-12">
                    <input className='h-full w-10/12 rounded-s-lg outline-none indent-2 font-semibold text-pink-600'
                        type="text"
                        value={password}
                        onChange={(e) => setLength(e.target.value.length)}
                        readOnly
                        ref={passwordRef}
                    />
                    <button
                        className='bg-blue-400 h-full px-4 rounded-e-lg font-semibold hover:scale-110 hover:duration-150 duration-150 hover:rounded'
                        onClick={(e) => {
                            passwordRef.current?.select();
                            window.navigator.clipboard.writeText(password)
                        }}

                    >Copy</button>
                </div>

                <div className=" bottom my-8 px-4 py-2 flex justify-between items-center text-xl">
                    <input
                        className='range'
                        type="range"
                        min={8}
                        max={20}
                        value={sliderValue}
                        onChange={handleSliderChange}
                    />
                    <p>Length: ({length})</p>


                    <label htmlFor="numbers" className='flex items-center'>
                        <input
                            className='mr-2 mt-1 h-[20px] w-[20px]'
                            type="checkbox"
                            id="numbers"
                            onChange={handleNumbers}
                        />
                        Numbers
                    </label>

                    <label htmlFor="characters" className='flex items-center'>
                        <input
                            className='mr-2 mt-1 h-[20px] w-[20px]'
                            type="checkbox"
                            id="characters"
                            onChange={handleCharacters}

                        />
                        Characters
                    </label>

                </div>

            </div>

        </div>
    )
}

export default PasswordGenerator