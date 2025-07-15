import conf from "../env_import/conf";
import {Client , Account , ID} from "appwrite" ;


export class AuthService {
    client = new Client();
    account ;

    constructor(){
        this.client.setProject(conf.appwrite_project_id)
        this.client.setEndpoint(conf.appwrite_api_endpoint_url)

        this.account = new Account(this.client) ;

    }

      async CreateAccount({email , password , name}) {
             try {
               const userAccount =    await this.account.create(ID.unique(), email , password , name)
               if(userAccount){
                // call another method  create ho gya toh login kra  do direct
                  return this.Login({email , password});
               }
               else {
                    return userAccount; 
               }
             }  
             catch (error) {
                throw error ;
             }
      }

      async Login({email , password}){
        try {
          const LoginUser = await this.account.createEmailPasswordSession(email, password);
          if(LoginUser){
            return LoginUser
          }
          else {
            return null;
          }
        }
        catch(error){
           throw error;
        }
      }

       async CurrentUser(){
        try {
           return  await this.account.get();  // is in case error aa gya catch ne value return krdi toh dikaat ayegi 
        } catch (error) {
            console.log(error);
        }
          return null ;
       }

       async Logout (){
        try {
        await this.account.deleteSessions();   // from the website you are using .. sessions (jaha se bhi login kr rkha ho)
        }
        catch(error){
      console.log("Difficulty in logout of the user " ,  error);
        }
       }


}

const authservice = new AuthService() ;  // lowercase wala object hai

export default authservice ;


// new keyword can have access to all the object , contructor and all  