import React from 'react';
import { GoogleLogin } from 'react-google-login';



const Clientid ="557709318514-6nfg7cmos2t83nik08oth275d9km2cve.apps.googleusercontent.com"
 const onSuccess= (res)=>{
    console.log("log in success",res.profileObj)
 }
 const onFailure = (res)=>{
    console.log("log in failure",res)
 }

const Loginform = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row">
      <div className="md:w-1/2 bg-blue-700 text-center p-40 text-2xl ... text-white " >
     Base</div>
      <div className="w-full md:w-1/2 p-8">
        <p className="text-xl text-gray-600 text-center">Welcome back!</p>
        <a href="#" className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
          <div className="px-4 py-3">
            <svg className="h-6 w-6" viewBox="0 0 40 40">
              
            </svg>
          </div>
          <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Google</h1>
        </a>
        <div className="mt-4 flex items-center justify-between">
          <span className="border-b w-1/5 md:w-1/4"></span>
          <a href="#" className="text-xs text-gray-500 uppercase">or login with email</a>
          <span className="border-b w-1/5 md:w-1/4"></span>
            <GoogleLogin
      clientId={Clientid}
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
    />
        </div>
       
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
          <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
        </div>
        <div className="mt-4">
          <div className="flex justify-between">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <a href="#" className="text-xs text-gray-500">Forget Password?</a>
          </div>
          <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
        </div>
        <div className="mt-8">
          <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Login</button>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="border-b w-1/5 md:w-1/4"></span>
          <a href="#" className="text-xs text-gray-500 uppercase">or sign up</a>
          <span className="border-b w-1/5 md:w-1/4"></span>
        </div>
      </div>
    </div>
  )
}

export default Loginform;
