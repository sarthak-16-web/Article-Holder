import conf from "../env_import/conf";
import { Client,  Databases, Query, Storage , ID } from "appwrite";


export class Services {
    client = new Client();
    databases;
    storage;   

    constructor(){
        this.client.setProject(conf.appwrite_project_id);
        this.client.setEndpoint(conf.appwrite_api_endpoint_url);   
        
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);      // bukcet bhi bol do kuch bhi do 
    }
    
    // Post services

   async createPost(  {slug ,title , content , featured_Image , status , user_id}){
      try {
        await this.databases.createDocument(
            conf.appwrite_database_id ,
            conf.appwrite_collection_id ,
           slug,
          
            {  
               
              title ,
              content , 
              featured_Image ,
              status ,
              user_id
            }
        )
        
      } catch (error) {
        console.log("failed to create post" , error)
      }
   }
      

   async updatePost(slug , {title   , content , featured_Image , status} ){
      try {
          await this.databases.updateDocument(
            conf.appwrite_database_id ,
            conf.appwrite_collection_id ,
            slug,   // document id  
            {
               title ,
              content , 
              featured_Image ,
              status 
              
            }
          )
      } catch (error) {
        console.log("failed to update post" , error)
      }
   }

   async DeletePost(slug){
    // slug is the document id in the database
      // slug is the unique identifier for the post
     try {
       await this.databases.deleteDocument(
        conf.appwrite_database_id ,
        conf.appwrite_collection_id ,
        slug 
       )
       return true
     } catch (error) {
      console.log("Failed to delete the post" , error);
      return false; 
     }
   }

   async GetPost(slug){
    try {
      return await this.databases.getDocument(
        conf.appwrite_database_id ,
        conf.appwrite_collection_id ,
        slug
      )
    } catch (error) {
      console.log("Failed to get the post" , error);
    }
   }

   async GetPosts(Queries = [Query.equal("status" , "active")]){
    try {
      return await this.databases.listDocuments(
        conf.appwrite_database_id ,
        conf.appwrite_collection_id ,
        Queries // Queries is an array of Query objects,
      // we have defined query above in the function with the varaiable name Queries so need to create here
         
        
      )
    } catch (error) {
      console.log("Failed to get the posts" , error);
      return false;
    }
   }


   //file upload service 

    async UploadFile(file){
        try {
          return await this.storage.createFile(
            conf.appwrite_bucket_id ,
            ID.unique() , // unique id for the file 
            file 
          )
        } catch (error) {
          console.log("Failed to upload the file" , error);
          return false;
        }
    }
    
    async DeleteFile(fileId){
      try {
         return await this.storage.deleteFile(
           conf.appwrite_bucket_id,
           fileId
         )
         return true;
      } catch (error) {
         console.log("Failed to delete the file" , error);
         return false;
      }
  }

    // getFileUrl(fileId){
    //     return this.storage.getFileView(
    //     conf.appwrite_bucket_id,
    //     fileId
    //    ).href ;
        
    // } 
//     getFileUrl(fileId) {
//     try {
//         // Get the Appwrite URL object
//         const url = this.storage.getFileView(
//             conf.appwrite_bucket_id,
//             fileId
//         );

//         // Appwrite SDK v10+ returns a URL object, get the .href
//         return url?.href ?? url?.toString?.() ?? "";
//     } catch (error) {
//         console.log("Failed to get the file view URL:", error);
//         return "";
//     }
// }
// async getFileUrl(fileId){
//     try {
//         const result = await this.storage.getFileView(conf.appwrite_bucket_id, fileId);
//         return result.href;
//     } catch (error) {
//         console.log("Failed to get File View:", error);
//         return "";
//     }
// }
async getFileUrl(fileId) {
  try {
    console.log("[Services] Calling getFileView with:", conf.appwrite_bucket_id, fileId);
    const result = await this.storage.getFileView(conf.appwrite_bucket_id, fileId);
    console.log("[Services] getFileView result:", result);

    // Appwrite SDK v10 returns URL object directly
    if (result && typeof result === "object" && "href" in result) {
      return result.href;
    }

    // fallback
    return result?.toString?.() ?? "";
  } catch (error) {
    console.error("[Services] Error in getFileUrl:", error);
    return "";
  }
}





}

const services = new Services();

export default services;



//A slug in a database (or in web development generally)
//  is a URL-friendly, human-readable identifier for a specific resource,
//  usually derived from a title or name.