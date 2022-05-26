import React from "react";

import { CircularProgress } from "@mui/material";
import { useFetch } from "../../hooks/useFetch";
import Collection from "../../components/common/Collection.component";




const Earphone = () => {
  const { data, loading } = useFetch({ api: "/backend/data.json" });
  return (
    <>
       {loading  ||  data === undefined ? (
        <CircularProgress />
      ) :(
      <Collection data={data.slice(0, 1)} />
        
  )}
        
   
    </>
  );
};

export default Earphone;
