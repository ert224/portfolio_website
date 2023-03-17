import './Resume.scss';
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import pdfFile from './Tepan_Erick_Resume.pdf';

const Resume = () => {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
   
    <div className="container resume-page">
      <div className="pdf_page">
      <h1>R E S U M E</h1>
        <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (_, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} renderTextLayer={false} />
          ))}
        </Document>
      </div>
    </div>
  );
};

export default Resume;
