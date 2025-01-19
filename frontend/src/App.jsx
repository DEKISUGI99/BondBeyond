import { Box, Container, Button } from "@chakra-ui/react";
import {Navigate,Route, Routes} from 'react-router-dom'
import UserPage from "./pages/UserPage"
 import PostPage from "./pages/PostPage"
import AuthPage from "./pages/AuthPage"
import HomePage from "./pages/HomePage"
<<<<<<< HEAD
import UpdateProfilePage from "./pages/UpdateProfilePage"
import Headers from './components/Headers';
import LogoutButton from "./components/LogoutButton";
import CreatePost from "./components/CreatePost"
import userAtom from "./atoms/userAtom";
import { useRecoilValue } from "recoil";
=======
import AuthPage from "./pages/AuthPage";

import { useRecoilValue } from "recoil"
import userAtom from "./atoms/userAtom"
import LogoutButton from "./pages/LogoutButton"
import UpdateProfilePage from "./pages/UpdateProfilePage"
import CreatePost from "./componenets/CreatePost"

>>>>>>> origin/main
function App() {
const user = useRecoilValue(userAtom);

  return (
<<<<<<< HEAD
    <Box position={"relative"} w='full'> 
    <Container maxWidth='700px'>
      <Headers/>
      <Routes>
        <Route path='/' element={user ? <HomePage/> : <Navigate to='/auth'/>}/>
        <Route path="/auth" element={!user ? <AuthPage/> : <Navigate to='/'/>}/>
        <Route path="/update" element={user ? <UpdateProfilePage/> : <Navigate to='/auth'/>}/>

        <Route path="/:username" element={<UserPage/>}/>
        <Route path="/:username/post/:pid" element={<PostPage/>}/>
        {/* <Route path="/chat" element={user ? <ChatPage/> : <Navigate to={"/auth"}/> }/> */}
      </Routes>
      {user && <LogoutButton/>}
=======
    <Container maxW="620px">
      <Box display="flex">
         
        <Box flex="1" ml="4">
          <Header />
          <Routes>
            <Route path="/" element={ user ? <HomePage/> : <Navigate to="/auth"></Navigate>}/>
            <Route path="/auth//*" element={ !user ? <AuthPage/> : <Navigate to="/"></Navigate>}/>
            <Route path="/update" element={ user ? <UpdateProfilePage/> : <Navigate to='/auth'/> }></Route> 
            <Route path="/:username" element={<UserPage />} />
            <Route path="/:username/post/:pid" element={<PostPage />} />
          </Routes>
        </Box>
      </Box>
      { user && <LogoutButton/>}
>>>>>>> origin/main
      {user && <CreatePost/>}
    </Container>
    </Box>
  )
}

export default App;
