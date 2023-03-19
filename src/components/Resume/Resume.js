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
    <div className="container resume-page">
      <div className="pdf_page">
        <h1>R E S U M E</h1>
        <div>
          <iframe 
          title='resume_pdf'
          src="https://drive.google.com/file/d/1l61d1rolfAsDIVcoPzicc4xpxMI7L0FU/preview"
          width="800" 
          height="900" 
          allow="autoplay">
            
          </iframe>
        </div>
      </div>
      <Loader type="pacman" />
    </div>
  );
};

export default Resume;
