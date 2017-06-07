import React, {Component} from 'react';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import Breadcrumbs from 'react-breadcrumbs';
import {connect} from 'react-redux';

class Full extends Component {
    componentDidMount() {
    }

    shouldComponentUpdate() {
        return true;
    }

    render() {
        const {auth} = this.props;
        return (
            <div className="app">
                <Header />
                <div className="app-body">
                    <Sidebar {...this.props}/>
                    <main className="main">
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

export default connect(mapStateToProps,{ })(Full);