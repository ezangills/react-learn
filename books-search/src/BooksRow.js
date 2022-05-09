import React from 'react';

class BooksRow extends React.Component {
    viewMoview() {
        window.location.href = this.props.book.url;
    }

    render() {
        return (
            <table>
                <tbody>
                <tr>
                    <td>
                    <img alt='poster' src={this.props.book.image} />
                    </td>
                    <td>
                    <h3 key={this.props.book.isbn13 + Math.random()}>{this.props.book.title}</h3>
                    <p key={this.props.book.isbn13 + Math.random()}>{this.props.book.subtitle}</p>
                    <h4 style={{
                        color: 'red',
                    }}>{this.props.book.price}</h4>
                    <input style={{
                        fontSize: 24,
                        width: 70,
                    }} type="button" onClick={this.viewMoview.bind(this)} value="View" />
                    </td>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default BooksRow;