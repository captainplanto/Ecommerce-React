import React, { FC } from "react";
import Navbar from "../../components/navbars/Navbar.component";
import { CircularProgress } from "@mui/material";
import { useFetch } from "../../hooks/useFetch";
import Collection from "../../components/common/Collection.component";
import CategoryNavbarComponent from "../../components/navbars/CategoryNavbar.component";
interface ITitle{
  isHeadPhone?:boolean;
}
const Headphones:FC<ITitle> = ({isHeadPhone}) => {
  const { data, loading } = useFetch({ api: "/seeding/data.json" });
  return (
 <>
  
 <CategoryNavbarComponent isHeadphone={!isHeadPhone}/>
 
      {loading || data === undefined ? (
        <CircularProgress />
      ) : (
        <Collection data={data.slice(1, 4)} />
      )}
  </>
  );
};

export default Headphones;


