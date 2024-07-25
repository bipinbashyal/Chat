import { RiUserVoiceFill } from "react-icons/ri";

const SendVoice=function(){
    const startRecording=()=>{
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            console.log("getUserMedia supported.");
            navigator.mediaDevices
              .getUserMedia(
                // constraints - only audio needed for this app
                {
                  audio: true,
                },
              )
          
              // Success callback
              .then((stream) => {
                const mediaRecorder = new MediaRecorder(stream);
                mediaRecorder.start();
                console.log(mediaRecorder.state);
                console.log("recorder started");
                setTimeout(()=>{
                        mediaRecorder.stop();
                },1000)                
              })
          
              // Error callback
              .catch((err) => {
                console.error(`The following getUserMedia error occurred: ${err}`);
              });
          } else {
            console.log("getUserMedia not supported on your browser!");
          }
    }
    return(
        <div onClick={startRecording} className='animate delay-100 cursor-pointer rounded-full p-[0.8vw] hover:bg-slate-500'>
                <RiUserVoiceFill />
              </div>
    )
}

export default SendVoice
