import React from "react";


class Footer extends React.Component {
    render() {
        return <>
            <div style={{ display: "flex", paddingTop: "90px", justifyContent: "space-evenly", lineHeight: "25px" }}>
                <div>
                    <img src="https://themewagon.github.io/FoodMart/images/logo.png" alt="" />
                </div>
                <div>
                    <ul style={{ listStyleType: "none" }}>
                        <li><h3>Ultras</h3></li>
                        <li>About us</li>
                        <li>Conditions</li>
                        <li>Our Journals</li>
                        <li>Careers</li>
                        <li>Affiliate Programme</li>
                        <li>Ultras Press</li>
                    </ul>
                </div>
                <div>
                    <ul style={{ listStyleType: "none" }}>
                        <li><h3>Customer  Service </h3></li>
                        <li>FAQ</li>
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                        <li>Returns & Refunds</li>
                        <li>Cookie Guidlines</li>
                        <li>Delivery</li>
                        <li>Information</li>
                    </ul>
                </div>
                <div>
                    <ul style={{ listStyleType: "none" }}>
                        <li><h3>Customer  Service </h3></li>
                        <li>FAQ</li>
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                        <li>Returns & Refunds</li>
                        <li>Cookie Guidlines</li>
                        <li>Delivery</li>
                        <li>Information</li>
                    </ul>
                </div>
                <div>
                    <ul style={{ listStyleType: "none" }}>
                        <li><h3>Subscribe</h3></li>
                        <li>Subscribe to our newsletter to</li>
                        <li>get updates about our grand</li>
                        <li>offers</li>
                        <div>
                            <li><input type="emailadress" placeholder="Enter email Adress " /></li>
                            <div>
                                <button style={{ backgroundColor: "black", color: "white",borderRadius:"5px" }}>Subscribe</button>
                            </div>

                        </div>

                    </ul>
                </div>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",marginLeft:"50px",marginRight:"50PX",color:"lightgray"}}>
                <p>© 2023 Foodmart. All rights reserved.</p>
                <p>Free HTML Template by TemplatesJungle Distributed by ThemeWagon</p>
            </div>
        </>


    }
}
export default Footer