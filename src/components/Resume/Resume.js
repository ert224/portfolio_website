import './Resume.scss';
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import Loader from 'react-loaders';

const Resume = () => {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="pdf_page">
      <div className="iframe-container">
        <iframe 
          title='resume_pdf'
          src="https://drive.google.com/file/d/1d9IgjxjxsbT5pvLgr8eatJkXYfFibb1c/preview"
          allow="autoplay"
        ></iframe>
      </div>
      <Loader type="pacman" />
    </div>
  );
}  

export default Resume;
