import React, { Component } from 'react';
import _ from 'lodash';

class ListBody extends Component {
    renderCell = (item, column) => {
        if(column.content) return column.content(item);

        return _.get(item, column.path);
    }
    createKey = (item, column) => {
        return item._id + (column.path || column.key);
    }
    render() {
        const { data, columns } = this.props;
        return (
            <React.Fragment>
                {data.map(item => (
                    <li key={item._id}>
                        {columns.map(column => (
                            <span key={this.createKey(item, column)}>{this.renderCell(item, column)}</span>
                        ))}
                    </li>
                ))}
            </React.Fragment>
        )
    }
}

export default ListBody;