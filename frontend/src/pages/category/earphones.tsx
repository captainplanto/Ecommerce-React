import React, { FC } from "react";

import { CircularProgress } from "@mui/material";
import { useFetch } from "../../hooks/useFetch";
import Collection from "../../components/common/Collection.component";
import CategoryNavbarComponent from "../../components/navbars/CategoryNavbar.component";

interface ITitle{
  isEarphone?:boolean;
}


const Earphone:FC<ITitle> = ({isEarphone}) => {
  const { data, loading } = useFetch({ api: "/seeding/data.json" });
  return (
    <>
     <CategoryNavbarComponent isEarphone={!isEarphone}/>
       {loading  ||  data === undefined ? (
        <CircularProgress />
      ) :(
      <Collection data={data.slice(0, 1)} />
        
  )}
        
   
    </>
  );
};

export default Earphone;
