import React from 'react';
import './home.css';
import wbys from '../images/wbys.jpg';
import lethergo from '../images/lethergo.jpg';
import harleysinhawai from '../images/harleysinhawai.jpg';
import starboy from '../images/starboy.jpg';
import toxic from '../images/toxic.jpg';
import superman from '../images/superman.jpg';
import happierthanever from '../images/happierthanever.jpg';
import shapeofu from '../images/shapeofu.jpg';
import dandelions from '../images/dandelions.jpg';
import teenagedream from '../images/teenagedream.png';
import config from '../config';


export default function Home() {
  

  return (
    <div align="center" style={{ backgroundColor: 'whitesmoke' }} >
      <br></br><br></br>

          <img src={wbys} alt='wbys' width={300} height={300} /> &nbsp;&nbsp;&nbsp;&nbsp;
          
          <img src={harleysinhawai} alt='harleysinhawai' width={300} height={300}/> &nbsp;&nbsp;&nbsp;&nbsp;
          <img src={starboy} alt='box4' width={300} height={300}/> &nbsp;&nbsp;&nbsp;&nbsp;
          <img src={toxic} alt='box5' width={300} height={300}/> &nbsp;&nbsp;&nbsp;&nbsp;
          <img src={superman} alt='box6' width={300} height={300}/> &nbsp;&nbsp;&nbsp;&nbsp;
          <br></br>
          <br></br>
        <br></br>
        <br/>
     
        
          <img src={lethergo} alt='lethergo' width={300} height={300}/>  &nbsp;&nbsp;&nbsp;&nbsp;
        
          <img src={dandelions} alt='harleysinhawai' width={300} height={300}/>  &nbsp;&nbsp;&nbsp;&nbsp;
          <img src={teenagedream} alt='box4' width={300} height={300}/> &nbsp;&nbsp;&nbsp;&nbsp;
          <img src={happierthanever} alt='box5' width={300} height={300}/> &nbsp;&nbsp;&nbsp;&nbsp;
          <img src={shapeofu} alt='box6' width={300} height={300}/> &nbsp;&nbsp;&nbsp;&nbsp;
    </div>
  );
}

 
