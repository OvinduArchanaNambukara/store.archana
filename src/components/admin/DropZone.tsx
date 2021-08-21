import React from "react";
import {useDropzone} from "react-dropzone";
import upload from "../../assets/images/admin/upload-icon.png"
import {Col, Row} from "react-bootstrap";

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
      <Col xs={12}>
        <Row className='justify-content-center'>
          <div {...getRootProps({className: 'dropzone'})}>
            <input {...getInputProps()} />
            <Col xs={12} className='text-center m-0 p-0'>
              <img src={upload}/>
              <h5>Drag & drop image here, or click to select files</h5>
            </Col>
          </div>
        </Row>
      </Col>
  );
}

export default DropZone;
