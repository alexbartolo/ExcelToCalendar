import React from "react";
// import toast, { Toaster } from 'react-hot-toast'
import toast from "react-hot-toast";

import test from '../testData/testData'

export default function Drive() {
    const select = () =>
        toast("select", {
            style: {
                borderRadius: "15px",
                background: "#333",
                color: "#fff",
            },
        });

    const handleClick = (event) => 
        toast(event.target.value, {
            style: {
                borderRadius: "15px",
                background: "#333",
                color: "#fff",
            },
        });

    const testFunction = (event) => {
        event.target.parentElement.addClass("selected")
    }

    const testData = test.map((t, index) => (
        <tr onClick={testFunction} key={index}>
            <td>{t.name}</td>
            <td>{t.date}</td>
            <td>{t.size}</td>
        </tr>
    ))

    return (
        <div name="test" className="drive">
            <span className="drive--title">Drive</span>
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
                        {testData}
                        {/* <tr>
                            <td>Spreadsheet</td>
                            <td>4 Feb 2022</td>
                            <td>42kb</td>
                        </tr>
                        <tr>
                            <td>Spreadsheet</td>
                            <td>4 Feb 2022</td>
                            <td>42kb</td>
                        </tr>
                        <tr>
                            <td>Spreadsheet</td>
                            <td>4 Feb 2022</td>
                            <td>42kb</td>
                        </tr>
                        <tr>
                            <td>Spreadsheet</td>
                            <td>4 Feb 2022</td>
                            <td>42kb</td>
                        </tr>
                        <tr>
                            <td>Spreadsheet</td>
                            <td>4 Feb 2022</td>
                            <td>42kb</td>
                        </tr>
                        <tr>
                            <td>Spreadsheet</td>
                            <td>4 Feb 2022</td>
                            <td>42kb</td>
                        </tr>
                        <tr>
                            <td>Spreadsheet</td>
                            <td>4 Feb 2022</td>
                            <td>42kb</td>
                        </tr>
                        <tr>
                            <td>Spreadsheet</td>
                            <td>4 Feb 2022</td>
                            <td>42kb</td>
                        </tr>
                        <tr>
                            <td>Spreadsheet</td>
                            <td>4 Feb 2022</td>
                            <td>42kb</td>
                        </tr>
                        <tr>
                            <td>Spreadsheet</td>
                            <td>4 Feb 2022</td>
                            <td>42kb</td>
                        </tr>
                        <tr>
                            <td>Spreadsheet</td>
                            <td>4 Feb 2022</td>
                            <td>42kb</td>
                        </tr>
                        <tr>
                            <td>Spreadsheet</td>
                            <td>4 Feb 2022</td>
                            <td>42kb</td>
                        </tr>
                        <tr>
                            <td>Spreadsheet</td>
                            <td>4 Feb 2022</td>
                            <td>42kb</td>
                        </tr>
                        <tr>
                            <td>Spreadsheet</td>
                            <td>4 Feb 2022</td>
                            <td>42kb</td>
                        </tr> 
                        <tr>
                            <td>Spreadsheet</td>
                            <td>4 Feb 2022</td>
                            <td>42kb</td>
                        </tr>
                        <tr>
                            <td>Spreadsheet</td>
                            <td>4 Feb 2022</td>
                            <td>42kb</td>
                        </tr>
                        <tr>
                            <td>Spreadsheet</td>
                            <td>4 Feb 2022</td>
                            <td>42kb</td>
                        </tr>
                        <tr>
                            <td>Spreadsheet</td>
                            <td>4 Feb 2022</td>
                            <td>42kb</td>
                        </tr>
                        <tr>
                            <td>Spreadsheet</td>
                            <td>4 Feb 2022</td>
                            <td>42kb</td>
                        </tr> */}
                    </tbody>
                </table>
                <footer className="drive--table--footer">
                    {/* <tr align="center"> */}
                        {/* <td> */}
                            <input type="button" className="table--button" value="Personal" onClick={handleClick}/>
                        {/* </td> */}
                        {/* <td colSpan={2}> */}
                            <input type="button" className="table--button" value="Shared with me" onClick={handleClick}/>
                        {/* </td> */}
                    {/* </tr> */}
                </footer>
            </div>
            <button className="drive--button" type="button" onClick={select}>
                Select
            </button>
            {/* <Toaster position="bottom-center" reverseOrder={false}/> */}
        </div>
    );
}
