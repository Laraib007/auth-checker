
import Profile from "@/pages/profile";
import Link from "next/link";
import { useEffect, useState } from "react";
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';





export default function Form( { signin, SignUp}) {

  const [inputText, setInputText] = useState('');
  const [inputText1, setInputText2] = useState('');

  const handleChange = (event) => {
   setInputText(event.target.value); 
  
   }; 
  const handleChange2 = (event) => {
     setInputText2(event.target.value);

    };

 useEffect(() => {
  const email = ( inputText)
  const pass = (inputText1)
  let prevEmails = localStorage.getItem("emails");
  let emails = prevEmails ? JSON.parse(prevEmails) : [];
  
  if(signin === false){
    setTimeout(()=> {
    let eml = {
      email: inputText,
      pass: inputText1
    };
  
    emails.push(eml);
    let stringfy = JSON.stringify(emails);
    localStorage.setItem("emails", stringfy)
  }, 300);
  if(email && pass !== "")
  document.getElementById("FormId").action = "/auth/popUpBox"
  }

   else if (signin === true) {
    const emailsa = emails.map( emaila => {
      if(email === emaila.email){
          const SingleEmail = emaila.email
           const passes = emails.map( ps => {
      if(pass === ps.pass){
          const singlePass = ps.pass

            if(  email && pass ){
       console.log(email)
        return ( 
          <>
            {document.getElementById("FormId").action = "/profile"}
            
         </>
        )
      } 
       else console.log("not work")
    } 
    
    })
  
  }
      })
  } 


});
 


  
  return ( 
    <> 
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {signin ? "Sign in to your account" : "Signup for new account"}
          </h2>
        </div>
        {/* action={signin ? "/profile" : "/auth/login"} */}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form id="FormId" action=""  className="space-y-6"  method="POST"  >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input onChange={(handleChange)} value={inputText}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input onChange={handleChange2} value={inputText1}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link
                  href={signin ? "/auth/signup" : "/auth/login"}
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  {signin
                    ? "Do not have an account? Signup"
                    : "Already have an account? Sign in"}
                </Link>
              </div>
            </div>
            <div>
              <button  onSubmit={Form} id="Okaa"
                type="submit"  
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              > 
                {signin ? "Sign in" : "Sign up"}
              </button>
            </div>
          </form >
        </div>
      </div>
    </>
  );
}
