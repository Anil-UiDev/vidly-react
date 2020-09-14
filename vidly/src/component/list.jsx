import React from 'react';
import ListHeader from '../component/listHeader';
import ListBody from '../component/listBody';

const List = ({columns, sortColumn, onSort, data}) => {
    return (
        <ul className="moviesList">
            <ListHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
            <ListBody data={data} columns={columns} />
        </ul>
    )
}

export default List;