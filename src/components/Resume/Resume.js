import Loader from 'react-loaders';
import './Resume.scss';
import React from 'react';
import {useState} from 'react';
// import 'bootstrap/dist/css/boootstrap.min.css';

import {Viewer, Worker} from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import myPDF from './Tepan_Erick_Resume.pdf'
const Resume = () => {
    const viewPDF = myPDF;
    const newplugin = defaultLayoutPlugin();
    return (
        <div className="container resume-page">
        <div className="text-zone">
            <h1> R E S U M E</h1>
        </div>
        <div className='pdf-container'>
                <Worker workerUrl = "https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
                    {
                        Viewer && <>
                            <Viewer fileUrl = {viewPDF} plugins= {[newplugin]}/>
                        </>
                    }
                    {
                        !viewPDF && <>No PDF</>
                    }
                </Worker>
            </div>
        </div>
    );
}

export default Resume