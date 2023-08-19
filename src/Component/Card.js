import React, { useState } from 'react'
import axios from 'axios'
import Loader from './Loader'


const Card = () => {
    const [userName, setUserNmae] = useState()
    const [gitUser, setGitUser] = useState()
    const [loader, setLoader] = useState(false)
    const [errorUser, setErrorUser] = useState(false)


    async function fetchUserData(userName) {
        try {
            const response = await axios.get(`https://api.github.com/users/${userName}`);
            setErrorUser(false)

            return response.data; // Return the user data
        } catch (error) {
            console.log(error)
            setErrorUser(true)
        }
    }

    const formSubmit = async (e) => {
        e.preventDefault()
        setErrorUser(false)
        console.log(userName)
        setLoader(true)
        const userData = await fetchUserData(userName);

        setGitUser(userData)
        console.log(gitUser)
        setLoader(false)
        setUserNmae()
    }
    const dateFormate = (DateToString) => {
        const DateParse = new Date(DateToString).toLocaleDateString("fr-CA");
        return DateParse;
    };

    return (
        <>

            {/*form  */}
            <form onSubmit={(e) => formSubmit(e)}>
                <div className=" flex w-96 max-w-md items-center justify-center gap-2  bg-neutral-700  rounded-3xl relative">
                    <input className=" border-none font-bold tracking-widest no-underline bg-transparent outline-none text-base py-5 pr-28 pl-3 text-white"
                        type="text" name=""
                        placeholder="Search User"
                        onChange={(e) => {
                            setUserNmae(e.target.value)
                        }}
                    />
                    <button title='btn' type='submit' className=" text-white absolute right-2 w-12 h-12 flex items-center
                 justify-center rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 border-none ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                            <g clipPath="url(#clip0_2_17)">
                                <g filter="url(#filter0_d_2_17)">
                                    <path d="M23.7953 23.9182L19.0585 19.1814M19.0585 19.1814C19.8188 18.4211 20.4219 17.5185 20.8333 16.5251C21.2448 15.5318 21.4566 14.4671 21.4566 13.3919C21.4566 12.3167 21.2448 11.252 20.8333 10.2587C20.4219 9.2653 19.8188 8.36271 19.0585 7.60242C18.2982 6.84214 17.3956 6.23905 16.4022 5.82759C15.4089 5.41612 14.3442 5.20435 13.269 5.20435C12.1938 5.20435 11.1291 5.41612 10.1358 5.82759C9.1424 6.23905 8.23981 6.84214 7.47953 7.60242C5.94407 9.13789 5.08145 11.2204 5.08145 13.3919C5.08145 15.5634 5.94407 17.6459 7.47953 19.1814C9.01499 20.7168 11.0975 21.5794 13.269 21.5794C15.4405 21.5794 17.523 20.7168 19.0585 19.1814Z"
                                        stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" shapeRendering="crispEdges"></path>
                                </g>
                            </g>
                            <defs>
                                <filter id="filter0_d_2_17" x="-0.418549" y="3.70435" width="29.7139" height="29.7139" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                                    <feOffset dy="4"></feOffset>
                                    <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_17"></feBlend>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_17" result="shape"></feBlend>
                                </filter>
                                <clipPath id="clip0_2_17">
                                    <rect width="28.0702" height="28.0702" fill="white" transform="translate(0.403503 0.526367)"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
            </form>
            {errorUser && (
                <div className=' flex w-96 max-w-md items-center justify-center gap-2
                py-5 px-10 font-bold text-xl m-4 text-white bg-neutral-700 rounded-3xl'>No User Found</div>
            )}
            {/* card */}

            {gitUser ? (
                <div className=' w-1/3 rounded-3xl relative backdrop-blur-md border-2 border-solid
                 border-cyan-700 py-8 px-10 flex flex-col gap-8 mt-7 text-white'>
                    <div>
                        <img className=' m-auto w-40 h-40 rounded-full object-cover 
                        block shadow  shadow-cyan-500' src={gitUser?.avatar_url} alt='profile' />
                    </div>
                    <div className=' text-center flex flex-col'>
                        <h1 className=' text-3xl font-bold'>{gitUser?.login}</h1>
                        <div className=' gap-1 text-lg text-gray-400'>{gitUser?.name}</div>

                    </div>
                    <div className=' flex justify-around'>
                        <div className=' capitalize font-bold tracking-widest text-center'>
                            <div className=' font-bold text-2xl'>{gitUser?.public_repos}</div>
                            <div className=' font-bold text-lg'>Public Repo</div>
                        </div>
                        <div className=' capitalize font-bold tracking-widest text-center'>
                            <div className=' font-bold text-2xl'>{gitUser?.public_gists}</div>
                            <div className=' font-bold text-lg'>Public gists</div>
                        </div>

                    </div>
                    <div className='flex items-center justify-center'>
                        <div>Profile Created : {"  "} </div>

                        <div>{dateFormate(gitUser?.created_at)}</div>

                    </div>
                </div>

            ) : (loader ? (<Loader />) : null)}
        </>
    )
}

export default Card