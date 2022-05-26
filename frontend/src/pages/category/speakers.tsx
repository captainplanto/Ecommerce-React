import React from "react";
import Navbar from "../../components/common/Navbar.component";
import { CircularProgress } from "@mui/material";
import { useFetch } from "../../hooks/useFetch";
import Collection from "../../components/common/Collection.component";




const Speaker = () => {
  const { data, loading } = useFetch({ api: "/backend/data.json" });
  return (
    <>
     {loading  ||  data === undefined ? (
        <CircularProgress />
      ) :(
      <Collection data={data.slice(4)} />
        
  )}
        
   
    </>
  );
};

export default Speaker;
