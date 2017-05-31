import React, {Component} from 'react';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import Breadcrumbs from 'react-breadcrumbs';
import {connect} from 'react-redux';
import { manualLogin, logout } from '../../actions/auth';

class Full extends Component {
    componentDidMount() {
    }

    shouldComponentUpdate() {
        return true;
    }

    login(event) {
        event.preventDefault();
        const { manualLogin } = this.props;
        manualLogin({email: 'test@acme.com', password: 'asd'});
    }

    logout(event) {
        const { logout } = this.props;
        logout();
    }

    render() {
        const {auth} = this.props;
        return (
            <div className="app">
                <Header />
                <div className="app-body">
                    <Sidebar {...this.props}/>
                    <main className="main">
                        <div>
                            Is Logged In: {auth.authenticated.toString()}
                            <button type="button" onClick={(event) => this.login(event)} className="btn btn-primary">Login
                            </button>
                            <button type="button" onClick={(event) => this.logout(event)} className="btn btn-secondary">
                                Logout
                            </button>
                        </div>
                        <Breadcrumbs
                            wrapperElement="ol"
                            wrapperClass="breadcrumb"
                            itemClass="breadcrumb-item"
                            separator=""
                            routes={this.props.routes}
                            params={this.props.params}
                        />
                        <div className="container-fluid">
                            {this.props.children}
                        </div>
                    </main>
                    <Aside />
                </div>
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps,{ manualLogin, logout })(Full);