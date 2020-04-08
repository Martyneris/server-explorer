import React from 'react';

const TableRow = ({ name, distance, style }) => {
    return (
        <div className="table-row" style={style}>
            <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', width: '100%' }}>
                <p className="table-row-text">{name}</p>
            </div>

            <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', width: '100%', borderLeft: '1px solid #ED4D6E' }}>
                <p className="table-row-text">{distance}</p>
            </div>
        </div>
    )
}

export default TableRow