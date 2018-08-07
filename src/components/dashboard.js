import React, { Component } from "react";

<<<<<<< HEAD
import { connect } from 'react-redux';
import * as actions from '../actions';

import TabNav from './tabnav';
import NewsletterGrid from "./newsletter/newsletterGrid";
import RequestsGrid from "./requests/requestsGrid";

class Dashboard extends Component {

    componentDidMount() {
        this.props.updateHeader(`Welcome ${this.props.name}`, 'HOA Management', true);
    }

=======
import TabNav from './tabnav';

class Dashboard extends Component {

>>>>>>> e5b6c86b88a1ce58214aa38b2dbc97c9230466f4
    constructor(props) {
        super(props);

        this.state = {
            tabs: [
                {
                    title: 'Newsletter',
<<<<<<< HEAD
                    active: true,
                    component: <NewsletterGrid history={this.props.history}/>
=======
                    active: false,
                    component: <h4>Hey There - Newsletter</h4>
>>>>>>> e5b6c86b88a1ce58214aa38b2dbc97c9230466f4
                },
                {
                    title: 'Requests',
                    active: false,
<<<<<<< HEAD
                    component: <RequestsGrid history={this.props.history}/>
                }
=======
                    component: <h4>Hey There - Requests</h4>
                },
>>>>>>> e5b6c86b88a1ce58214aa38b2dbc97c9230466f4
            ]
        }
    }

<<<<<<< HEAD
    handleTabChange = (title) => {
        const tabs = this.state.tabs;

        tabs.map(tab => {
            if(tab.title == title) {
                tab.active = true
            } else {
                tab.active = false
            }
        })

        this.setState({ tabs });
    }

  render() {
    return (
        <div className='dashboard'>
            <TabNav handleClick={(title) => this.handleTabChange(title)} tabs={this.state.tabs}/>
        </div>
    )
  }

}

function mapStateToProps(state) {
    return {
        name: state.auth.user.fullname
    }
}

export default connect(mapStateToProps, actions)(Dashboard);
=======
render() {
    return (
        <div className='dashboard'>
            <TabNav tabs={this.state.tabs}/>
        </div>
    )}
}

export default Dashboard;
>>>>>>> e5b6c86b88a1ce58214aa38b2dbc97c9230466f4
