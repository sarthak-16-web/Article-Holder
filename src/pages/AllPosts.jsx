
import { useState, useEffect } from "react"
import { Container, Postcard } from "../components/import_component"
import services from "../appwrite/database_services.js"

function AllPosts() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    services.GetPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap -mx-2">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <Postcard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPosts
