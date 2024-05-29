import React from 'react'
import UserHeader from '../componenets/UserHeader'
import UserPost from '../componenets/UserPost'

const UserPage = () => {
  return (
    <>
      <UserHeader></UserHeader>
      <UserPost likes={1234543} replies={4563} postImg="/ak.png" postTitle={"give me a good blowjob" }></UserPost>
      <UserPost likes={123454354} replies={456} postImg="/post3.png.png" postTitle={"kori ki choti lmd" }></UserPost>
      <UserPost likes={1234543342} replies={453} postImg="/pkichu.png" postTitle={"Krishan loves pikachu" }></UserPost>
      <UserPost likes={123454365} replies={563}  postTitle={"let's go !!" }></UserPost>
    </>
  )
}

export default UserPage

