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