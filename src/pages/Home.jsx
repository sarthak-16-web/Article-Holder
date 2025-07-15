// import React, {useEffect, useState} from 'react'
// import services from "../appwrite/database_services.js";
// import {Container, Postcard} from '../components/import_component'
// import {  useNavigate } from 'react-router-dom';
// import { PostForm } from '../components/import_component';  

// function Home() {
//      const navigate = useNavigate();
//     const [posts, setPosts] = useState([])

//     const navigateToPostForm = () => {
//         navigate('/add-post'); }
    
//     useEffect(() => {
//         services.GetPosts().then((posts) => {
//             if (posts) {
//                 setPosts(posts.documents)
//             }
//             else {
//                 setPosts([]);
//             }
//         })
//     }, []);
  
//     if (posts.length === 0) {
//         return (
//             <div className="w-full py-8 mt-4 text-center">
//                 <Container>
//                     <div className="flex flex-wrap">
//                         <div className="p-2 w-full">
//                             <h1 className="text-2xl font-bold hover:text-gray-500">
//                                 Login to read post </h1>
                            
//                         </div>
//                     </div>
//                 </Container>
//             </div>
//         );
    
    
//     }
//     return (
//         <div className='w-full py-8 text-center mt-4'>
//             <Container>
//                 <div className='flex flex-wrap text-center'>
//                  <div className="bg-gradient-to-r from-slate-600 to-slate-700 text-white py-16 text-center rounded-lg shadow-lg mb-8">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 tex">
//           <div className="text-center">
//             <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Article Holder</h1>
//             <p className="text-xl md:text-2xl mb-8 text-slate-200">
//               Discover, create, and share amazing articles with our community
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//               <div className="relative w-full sm:w-96">
//               </div>
             
//             </div>
//           </div>
//         </div>
//       </div>
      
//      </div>

//             </Container>
//             <div className="bg-slate-600 text-white py-16">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold mb-4">Ready to Share Your Story?</h2>
//           <p className="text-xl text-slate-200 mb-8">
//             Join our community of writers and share your knowledge with thousands of readers.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2" onClick={navigateToPostForm}>
//               Start Writing
//             </button>
            
//           </div>
//         </div>
//       </div>
//     </div>
      
//     )
// }

// export default Home


// "use client"
// import { useSelector } from "react-redux"
// import { Link } from "react-router-dom"
// // Using basic HTML buttons for maximum stability as per previous feedback
// // import { Button } from "./import_component"

// function Home() {
//   const authStatus = useSelector((state) => state.auth.status)

//   return (
//     <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50">
//       {authStatus ? (
//         // Content for logged-in users - more detailed
//         <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8 space-y-8">
//           <div className="text-center">
//             <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Welcome Back to Your Dashboard!</h1>
//             <p className="text-lg text-gray-700">Here's a quick overview of your activity and recent posts.</p>
//           </div>

//           {/* Recent Posts Section */}
//           <div className="border-t border-gray-200 pt-6">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Recent Posts : </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {/* Placeholder for individual post cards */}
//               <div className="bg-gray-100 p-4 rounded-md shadow-sm">
//                 <h3 className="font-medium text-lg mb-1">Post Title 1</h3>
//                 <p className="text-sm text-gray-600">A short description of your first post...</p>
//                 <Link to="/post/1" className="text-blue-600 hover:underline text-sm mt-2 block">
//                   Read More
//                 </Link>
//               </div>
//               <div className="bg-gray-100 p-4 rounded-md shadow-sm">
//                 <h3 className="font-medium text-lg mb-1">Post Title 2</h3>
//                 <p className="text-sm text-gray-600">Another interesting post you recently created...</p>
//                 <Link to="/post/2" className="text-blue-600 hover:underline text-sm mt-2 block">
//                   Read More
//                 </Link>
//               </div>
//               <div className="bg-gray-100 p-4 rounded-md shadow-sm">
//                 <h3 className="font-medium text-lg mb-1">Post Title 3</h3>
//                 <p className="text-sm text-gray-600">Check out your latest thoughts and ideas...</p>
//                 <Link to="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX2VPATBlqHJOQQIJFbeJvW5elcV94Jb1rsQ&s" className="text-blue-600 hover:underline text-sm mt-2 block">
//                   Read More 
//                 </Link>
//               </div>
//             </div>
//             <div className="text-center mt-6">
//               <Link to="/all-posts">
//                 <button className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-lg font-medium">
//                   View All Posts
//                 </button>
//               </Link>
//             </div>
//           </div>

//           {/* Quick Actions Section */}
//           <div className="border-t border-gray-200 pt-6">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
//             <div className="flex flex-wrap justify-center gap-4">
//               <Link to="/add-post">
//                 <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
//                   Create New Post
//                 </button>
//               </Link>
             
