
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import services from "../appwrite/database_services.js"
import { Button, Container } from "../components/import_component" 
import parse from "html-react-parser"
import { useSelector } from "react-redux"

export default function Post() {
  const [post, setPost] = useState(null)
  const { slug } = useParams()
  const navigate = useNavigate()
  const [imageUrl, setImageUrl] = useState("") 
  const userData = useSelector((state) => state.auth.userData)

 
  const isAuthor = post && userData ? post.user_id === userData.$id : false

  
  useEffect(() => {
    if (slug) {
      services.GetPost(slug).then((fetchedPost) => {
        if (fetchedPost) {
          setPost(fetchedPost)
        } else {
          navigate("/") 
        }
      })
    } else {
      navigate("/") 
    }
  }, [slug, navigate])


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
          if (!isCancelled) setImageUrl("/placeholder.svg?height=400&width=600") 
        }
      } else if (!isCancelled) {
        setImageUrl("/placeholder.svg?height=400&width=600") 
      }
    }
    fetchImage()
    return () => {
      isCancelled = true
    } 
  }, [post]) 


  const deletePost = () => {
    services.DeletePost(post.$id).then((status) => {
      if (status) {
        services.DeleteFile(post.featured_Image) 
        navigate("/")
      }
    })
  }

  return post ? (
    <div className="min-h-screen py-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Container>
        <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden p-8">
          
          <div className="w-full mb-6 relative rounded-xl overflow-hidden shadow-md border border-gray-100">
            {imageUrl ? (
              <img
                src={imageUrl || "/placeholder.svg"}
                alt={post.title}
               className="w-full max-h-96 object-contain rounded-xl bg-white"

                 
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

          
          <div className="browser-css text-gray-800 leading-relaxed text-lg">{parse(post.content)}</div>
        </div>
      </Container>
    </div>
  ) : null
}
