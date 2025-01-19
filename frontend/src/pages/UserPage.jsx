<<<<<<< HEAD
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserHeader from "../components/UserHeader";
import useShowToast from "../hooks/useShowToast";
import { Spinner, Flex } from "@chakra-ui/react";
import Post from "../components/Post";
import useGetUserProfile from "../hooks/useGetUserProfile";
import { useRecoilState } from "recoil";
import postsAtom from "../atoms/postsAtom";

const UserPage=() =>{
    const {user,loading}= useGetUserProfile();
    const {username} = useParams();
    const showToast=useShowToast(); 
    //const [loading,setLoading]= useState(true);
    const [posts,setPosts]= useRecoilState(postsAtom);
    const [fetchingPosts , setFetchingPosts]= useState(true);
// why infinite loop
    useEffect(()=>{


        const getPosts= async () =>{ 
            setFetchingPosts(true);
            try {
                const res=await fetch(`/api/posts/user/${username}`);
                const data= await res.json();
                setPosts(data);
            } catch (error) {
                showToast("Error",error,"error");
                setPosts([]);
            }finally{
                setFetchingPosts(false);
            }
        }

    
        getPosts();
    },[username,showToast,setPosts, user]);

    
    if(!user && loading){
        return(
        <Flex justifyContent={"center"}>
            <Spinner size="x1"/>
        </Flex>
        );
    }
    if(!user && !loading)return <h1>User Not Found</h1>;
    return (
		<>
			<UserHeader user={user} />
            {!fetchingPosts && posts.length===0 && <h1>User has no posts...</h1>}
            {fetchingPosts && (
                <Flex justifyContent={"center"} my={12}> 
                    <Spinner size={"x1"}/>
                </Flex>
            )}
            {posts.map((post)=>(
                <Post key={post._id} post={post} postedBy={post.postedBy} />
            ))}
		</>
	);

};

export default UserPage;
=======
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
>>>>>>> origin/main
