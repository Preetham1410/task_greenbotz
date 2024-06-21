import React from "react";

function SideNav() {
    return (
        <>
            <div class="sidenav">
                <div className="dropdown">
                <span class="dropdown-btn">Water Management</span>
                <div class="dropdown-container">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
                </div>
                <div className="dropdown">
                <span class="dropdown-btn">Parking Management</span>
                <div class="dropdown-container">
                    <a href="#">Dashboard</a>
                    <a href="#">LNPR Records</a>
                    <a href="#">Vistor</a>
                    <a href="#">Contractor</a>
                    <a href="#">Delivery</a>
                    <a href="#">pickup</a>
                    <a href="#">Facility Entry</a>
                    <a href="#">Invitation</a>
                </div></div>
                <div className="dropdown">
                <span class="dropdown-btn">Smart Condo</span>
                <div class="dropdown-container">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div></div>
                <div className="dropdown">
                <span class="dropdown-btn">Alert management</span>
                <div class="dropdown-container">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div></div>
                <div className="dropdown">
                <span class="dropdown-btn">Analytics</span>
                <div class="dropdown-container">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div></div>
                <div className="dropdown">
                <span class="dropdown-btn">Attendence</span>
                <div class="dropdown-container">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div></div>
                <div className="dropdown">
                <span class="dropdown-btn">Master Data</span>
                <div class="dropdown-container">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div></div>
                <div className="dropdown">
                <span class="dropdown-btn">Admin Panel</span>
                <div class="dropdown-container">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div></div>
            </div>

        </>
    )
}

export default SideNav;