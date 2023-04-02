import React, { useEffect, useState } from "react";

const ScreenLoader = () => {
 
useEffect(()=>{
  const loading = document.getElementById("loadingScreen");
  const html = document.querySelector("html");
    // if (loading) {
    //   loading.style.display = "none";
    // }
    if(!window.onload){
      loading.style.display = "none";
    }
    html.style.overflowY = "visible";
}, [])

  return (
    <div>
      <div id="loadingScreen" className="loadingScreen">
        <img src="/dotASH.png" className="loadingLogo" />
      </div>

    </div>
  );
};

export default ScreenLoader;
