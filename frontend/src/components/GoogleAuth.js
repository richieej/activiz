import React from "react";
import { connect } from 'react-redux';
import { Button } from "@material-ui/core";
import axios from 'axios';

import { signIn, signOut } from '../actions'


class GoogleAuth extends React.Component {
    //state = { isSignedIn: null }

    //need <script src="https://apis.google.com/js/api.js"></script> in index.html

    //type gapi in console
    //gapi.auth2.getAuthInstance
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: "380214511862-ecfhbsr1j79m8v4ehjo2sc0a11v7i7o2.apps.googleusercontent.com",
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId(), this.auth.currentUser.get().getBasicProfile().getEmail());
            axios.get("http://localhost:5000/users/fetchUser", { params: { userId: this.auth.currentUser.get().getId() } })
                .then((res) => {
                    console.log(res)
                    if (res.data === "") {
                        console.log("new user")
                        const user = {
                            userId: this.auth.currentUser.get().getId(),
                            username: this.auth.currentUser.get().getBasicProfile().getName(),
                            admin: false
                        }
                        axios.post("http://localhost:5000/users/addUser", user)
                            .then(res => console.log(res))
                            .catch(error => console.log(error.message))
                    }
                })
                .catch((err) => console.log(err))
        } else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
        window.location = '/';
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn) {
            return (
                <div>
                <Button onClick={this.onSignOutClick} fullWidth style={{ borderRadius: 30, justifyContent: 'left'}}>
                    <h2>Sign Out</h2>
                </Button>
                </div>
            )
        } else {
            return (
                <div>
                    <Button onClick={this.onSignInClick} fullWidth style={{ borderRadius: 30, justifyContent: 'left'}}>
                        <h2>Sign in</h2>
                    </Button>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);