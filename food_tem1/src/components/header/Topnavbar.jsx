import React from "react";



class Topnavbar extends React.Component {
    render() {
        return <>

            <nav style={{ height: "80px", backgroundColor: "smokewhite", color: "black", display: "flex",boxShadow: "0 4px 8px rgba(0,0,0,0.8)",justifyContent: "space-between", padding: "10px 10px 10px 5px",borderRadius:"10px"}}>
                <div>
                    <img src="https://themewagon.github.io/FoodMart/images/logo.png" alt="" />
                </div>
                <div>
                    <ul style={{ listStyleType: "none", display: "flex", gap: "15px" }}>
                        <li>All categories</li>
                        <li>search for more</li>
                        <li>Contact</li>
                        <li>Your cart</li>
                    </ul>
                </div>
            </nav>

        </>
    }
}
export default Topnavbar