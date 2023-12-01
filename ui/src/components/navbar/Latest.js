import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PostsCard from "../posts/PostsCard";
import axios from 'axios'
const Latest = () => {
  const [blog, setBlog] = useState([])

  useEffect( () => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blogs/`)
        setBlog(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])


  const [post, setPost] = useState([])

  useEffect( () => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/PopularPostsApiView/`)
        setPost(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])


  return (
    <Box>
      <Typography variant="h4" align="center">
        {" "}
        Latest Recipes{" "}
      </Typography>
      <Grid
        container
        columnSpacing={{ xs: 0, sm: 1, md: 1 }}
        direction={"column"}
        padding-left= {"24px"}
        padding-right= {"24px"}
        margin-right= {"auto"}
        margin-left= {"auto"}
        

      >
        {blog.map(post => (
          <Grid item xs>
          <PostsCard title={post.title} excerpt={post.excerpt} image={post.image} blogHref={`/details/${post.slug}`} myDirection={"flex"} />
        </Grid>
        ))
    
        }
      </Grid>
      
    </Box>
  );
};

export default Latest;

