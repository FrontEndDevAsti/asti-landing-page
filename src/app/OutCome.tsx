"use client"
import React from "react";
import { Grid} from "@mui/material";





export default function Cards() {

  return (
    <>
    <Grid container p={2}>
<Grid item xs={12} md={6} lg={3}>
<div className="m-12 bg-gray-400 max-w-[500px] rounded-xl hover:bg-gray-600 hover:scale-110 duration-700 p-5">
      
      <h4 className="py-2 text-white font-bold">Civil Engineering</h4>
      <p className="text-base leading-7 text-white font-semibold space-y-4">Shape Your Career with ASTI Industry-Driven Civil Engineering Courses</p>
      <p className="text-sm leading-7 text-slate-300 space-y-4">Structural engineer</p>
      <p className="text-sm leading-7 text-slate-300 space-y-4">Geotechnical Engineer</p>
      <p className="text-sm leading-7 text-slate-300 space-y-4">Environmental engineer</p>
      <p className="text-sm leading-7 text-slate-300 space-y-4">Construction Engineer</p>

    </div>
</Grid>

<Grid item xs={12} md={6} lg={3}>
<div className="m-12 bg-gray-400 max-w-[500px] rounded-xl hover:bg-gray-600 hover:scale-110 duration-700 p-5">
      
      <h4 className="py-2 text-white font-bold">Civil Engineering</h4>
      <p className="text-base leading-7 text-white font-semibold space-y-4">Shape Your Career with ASTI Industry-Driven Civil Engineering Courses</p>
      <p className="text-sm leading-7 text-slate-300 space-y-4">Structural engineer</p>
      <p className="text-sm leading-7 text-slate-300 space-y-4">Geotechnical Engineer</p>
      <p className="text-sm leading-7 text-slate-300 space-y-4">Environmental engineer</p>
      <p className="text-sm leading-7 text-slate-300 space-y-4">Construction Engineer</p>

    </div>
</Grid>
    </Grid>


    </>

  );
}