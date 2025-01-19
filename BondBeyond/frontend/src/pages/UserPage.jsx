import  { useEffect, useState } from 'react'
import UserHeader from '../componenets/UserHeader'
import UserPost from '../componenets/UserPost'
import { useParams } from 'react-router-dom';
import useShowToast from '../hooks/useShowToast.js'
const UserPage = () => {
  const [user,setUser]=useState(null);
  const { username } = useParams();
  const showToast = useShowToast()
  useEffect(()=>{
    const getuser =async () =>{
      try {
        const res = await fetch(`/api/users/profile/${username}`);
        const data = await res.json();
        if(data.error){
          showToast("Error",data.error,"error")
          return ;
        }
        setUser(data);
      } catch (error) {
        showToast("Error",error,"error")
      }
    }
    getuser();
  },[username,showToast]);
  if(!user) return null;
  return (
    <>
      <UserHeader user={user}></UserHeader>
      <UserPost likes={1234543} replies={4563} postImg="/ak.png" postTitle={"give me a good blowjob" }></UserPost>
      <UserPost likes={123454354} replies={456} postImg="/post3.png.png" postTitle={"kori ki choti lmd" }></UserPost>
      <UserPost likes={1234543342} replies={453} postImg="/pkichu.png" postTitle={"Krishan loves pikachu" }></UserPost>
      <UserPost likes={123454365} replies={563}  postTitle={"let's go !!" }></UserPost>
    </>
  )
}

export default UserPage