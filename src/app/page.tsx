'use client';
import { useState, FormEvent } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link';

interface UserDetails {
  name: string;
  emailId: string;
}

export default function Home() {
  const [registrationNumber, setRegistrationNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginResult, setLoginResult] = useState<string>('');
  const [menuOpen, setMenuOpen] = useState(false);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:4000/trpc/login',
        {
          registrationNumber: registrationNumber.trim(),
          password: password.trim(),
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );

      const { token, userDetails }: { token: string; userDetails: UserDetails } = response.data.result.data;

      localStorage.setItem('authToken', token);
      setLoginResult(`Login successful! Welcome, ${userDetails.name}, ${userDetails.emailId}.`);
    } catch (error: any) {
      setLoginResult(
        `Login failed: ${error.response ? error.response.data.message : 'An error occurred.'}`
      );
    }
  };

  return (
    <>
      <Head>
        <title>Placement Issue Portal</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.0.0/mdb.min.css" rel="stylesheet" />
      </Head>
      <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-white-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <Image
              src="/Srmseal.png" 
              className="mr-2 h-6 sm:h-9"
              alt="SRM Logo"
              width={40}
              height={90}
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-blue-700">
              SRM UNIVERSITY
            </span>
          </Link>
          
        </div>
      </nav>
    </header>
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:shadow-xl hover:scale-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center p-8">
              <Image src="/images.png" width={185} height={185} alt="logo" />
              <h4 className="mt-4 mb-6 text-2xl font-bold text-center text-indigo-600">
                PLACEMENT ISSUE PORTAL
              </h4>
              <form onSubmit={handleSubmit} className="w-full">
                <div className="mb-4">
                  <input
                    type="text"
                    id="registrationNumber"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                    placeholder="Your Registration Number"
                    value={registrationNumber}
                    onChange={(e) => setRegistrationNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    id="password"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                    placeholder="Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="text-center">
                  <button
                    className="w-full p-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-200"
                    type="submit"
                  >
                    Log in
                  </button>
                </div>
              </form>
              {loginResult && (
                <div className="mt-6 text-center text-indigo-600">
                  {loginResult}
                </div>
              )}
            </div>
            <div className="flex items-center justify-center bg-gradient-to-r from-indigo-700 to-indigo-500 text-white p-8 rounded-r-lg">
              <div>
                <h4 className="mb-4 text-2xl font-bold">What is Placement Issue Portal?</h4>
                <p className="text-lg">
                  Placement Issue Portal provides a seamless platform for students to raise concerns and issues
                  related to college placements. Connect with faculty and ensure your voice is heard effectively,
                  making the placement process smoother and more transparent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
