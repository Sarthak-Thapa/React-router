import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {

  // Although this works the below add more advance [Pre processing the data are fetched more quickly]

  // const [data, setData] = useState([]);
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/Sarthak634-git')
  //   .then((response) => response.json())
  //   .then(data=> {
  //     console.log(data)
  //     setData(data)
  //   })
  // },[])
  const data = useLoaderData()
  return (
    
    <>
      <div className="text-center bg-slate-900 text-white font-semibold text-3xl p-4">
        Github Followers: {data.followers}
        <div className="">
          <img
            src={data.avatar_url}
            alt="image" width={300}
          />
        </div>
      </div>
    </>
  );
};

export default Github;

export const gitInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Sarthak634-git')
  return response.json()
}
