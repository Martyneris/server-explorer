import React from 'react';
import userImg from '../../assets/images/user.png'
import userIcon from '../../assets/images/user2.png'
import lockIcon from '../../assets/images/lock.png'
import { connect } from 'react-redux';
import * as actions from '../../state/actions/authActions'
import Button from '../../components/buttons/Button';

class Login extends React.Component {

    state = {
        username: '',
        password: '',
        checked: false
    }

    handleSubmit = () => {
        const { login, history } = this.props
        const { username, password, checked } = this.state
        login(username, password, checked, history)
    }
    
    render() {
        // console.log(this.props)
        const { username, password, checked } = this.state
        const { errors } = this.props

        return (
            <div className="CenteredContainer">
                <div className="Login">

                    <div className="Tab">
                        <p className="bolded-text">Sign in</p>
                    </div>

                    <img src={userImg} className="user-image" alt="user"/>

                    <div className="inputs-container">
                        <p className={errors.length ? "error-text" : "regular-text"}>Invalid username and/or password</p>

                        <div className="input-container">

                            <div className="icon-container">
                                <img src={userIcon} className="icon" alt="user-icon"/>
                            </div>

                            <input
                                className="input"
                                onChange={(e) => this.setState({ username: e.target.value })}
                                value={username}
                                type="text"
                                placeholder={"username"} />
                        </div>

                        <div className="input-container">

                            <div className="icon-container">
                                <img src={lockIcon} className="icon" alt="lock-icon"/>
                            </div>

                            <input
                                className="input"
                                onChange={(e) => this.setState({ password: e.target.value })}
                                value={password}
                                type="password"
                                placeholder={"password"} />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <input type="checkbox" className="checkbox" value={checked} onClick={() => this.setState({ checked: !checked })} />
                            <p className="regular-text" style={{ color: '#00F5E0', marginTop: '4px' }}>Keep me logged in</p>
                        </div>
                        <div style={{ overflow: 'hidden', margin: '40px 0px' }}>
                            <Button label={"Login"} onPress={this.handleSubmit} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        errors: state.errors
    }
}

export default connect(mapStateToProps, actions)(Login)