// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import services from "../appwrite/database_services.js";
// import { Button, Container } from "../components/import_component";
// import parse from "html-react-parser";
// import { useSelector } from "react-redux";

// export default function Post() {
//     const [post, setPost] = useState(null);
//     const { slug } = useParams();
//     const navigate = useNavigate();
//     const [imageUrl, setImageUrl] = useState("");


//     const userData = useSelector((state) => state.auth.userData);

// const isAuthor = post && userData ? post.user_id === userData.$id : false;

//     useEffect(() => {
//         if (slug) {
//             services.GetPost(slug).then((post) => {
//                 if (post) setPost(post);
//                 else navigate("/");
//             });
//         } else navigate("/");
//     }, [slug, navigate]);

//     useEffect(() => {
//   let isCancelled = false;
//   async function fetchImage() {
//     if (post?.featured_Image) {
//       try {
//         const url = await services.getFileUrl(post.featured_Image);
//         if (!isCancelled && url) setImageUrl(url);
//       } catch (error) {
//         console.error("Error loading image:", error);
//       }
//     }
//   }
//   fetchImage();
//   return () => { isCancelled = true; };
// }, [post]);

//     const deletePost = () => {
//         services.DeletePost(post.$id).then((status) => {
//             if (status) {
//                 services.DeleteFile(post.featured_Image);
//                 navigate("/");
//             }
//         });
//     };

//     return post ? (
//         <div className="py-8">
//             <Container>
//                 <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
//                     {imageUrl ? (
//   <img
//     src={imageUrl}
//     alt={post.title}
//     className="rounded-xl object-cover max-w-2xl w-full"
//   />
// ) : (
//   <div className="w-full h-64 bg-gray-300 flex items-center justify-center rounded-xl">
//     <span className="text-gray-500 text-sm">Loading image...</span>
//   </div>
// )}

//                     {isAuthor && (
//   <div className="absolute right-6 top-6">
//     <Link to={`/edit-post/${post.$id}`}>
//       <Button bgColor="bg-green-500" className="mr-3">
//         Edit
//       </Button>
//     </Link>
//     <Button bgColor="bg-red-500" onClick={deletePost}>
//       Delete
//     </Button>
//   </div>
// )}

//                 </div>
//                 <div className="w-full mb-6">
//                     <h1 className="text-2xl font-bold">{post.title}</h1>
//                 </div>
//                 <div className="browser-css">
//                     {parse(post.content)}
//                     </div>
//             </Container>
//         </div>
//     ) : null;
// }

"use client"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import services from "../appwrite/database_services.js"
import { Button, Container } from "../components/import_component" // Assuming Button and Container are styled
import parse from "html-react-parser"
import { useSelector } from "react-redux"

export default function Post() {
  const [post, setPost] = useState(null)
  const { slug } = useParams()
  const navigate = useNavigate()
  const [imageUrl, setImageUrl] = useState("") // State to hold the fetched image URL
  const userData = useSelector((state) => state.auth.userData)

  // Determine if the logged-in user is the author of the post
  const isAuthor = post && userData ? post.user_id === userData.$id : false

  // Fetch post data when slug changes
  useEffect(() => {
    if (slug) {
      services.GetPost(slug).then((fetchedPost) => {
        if (fetchedPost) {
          setPost(fetchedPost)
        } else {
          navigate("/") // Navigate home if post not found
        }
      })
    } else {
      navigate("/") // Navigate home if no slug
    }
  }, [slug, navigate])

  // Fetch image URL when post data is available
  useEffect(() => {
    let isCancelled = false
    async function fetchImage() {
      if (post?.featured_Image) {
        try {
          const url = await services.getFileUrl(post.featured_Image)
          if (!isCancelled && url) {
            setImageUrl(url)
          }
        } catch (error) {
          console.error("Error loading image:", error)
          if (!isCancelled) setImageUrl("/placeholder.svg?height=400&width=600") // Fallback on error
        }
      } else if (!isCancelled) {
        setImageUrl("/placeholder.svg?height=400&width=600") // Fallback if no featured_Image
      }
    }
    fetchImage()
    return () => {
      isCancelled = true
    } // Cleanup for unmounted component
  }, [post]) // Re-run when post object changes

  // Delete post function
  const deletePost = () => {
    services.DeletePost(post.$id).then((status) => {
      if (status) {
        services.DeleteFile(post.featured_Image) // Delete associated file
        navigate("/") // Navigate home after deletion
      }
    })
  }

  return post ? (
    <div className="min-h-screen py-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Container>
        <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden p-8">
          {/* Featured Image Section */}
          <div className="w-full mb-6 relative rounded-xl overflow-hidden shadow-md border border-gray-100">
            {imageUrl ? (
              <img
                src={imageUrl || "/placeholder.svg"}
                alt={post.title}
               className="w-full max-h-96 object-contain rounded-xl bg-white"

                 // Fixed height for consistency
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg?height=400&width=600"
                  e.currentTarget.alt = "Image not available"
                }}
              />
            ) : (
              <div className="w-full h-96 bg-gray-200 flex items-center justify-center rounded-xl">
                <span className="text-gray-500 text-lg">Loading image...</span>
              </div>
            )}
          </div>

          {/* Post Title and Buttons Section */}
          <div className="w-full mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight text-center md:text-left mb-4 md:mb-0">
              {post.title}
            </h1>
            {isAuthor && (
              <div className="flex justify-center md:justify-end space-x-3">
                <Link to={`/edit-post/${post.$id}`}>
                  <Button
  className="px-4 py-2 text-sm font-semibold text-gray-700 bg-grey border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-200 shadow-sm"
>
  Edit
</Button>

                </Link>
                <Button
                  bgColor="bg-red-600"
                  onClick={deletePost}
                  className="px-4 py-2 text-sm font-semibold text-white rounded-md hover:bg-red-700 transition-colors duration-200 shadow-md"
                >
                  Delete
                </Button>
              </div>
            )}
          </div>

          {/* Post Content */}
          <div className="browser-css text-gray-800 leading-relaxed text-lg">{parse(post.content)}</div>
        </div>
      </Container>
    </div>
  ) : null
}
