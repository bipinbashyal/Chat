import { FaFileUpload } from "react-icons/fa";

const fileUploader=()=>{
    const fileInput=document.createElement("input");
    fileInput.type="file";
    fileInput.addEventListener('change', function func() {
        // Access the selected file(s)
        let selectedFile = fileInput.files[0];
        console.log('Selected file:', selectedFile);
      });
    fileInput.click();
}

const FileUpload=function(){
    return(
            <div onClick={fileUploader} className='animate delay-100 cursor-pointer rounded-full p-[0.8vw] hover:bg-slate-500'>
                <FaFileUpload/>
              </div>
    )
}

export default FileUpload;