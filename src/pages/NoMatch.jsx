import React from 'react'
import { Link } from 'react-router';

const NoMatch = () => {

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-blue-700 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">Page not found!</p>
      <Link
        to="/dashboard"
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go to Home
      </Link>
    </div>
  )
}

export default NoMatch;