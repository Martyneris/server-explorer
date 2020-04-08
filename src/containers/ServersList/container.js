import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../state/actions/serversActions'
import { logout } from '../../state/actions/authActions'
import Button from '../../components/buttons/Button';
import Popup from '../../components/other/Popup'
import TableRow from '../../components/tableRows/tableRow';
import LoaderIndicator from '../../components/other/Loader'
import logoutIcon from '../../assets/images/logout.png';

class ServersList extends React.Component {

    state = {
        servers: [],
        distanceSorting: 'ascending',
        nameSorting: 'ascending',
        popupActive: false,
        noToken: false
    }

    componentDidMount = async () => {
        const token = localStorage.getItem('token')
        const { getServers } = this.props
        //get and set the list of servers to redux state
        await getServers()
        this.setState({
            servers: this.props.servers,
            noToken: !token && !this.props.auth.token ? true : false /* check if token is present in redux state or local storage. If not - user needs to login again */
        })
    }


    togglePopup = () => {
        this.setState({ popupActive: !this.state.popupActive })
    }


    sortByDistance = () => {

        const { servers, distanceSorting } = this.state

        distanceSorting === 'ascending' ?
            servers.sort((a, b) => { return a.distance - b.distance })
            :
            servers.sort((a, b) => { return b.distance - a.distance })

        this.setState({
            servers: servers,
            distanceSorting: distanceSorting === 'ascending' ? 'descending' : 'ascending'
        })
    }

    sortByName = () => {

        const { servers, nameSorting } = this.state

        nameSorting === 'ascending' ?
            servers.sort((a, b) => a.name.localeCompare(b.name))
            :
            servers.sort((a, b) => b.name.localeCompare(a.name))

        this.setState({
            servers: servers,
            nameSorting: nameSorting === 'ascending' ? 'descending' : 'ascending'
        })
    }

    render() {
        const { isLoading, logout, history } = this.props
        const { servers, popupActive, noToken } = this.state

        return (
            <div className="CenteredContainer">
                {isLoading ?
                    <LoaderIndicator />
                    :
                    <div className="Table-container">
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <div className="icon-container" style={{ border: 'none', marginBottom: '10px', cursor: 'pointer' }} onClick={this.togglePopup}>
                                <img src={logoutIcon} className="icon" alt="logout" />
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Button label={"Name"} onPress={this.sortByName} />
                            <Button label={"Distance"} style={{ marginLeft: '10px' }} onPress={this.sortByDistance} />
                        </div>
                        <div>
                            <div className="List">
                                <ul>
                                    {servers.length && servers.map((item, i) => {
                                        return (
                                            <li>
                                                <TableRow name={item.name} distance={item.distance} key={i}/>
                                            </li>
                                        )
                                    })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                }
                <Popup
                    toggle={this.togglePopup}
                    active={popupActive || noToken}
                    logout={logout}
                    history={history}
                    noToken={noToken} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        servers: state.servers,
        errors: state.errors,
        auth: state.auth,
        isLoading: state.app.isLoading
    }
}

export default connect(mapStateToProps, { ...actions, logout })(ServersList)