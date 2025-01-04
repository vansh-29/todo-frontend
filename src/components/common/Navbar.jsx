import React, { useEffect , useState } from 'react'

export default function Navbar() {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const logout = () => {
    document.cookie = `login=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
  useEffect(() =>{
    const loginCookie = document.cookie;
    if(loginCookie){
      setIsLoggedIn(true);
    }
  } , [])
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="data:image/png;base64,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"
             className="h-12" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">To-Do</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
            </li>
            <li>
              <a href="/todo" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Todo</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
            </li>
            <>
              {
                !IsLoggedIn &&
                <>
                <li>
                <a href="/signup" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Signup</a>
                </li>
                <li>
                  <a href="/login" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</a>
                </li>
                </>
              }
            </>
            <>
            {IsLoggedIn && 
              <li>
              <a href="/" onClick={logout} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Logout</a>
              </li>
            }
            </>
          </ul>
        </div>
      </div>
    </nav>

  )
}
