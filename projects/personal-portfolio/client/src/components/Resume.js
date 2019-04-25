import React, { Component } from 'react'
import { Document, Page } from 'react-pdf'
import resume from "./NCresume.pdf"
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {
    constructor() {
        super()
        this.state = {
            numPages: null,
            pageNumber: 1,
        }
    }
    // loading pdf
    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages })
    }
    render() {
        const { pageNumber} = this.state;
        return (
            <div className='resume'>
                <Document
                    className="pdfdoc"
                    file={resume}
                    onLoadSuccess={this.onDocumentLoadSuccess}>
                    <Page  className= "page" scale="1.75" pageNumber={pageNumber} />
                </Document>
            </div>
        )
    }
}

export default Resume
