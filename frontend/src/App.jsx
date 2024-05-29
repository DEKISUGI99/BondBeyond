import { Box } from "@chakra-ui/react"
import { Container } from "@chakra-ui/react"
import { Navigate, Route, Routes } from "react-router-dom"
import UserPage from "./pages/UserPage"
import PostPage from "./pages/PostPage"
import Header from "./componenets/Header"
import HomePage from "./pages/HomePage"
import AuthPage from "./pages/AuthPage";
import './pages/LoginAndSignup.css'
import { useRecoilValue } from "recoil"
import userAtom from "./atoms/userAtom"
import LogoutButton from "./pages/LogoutButton"

function App() {
  const user= useRecoilValue(userAtom)

  return (
    <Container maxW="620px">
      <Box display="flex"> {/* Use Box to wrap sidebar and header */}
         
        <Box flex="1" ml="4"> {/* Use flex and ml for spacing */}
          <Header />
          <Routes>
            <Route path="/" element={ user ? <HomePage/> : <Navigate to="/auth"></Navigate>}/>
            <Route path="/auth//*" element={ !user ? <AuthPage/> : <Navigate to="/"></Navigate>}/>
            <Route path="/:username" element={<UserPage />} />
            <Route path="/:username/post/:pid" element={<PostPage />} />
          </Routes>
        </Box>
      </Box>
      { user && <LogoutButton/>}
    </Container>
  );
}

export default App;


