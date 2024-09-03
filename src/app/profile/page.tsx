'use client';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { FaUser, FaEnvelope, FaUniversity, FaPhone, FaGenderless, FaBirthdayCake, FaUserGraduate } from 'react-icons/fa';

interface UserDetails {
  name: string;
  emailId: string;
  department: string;
  facultyName: string;
  semester: string;
  UG_OR_PG: string;
  mobile_number: number;
  Gender: string;
  DOB: string;
  Specialization: string;
  SRMIST_Mail_ID: string;
  alternate_number: number;
  Section: string;
}

export default function Profile() {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('userDetails');

    if (user) {
      setUserDetails(JSON.parse(user));
    } else {
      router.push('/');
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>User Profile</title>
      </Head>
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-4xl w-full">
          <h1 className="text-4xl font-bold text-indigo-600 mb-8">Profile Page</h1>
          {userDetails ? (
            <div className="grid grid-cols-2 gap-6 bg-gray-50 p-6 rounded-lg shadow-inner">
              <div className="flex items-center bg-white p-4 rounded-md shadow">
                <FaUser className="text-indigo-500 mr-3" />
                <div className="text-left">
                  <div className="font-medium text-gray-600">Name</div>
                  <div className="text-gray-800">{userDetails.name}</div>
                </div>
              </div>
              <div className="flex items-center bg-white p-4 rounded-md shadow">
                <FaEnvelope className="text-indigo-500 mr-3" />
                <div className="text-left">
                  <div className="font-medium text-gray-600">Email</div>
                  <div className="text-gray-800">{userDetails.emailId}</div>
                </div>
              </div>
              <div className="flex items-center bg-white p-4 rounded-md shadow">
                <FaUniversity className="text-indigo-500 mr-3" />
                <div className="text-left">
                  <div className="font-medium text-gray-600">Department</div>
                  <div className="text-gray-800">{userDetails.department}</div>
                </div>
              </div>
              <div className="flex items-center bg-white p-4 rounded-md shadow">
                <FaUserGraduate className="text-indigo-500 mr-3" />
                <div className="text-left">
                  <div className="font-medium text-gray-600">Faculty Advisor Name</div>
                  <div className="text-gray-800">{userDetails.facultyName}</div>
                </div>
              </div>
              <div className="flex items-center bg-white p-4 rounded-md shadow">
                <FaUserGraduate className="text-indigo-500 mr-3" />
                <div className="text-left">
                  <div className="font-medium text-gray-600">Semester</div>
                  <div className="text-gray-800">{userDetails.semester}</div>
                </div>
              </div>
              <div className="flex items-center bg-white p-4 rounded-md shadow">
                <FaUserGraduate className="text-indigo-500 mr-3" />
                <div className="text-left">
                  <div className="font-medium text-gray-600">UG/PG</div>
                  <div className="text-gray-800">{userDetails.UG_OR_PG}</div>
                </div>
              </div>
              <div className="flex items-center bg-white p-4 rounded-md shadow">
                <FaPhone className="text-indigo-500 mr-3" />
                <div className="text-left">
                  <div className="font-medium text-gray-600">Mobile Number</div>
                  <div className="text-gray-800">{userDetails.mobile_number}</div>
                </div>
              </div>
              <div className="flex items-center bg-white p-4 rounded-md shadow">
                <FaGenderless className="text-indigo-500 mr-3" />
                <div className="text-left">
                  <div className="font-medium text-gray-600">Gender</div>
                  <div className="text-gray-800">{userDetails.Gender}</div>
                </div>
              </div>
              <div className="flex items-center bg-white p-4 rounded-md shadow">
                <FaBirthdayCake className="text-indigo-500 mr-3" />
                <div className="text-left">
                  <div className="font-medium text-gray-600">DOB</div>
                  <div className="text-gray-800">{userDetails.DOB}</div>
                </div>
              </div>
              <div className="flex items-center bg-white p-4 rounded-md shadow">
                <FaUserGraduate className="text-indigo-500 mr-3" />
                <div className="text-left">
                  <div className="font-medium text-gray-600">Specialization</div>
                  <div className="text-gray-800">{userDetails.Specialization}</div>
                </div>
              </div>
              <div className="flex items-center bg-white p-4 rounded-md shadow">
                <FaEnvelope className="text-indigo-500 mr-3" />
                <div className="text-left">
                  <div className="font-medium text-gray-600">SRMIST Mail ID</div>
                  <div className="text-gray-800">{userDetails.SRMIST_Mail_ID}</div>
                </div>
              </div>
              <div className="flex items-center bg-white p-4 rounded-md shadow">
                <FaPhone className="text-indigo-500 mr-3" />
                <div className="text-left">
                  <div className="font-medium text-gray-600">Alternate Number</div>
                  <div className="text-gray-800">{userDetails.alternate_number}</div>
                </div>
              </div>
              <div className="flex items-center bg-white p-4 rounded-md shadow">
                <FaUserGraduate className="text-indigo-500 mr-3" />
                <div className="text-left">
                  <div className="font-medium text-gray-600">Section</div>
                  <div className="text-gray-800">{userDetails.Section}</div>
                </div>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}
