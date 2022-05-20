import React from "react";
import toast from "react-hot-toast";

import driveData from "../testData/testData";

export default function Drive() {
    const [fileName, setFileName] = React.useState("");

    const [tableData, setTableData] = React.useState({
        selected: undefined,
        data: driveData.map((dataElement) => ({
            ...dataElement,
            isSelected: false,
        })),
    });

    React.useEffect(() => {
        if (tableData.selected || tableData.selected === 0) {
            setFileName(tableData.data[tableData.selected].name);
        } else {
            setFileName("");
        }
    }, [tableData]);

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

    const testFunction = (id) => {
        setTableData((previousValues) => {
            if (!previousValues.selected && previousValues.selected !== 0) {
                return {
                    selected: id,
                    data: previousValues.data.map((record) => {
                        if (record.id === id)
                            return { ...record, isSelected: true };
                        else return record;
                    }),
                };
            } else if (previousValues.selected === id) {
                return {
                    selected: undefined,
                    data: previousValues.data.map((record) => {
                        if (record.id === id)
                            return { ...record, isSelected: false };
                        else return record;
                    }),
                };
            } else {
                return {
                    selected: id,
                    data: previousValues.data.map((record) => {
                        if (record.id === id)
                            return { ...record, isSelected: true };
                        else if (record.id === previousValues.selected)
                            return { ...record, isSelected: false };
                        else return record;
                    }),
                };
            }
        });
    };

    const testData = tableData.data.map((dataElement, index) => (
        <tr
            onClick={() => testFunction(dataElement.id)}
            key={index}
            className={dataElement.isSelected ? "selected" : ""}
        >
            <td>{dataElement.name}</td>
            <td>{dataElement.date}</td>
            <td>{dataElement.size}</td>
        </tr>
    ));

    return (
        <div name="drive" className="drive">
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
                    <tbody>{testData}</tbody>
                </table>
                <footer className="drive--table--footer">
                    <input
                        type="button"
                        className="table--button"
                        value="Personal"
                        onClick={handleClick}
                    />
                    <input
                        type="button"
                        className="table--button"
                        value="Shared with me"
                        onClick={handleClick}
                    />
                </footer>
            </div>
            <div className="drive--bottom">
                {fileName !== "" && (
                    <span className="account--email fix-height">
                        {fileName}
                    </span>
                )}
                <button
                    className="drive--button"
                    type="button"
                    disabled={fileName === ""}
                    onClick={select}
                >
                    Select
                </button>
            </div>
        </div>
    );
}
