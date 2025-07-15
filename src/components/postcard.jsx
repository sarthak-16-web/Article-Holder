  // import services from "../appwrite/database_services";
  // import React from "react";
  // import { Link } from "react-router-dom";

  // function Postcard({
  //   $id ,
  //   title ,
  //   featured_Image,
  //   className = ' '
  // } ,ref )
  // {
  //   // $id is the unique identifier for the post
  //   // title is the title of the post 
  //     return(
  //         <Link to={`/post/${$id}`} >
  //             <div className="w-full bg-gray-100 rounded-xl p-4">
  //                 <div className="w-full justify-center mb-4">
                    
  //                   <img src={services.getFileUrl(featured_Image)}   
  //                  alt={title}
                        
  //                 className='rounded-xl' /> 
  //             </div>
  //                 <h2
  //               className='text-xl font-bold'>{title}</h2>
  //             </div>
  //         </Link>
  //     )
  // }

  // export default Postcard

//   import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import services from "../appwrite/database_services";

// function Postcard({
//   $id,
//   title,
//   featured_Image,
//   className = ""
// }, ref) {
//   const [imageUrl, setImageUrl] = useState("/placeholder.png");

//   useEffect(() => {
//     async function fetchImage() {
//       if (featured_Image) {
//         const url = await services.getFileUrl(featured_Image);
//         if (url) {
//           setImageUrl(url);
//         }
//       }
//     }
//     fetchImage();
//   }, [featured_Image]);

//   return (
//     <Link to={`/post/${$id}`}>
//       <div className="w-full bg-gray-100 rounded-xl p-4">
//         <div className="w-full justify-center mb-4">
//           <img
//             src={imageUrl}
//             alt={title}
//             className="rounded-xl"
//           />
//         </div>
//         <h2 className="text-xl font-bold">{title}</h2>
//       </div>
//     </Link>
//   );
// }

// export default Postcard;


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import services from "../appwrite/database_services";

function Postcard({ $id, title, featured_Image, className = "" }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    let isCancelled = false;

    async function fetchImage() {
      if (featured_Image) {
        try {
          const url = await services.getFileUrl(featured_Image);
          if (!isCancelled && url) {
            setImageUrl(url);
          }
        } catch (error) {
          console.error("Failed to load image:", error);
        }
      }
    }

    fetchImage();

    return () => {
      isCancelled = true;
    };
  }, [featured_Image]);

  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title}
              className="rounded-xl object-cover w-full h-48"
            />
          ) : (
            <div className="w-full h-48 bg-gray-300 flex items-center justify-center rounded-xl">
              <span className="text-gray-500 text-sm">Loading image...</span>
            </div>
          )}
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default Postcard;