//             </div>
//           </div>
//         </div>
//       ) : (
//         // Content for logged-out users - more detailed landing page feel
//         <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8 space-y-8">
//           <div className="text-center">
//             <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Welcome to Our Amazing Platform!</h1>
//             <p className="text-lg text-gray-700 mb-6">Discover, create, and share content with a vibrant community.</p>
//             <div className="space-x-4">
//               <Link to="/signup">
//                 <button className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-lg font-medium">
//                   Get Started
//                 </button>
//               </Link>
//               <Link to="/login">
//                 <button className="px-8 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 text-lg font-medium">
//                   Sign In
//                 </button>
//               </Link>
//             </div>
//           </div>

//           {/* Features Section */}
//           <div className="border-t border-gray-200 pt-6">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Key Features</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
//               <div className="p-4 bg-gray-100 rounded-md shadow-sm">
//                 <h3 className="font-medium text-lg mb-1">Easy Content Creation</h3>
//                 <p className="text-sm text-gray-600">Publish your ideas effortlessly with our intuitive editor.</p>
//               </div>
//               <div className="p-4 bg-gray-100 rounded-md shadow-sm">
//                 <h3 className="font-medium text-lg mb-1">Connect & Share</h3>
//                 <p className="text-sm text-gray-600">Engage with others and share your work across platforms.</p>
//               </div>
//               <div className="p-4 bg-gray-100 rounded-md shadow-sm">
//                 <h3 className="font-medium text-lg mb-1">Discover New Ideas</h3>
//                 <p className="text-sm text-gray-600">Explore a vast collection of content from diverse creators.</p>
//               </div>
//             </div>
//           </div>

//           {/* Call to Action */}
//           <div className="border-t border-gray-200 pt-6 text-center">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Join?</h2>
//             <p className="text-lg text-gray-700 mb-6">Sign up now and start your journey with us!</p>
//             <Link to="/signup">
//               <button className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-lg font-medium">
//                 Create Your Free Account
//               </button>
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Home


"use client"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function Home() {
  const authStatus = useSelector((state) => state.auth.status)

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50">
      {authStatus ? (
        // Content for logged-in users - now with static image content
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8 space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Welcome Back to Your Dashboard!</h1>
            <p className="text-lg text-gray-700">Here's a quick overview of your activity and recent updates.</p>
          </div>

          {/* Dashboard Overview Section (Static Content) */}
        

          {/* Recent Images Section */}
          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Posts:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Placeholder for individual images */}
              <div className="bg-gray-100 p-2 rounded-md shadow-sm overflow-hidden">
                <img
                src="data:image/jpeg;base64,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"
                  alt="Recent Image 1"
                  className="w-full h-auto rounded-md object-cover"
                />
              </div>
              <div className="bg-gray-100 p-2 rounded-md shadow-sm overflow-hidden">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Recent Image 2"
                  className="w-full h-auto rounded-md object-cover"
                />
              </div>
              <div className="bg-gray-100 p-2 rounded-md shadow-sm overflow-hidden">
                <img
                  src="data:image/png;base64,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"
                  alt="Recent Image 3"
                  className="w-full h-auto rounded-md object-cover"
                />
              </div>
            </div>
            <div className="text-center mt-6">
              <Link to="/all-posts">
                <button className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-lg font-medium">
                  View All Posts
                </button>
              </Link>
            </div>
          </div>

          {/* Quick Actions Section */}
          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/add-post">
                <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                  Create New Post
                </button>
              </Link>
              
            </div>
          </div>

          {/* Recent Activity Feed (Static Content) */}
        
        </div>
      ) : (
        // Content for logged-out users - more detailed landing page feel
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8 space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Welcome to Our Amazing Platform!</h1>
            <p className="text-lg text-gray-700 mb-6">Discover, create, and share content with a vibrant community.</p>
            <div className="space-x-4">
              <Link to="/signup">
                <button className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-lg font-medium">
                  Get Started
                </button>
              </Link>
              <Link to="/login">
                <button className="px-8 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 text-lg font-medium">
                  Sign In
                </button>
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-gray-100 rounded-md shadow-sm">
                <h3 className="font-medium text-lg mb-1">Easy Content Creation</h3>
                <p className="text-sm text-gray-600">Publish your ideas effortlessly with our intuitive editor.</p>
              </div>
              <div className="p-4 bg-gray-100 rounded-md shadow-sm">
                <h3 className="font-medium text-lg mb-1">Connect & Share</h3>
                <p className="text-sm text-gray-600">Engage with others and share your work across platforms.</p>
              </div>
              <div className="p-4 bg-gray-100 rounded-md shadow-sm">
                <h3 className="font-medium text-lg mb-1">Discover New Ideas</h3>
                <p className="text-sm text-gray-600">Explore a vast collection of content from diverse creators.</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="border-t border-gray-200 pt-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Join?</h2>
            <p className="text-lg text-gray-700 mb-6">Sign up now and start your journey with us!</p>
            <Link to="/signup">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-lg font-medium">
                Create Your Free Account
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home


