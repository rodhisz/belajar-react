// contoh class component
import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Perkenalan Guru {this.props.sekolah}</h1>
            </div>
        )
    }
}
export default Header;