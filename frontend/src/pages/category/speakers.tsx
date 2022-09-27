import React, { FC } from "react";
import Navbar from "../../components/navbars/Navbar.component";
import { CircularProgress } from "@mui/material";
import { useFetch } from "../../hooks/useFetch";
import Collection from "../../components/common/Collection.component";
import CategoryNavbarComponent from "../../components/navbars/CategoryNavbar.component";

interface ITitle{
  isSpeaker?:boolean;
}



const Speaker:FC<ITitle> = ({isSpeaker}) => {
  const { data, loading } = useFetch({ api: "/seeding/data.json" });
  return (
    <>
     <CategoryNavbarComponent  isSpeaker={!isSpeaker} />
     {loading  ||  data === undefined ? (
        <CircularProgress />
      ) :(
      <Collection data={data.slice(4)} />
        
  )}
        
   
    </>
  );
};

export default Speaker;
