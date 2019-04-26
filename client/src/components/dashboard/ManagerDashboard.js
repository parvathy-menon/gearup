import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import './Dashboard.css';


class ManagerDashboard extends Component {
    render() {
        return (
            <div className="dashboard-grid">
                <div className="header">
                    <div className="header-grid">
                        <div className="profile">profile</div>
                        <div className="logout">logout</div>
                    </div>
                </div>
                <div className="menu">
                    <div className="manager-menu-grid">
                        <div className="instructors"><button className="button instructors">Instructors</button></div>
                        <div className="members"><button className="button members">Members</button></div>
                        <div className="managers"><button className="button managers">Managers</button></div>
                    </div>
                </div>
                <div className="main">Main</div> 
            </div>
        );
    }
}
export default ManagerDashboard;