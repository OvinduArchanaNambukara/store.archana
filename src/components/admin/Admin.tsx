import React, {useState} from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import {useDropzone} from 'react-dropzone';

export const Demo: React.FC = () => {
  const [image, setImage] = useState('');
  const [cropData, setCropData] = useState("#");
  const [cropper, setCropper] = useState<any>();
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) {
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as any);
      };
      reader.readAsDataURL(acceptedFiles[0]);
    }
  });

  const onChange = () => {
    /*
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
          files = e.dataTransfer.files;
        } else if (e.target) {
          files = e.target.files;
        }

     */


  };

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
  };

  return (
      <div className='admin-image'>
        <div {...getRootProps({className: 'dropzone'})} className='border border-danger'>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>


        <div style={{width: "100%"}}>
          <input type="file" onChange={onChange}/>
          <br/>
          <br/>
          <Cropper
              style={{height: 400, width: "100%"}}
              zoomTo={0.5}
              initialAspectRatio={1}
              preview=".img-preview"
              src={image}
              viewMode={1}
              minCropBoxHeight={10}
              minCropBoxWidth={10}
              background={false}
              responsive={true}
              autoCropArea={1}
              checkOrientation={false}
              onInitialized={(instance) => {
                setCropper(instance);
              }}
              guides={true}
          />
        </div>
        <div>
          <div className="box" style={{width: "50%", float: "right"}}>
            <h1>Preview</h1>
            <div
                className="img-preview"
                style={{width: "100%", float: "left", height: "300px"}}
            />
          </div>
          <div
              className="box"
              style={{width: "50%", float: "right", height: "300px"}}
          >
            <h1>
              <span>Crop</span>
              <button style={{float: "right"}} onClick={getCropData}>
                Crop Image
              </button>
            </h1>
            <img style={{width: "100%"}} src={cropData} alt="cropped"/>
          </div>
        </div>
        <br style={{clear: "both"}}/>
      </div>
  );
};

export default Demo;
