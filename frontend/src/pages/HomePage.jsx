import { Flex, Box, Spinner } from "@chakra-ui/react";
import useShowToast from "../hooks/useShowToast";
import { useEffect, useState } from "react";
import Post from "./Post";
const HomePage = () => {
  const showToast = useShowToast();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFeedPosts = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/posts/feed");
        const data = await res.json();
        console.log(data);
        setPosts(data);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setLoading(false);
      }
    };
    getFeedPosts();
  }, [showToast]);

  return (
    <Flex gap='10' alignItems={"flex-start"}>
      <Box flex={70}>
        {!loading && posts.length === 0 && <h1>Follow some users to see the feed</h1>}
        {loading && (
          <Flex justify='center'>
            <Spinner size='xl' />
          </Flex>
        )}
        {!loading && posts.map((post) => (
          <Post key={post._id} post={post} postedBy={post.postedBy} />
        ))}
      </Box>
    </Flex>
  );
};

export default HomePage;
