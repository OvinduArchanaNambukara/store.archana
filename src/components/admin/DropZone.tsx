import React from "react";
import {useDropzone} from "react-dropzone";

type DropZoneProps = {
  onDropOrSelectImage: (files: File[]) => void
}

const DropZone: React.FC<DropZoneProps> = (props) => {
  const {onDropOrSelectImage} = props;

  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) {
        return;
      }
      onDropOrSelectImage(acceptedFiles);
    }
  });

  return (
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>

  );
}

export default DropZone;
