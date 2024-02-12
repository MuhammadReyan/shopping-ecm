import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='bg-black w-full p-2'>
                <h3 className='text-white font-inter text-2xl font-bold tracking-normal leading-none text-center'>
                    Welcome All
                </h3>
            </div>


            <div className='flex justify-around items-center'>
                {/* =============================== Right Side Logo ==============================   */}
                <div>
                    <img className='h-20 w-full cursor-pointer' src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/online-store-logo%2C-e-commerce-logo-design-template-3622b8fad4cd402bb73e64d343396d6f_screen.jpg?ts=1665492190" alt="store" />
                </div>

                {/* ===============================  Left Side  ==============================   */}

                <div className='flex flex-row items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#ff4d00" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                    </svg>
                    <button className='font-inter font-medium text-base tracking-normal leading-none text-center mr-4'>Logout</button>


                    <div className='flex flex-row items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#ff4d00" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                        <p className='font-inter font-medium text-base tracking-normal leading-none text-center mr-2'>Whish List </p>
                    </div>
                    <div className='flex flex-row items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#ff4d00" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                        <p className='font-inter font-medium text-base tracking-normal leading-none text-center mr-2'>Shopping Bag </p>
                    </div>
                </div>
            </div>

            {/* ==========================================================   Offer Part ==========================================================  */}

            <div className='flex justify-around  bg-orange-900 w-full p-2' >
                <div className='text-white font-inter font-medium text-base tracking-normal leading-none text-center'>
                    50% OFF
                </div>
                <div className='text-white font-inter font-medium text-base tracking-normal leading-none text-center'>
                Free Shipping And Returns
                </div>
                <div className='text-white font-inter font-medium text-base tracking-normal leading-none text-center'>
                    Different Payment Methods
                </div>
            </div>

        </>
    )
}

export default Navbar
