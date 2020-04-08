import React from 'react';
import LoaderIndicator from '../../components/other/Loader'

class Home extends React.Component {

    componentDidMount = () => {
        // check if user is logged in, redirect accordingly
        const { history } = this.props
        const token = localStorage.getItem('token')
        history.push(token ? '/servers' : '/login')
    }

    render() {
        return (
            <div className={"CenteredContainer"}>
                <LoaderIndicator />
            </div>
        );
    }
}

export default Home