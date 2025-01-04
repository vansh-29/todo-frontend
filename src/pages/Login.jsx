import { useNavigate} from "react-router-dom";
import React from 'react'
import axios from 'axios'

const Login = () => {
    const navigate = useNavigate();
    async function submitHandler(event) {
    event.preventDefault(); 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // Sending the login request to the server
        const response = await axios.post('https://todo-backend-bgka.onrender.com/auth/login', {
            email: email,
            password: password
        },
        {
            withCredentials : true
        }
        
    );
    
        // If login is successful, you can handle the response
        if (response.data.success) {
            console.log(response.data.userId);
            // Store the userId or token in localStorage
            localStorage.setItem('userId', response.data.userId); // Assuming `userId` is sent in the response
    
            // You can also store a token if required
            localStorage.setItem('token', response.data.token); // Assuming `token` is sent in the response
    
            // e.g., redirect to a dashboard or show success message
            console.log('Login successful');
    
            // Redirect to the dashboard or another route using navigate
            navigate('/todo'); // If you're using `react-router-dom`
            console.log("Redirect successful");
    
        } else {
            // Handle cases where login fails but the request was successful (e.g., wrong credentials)
            console.log(response.data.message || 'Login failed');
        }
    } catch (error) {
        // Handle any errors that occur during the request (network issues, server errors, etc.)
        console.error('Error during login:', error.response?.data?.message || error.message);
        // Optionally show an error message to the user
    }
    
}

  return (
    <div>
        <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 -my-16 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                       Login to your account
                    </h1>
                    <form className="space-y-4 md:space-y-6">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required="" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>
                        
                        <button onClick={submitHandler} type="submit" className="w-full text-black bg-blue-200 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet? <a href="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Login