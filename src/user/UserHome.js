import React, { useState } from 'react';
import wbys from '../images/wbys.jpg'
import shape from '../images/shapeofu.jpg';
import wbysaudio from '../audio/wbysaudio.mp3';
import shapeofu from '../audio/shapeofu.mp3';
import startboy from '../images/starboy.jpg';
import starboy from '../audio/starboy.mp3';
import lethergo from '../images/lethergo.jpg';
import letergo from '../audio/passenger_let_her_go.mp3';
import teenagedream from '../images/teenagedream.png';
import teenage from '../audio/teenagedream.mp3';
import dandelions from '../images/dandelions.jpg';
import superman from '../images/superman.jpg';
import dandii from '../audio/dandelions.mp3';
import mkbrd from '../audio/mockingbird.mp3';
import toxic from '../images/toxic.jpg';
import txq from '../audio/toxic.mp3';
import config from '../config';
const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  

  return (
    <div align="center"  >
        <br></br><br></br>
      <img src={wbys} alt='wbys' width={300} height={300}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src={shape} alt='sou' width={300} height={300}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src={startboy} alt='sb' width={300} height={300}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src={lethergo} alt='lhg' width={300} height={300}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     
      <br/>
      <audio
        src={wbysaudio}
        controls
        autoPlay={false}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      /> 
     
     
    
       <audio
        src={shapeofu}
        controls
        autoPlay={false}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        />
      

      <audio
        src={starboy}
        controls
        autoPlay={false}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        />
         

      <audio
        src={letergo}
        controls
        autoPlay={false}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      /> 
     
      
      <br/>
      <br/>
      <img src={teenagedream} alt='tngd' width={300} height={300}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src={dandelions} alt='taad' width={300} height={300}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src={superman} alt='taapp' width={300} height={300}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src={toxic} alt='taapp' width={300} height={300}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     
<br/>
      <audio
        src={teenage}
        controls
        autoPlay={false}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        />

<audio
        src={dandii}
        controls
        autoPlay={false}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      /> 

<audio
        src={mkbrd}
        controls
        autoPlay={false}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        />

       <audio
        src={txq}
        controls
        autoPlay={false}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      /> 
        
      
    </div>
  );
};

export default AudioPlayer;
