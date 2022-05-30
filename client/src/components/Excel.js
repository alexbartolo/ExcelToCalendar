import React from "react"
import toast, { Toaster } from 'react-hot-toast'

export default function Excel () {
    const select = () => toast("select", 
        {
            style: {
                borderRadius: '15px',
                background: '#333',
                color: '#fff',
            }
        }
    )
    
    return (
        <div className="excel">
            <span className="drive--title">Excel</span>
            <div className="drive--files">
                <table>
                    <thead>
                    <tr>
                        <th width="50%">Name</th>
                        <th width="30%">Created</th>
                        <th width="20%">Size</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Spreadsheet</td>
                        <td>4 Feb 2022</td>
                        <td>42kb</td>
                    </tr><tr>
                        <td>Spreadsheet</td>
                        <td>4 Feb 2022</td>
                        <td>42kb</td>
                    </tr><tr>
                        <td>Spreadsheet</td>
                        <td>4 Feb 2022</td>
                        <td>42kb</td>
                    </tr><tr>
                        <td>Spreadsheet</td>
                        <td>4 Feb 2022</td>
                        <td>42kb</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <button className="drive--button" type="button" onClick={select}>Select</button>
            <Toaster position="bottom-center" reverseOrder={false}/>
        </div>
    )
}