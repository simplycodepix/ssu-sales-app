import React from 'react';

import './CRUDTable.scss';

export const CRUDActions = ({ edit, remove }) => (
    <ul className="crud-actions">
        <li onClick={edit} className="crud-edit">Edit</li>
        <li onClick={remove} className="crud-delete">Delete</li>
    </ul>
);

export const CRUDTable = ({ data, name, editItem, deleteItem }) => {
    return (
        <table>
            <thead>
                {data.length > 0 && <tr>
                    {Object.keys(data[0]).map((key) => <th key={"th" + key + name}>{key}</th>)}
                    <th>Actions</th>
                </tr>}
            </thead>
            <tbody>
                {data.map(one => <tr key={`row_${Math.random()}`}>
                    {Object.keys(one).map((key) => <td key={key + one[key] + name}>{one[key]}</td>)}
                    <td><CRUDActions edit={() => editItem({ data: one, tableName: name })} remove={() => deleteItem({ data: one, tableName: name })} /></td>
                </tr>)}
            </tbody>
        </table>
    );
};

export default CRUDTable;