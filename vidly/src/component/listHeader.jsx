import React, { Component } from 'react';

class ListHeader extends Component {
    raiseSort = path => {
        const sortColumn = { ...this.props.sortColumn };
        if (sortColumn.path === path)
            sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
        else {
            sortColumn.path = path;
            sortColumn.order = 'asc';
        }
        this.props.onSort(sortColumn);
    }

    sortColumnIcon = column => {
        const { sortColumn } = this.props;
        if (column.path !== sortColumn.path) return null;
        if (sortColumn.order === 'asc') return <i className="fa fa-sort-asc"></i>
        return <i className="fa fa-sort-desc"></i>
    }
    render() {
        return (
            <li className="listHeader">
                {this.props.columns.map(column => (
                    <span key={column.path || column.key} onClick={() => this.raiseSort(column.path)}>
                        {column.label}{this.sortColumnIcon(column)}
                    </span>))}
            </li>
        )
    }
}

export default ListHeader;