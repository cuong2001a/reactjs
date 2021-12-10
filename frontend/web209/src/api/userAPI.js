import React from 'react'
import { axiosClient } from './axiosClient'
export const UserAPI =  {
   signUp(user){
    const url = `/signup`;
    return axiosClient.post(url,user)
   },
   signIn(user){
    const url = `/signin`;
    return axiosClient.post(url,user)
   },
   signOut(){
    const url = `/signout`;
    return axiosClient.get(url)
   },
   list(){
      const url = `/user`;
      return axiosClient.get(url)
   },
   findOne(id){
      const url = `/user/${id}`
      return axiosClient.get(url)
   },
   edit(id,data){
      const url= `/user/${id}`
      return axiosClient.put(url,data)
   }
}

