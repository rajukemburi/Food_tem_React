import React, { Fragment } from "react";

const Banner = () => {
    return <Fragment>
        <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
            <div style={{ backgroundColor: "lightblue", display: "flex", height: "630px", borderRadius: "30px" }}>

                <div>
                    <div style={{ color: "yellow", marginLeft: "25px", marginTop: "90px" }}><h1>100% Natural</h1></div>
                    <div style={{ marginLeft: "25px" }}>
                        <section><h2>Fresh </h2></section>
                        <section><h2>Smoothie </h2></section>
                        <section><h2>& Summer</h2></section>
                        <section><h2>Juice </h2></section>
                        <section><p>Lorem ipsum dolor sit amet,</p></section>
                        <section><p>Consectetur adipiscing elit. Dignissum</p></section>
                        <section><p>massa diam elementum</p></section>
                        <button style={{ marginLeft: "130px", marginTop: "80px", borderRadius: "5px", padding: "5px 25px 5px 25px" }}>SHOP</button>

                    </div>

                </div>
                <div style={{ marginLeft: "25px", marginTop: "50px" }}>
                    <img style={{ height: "250px" }} src="https://themewagon.github.io/FoodMart/images/product-thumb-1.png" alt="" />

                </div>
            </div>
            <div style={{ height: "630px", borderRadius: "30px" }}>
                <div style={{ display: "flex", backgroundColor: "smokewhite", borderRadius: "30px", gap: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.8)" }}>
                    <div style={{ padding: "20px", marginTop: "50px", borderRadius: "15px" }}>
                        <section>20% off</section>
                        <section>___________SALE</section>
                        <h1>Fruits &</h1>
                        <h1>Vegetables</h1>
                        <p>Shop Collection </p>
                    </div>

                    <div style={{ marginTop: "80px", marginRight: "100px", backgroundColor: "smokewhite" }}>
                        <img src="data:image/jpeg;base64,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" alt="" />
                    </div>
                </div>
                <div style={{ display: "flex", backgroundColor: "lightgray", height: "300px", borderRadius: "30px", marginTop: "15px", boxShadow: "0 4px 8px rgba(0,0,0,1.0)" }}>
                    <div style={{ padding: "20px", marginTop: "50px", borderRadius: "15px" }}>
                        <section>15% off</section>
                        <section>___________SALE</section>
                        <h1>Backed</h1>
                        <h1>Products</h1>
                        <p>Shop Collection </p>
                    </div>

                    <div style={{ marginTop: "80px", marginLeft: "30px" }}>
                        <img height="200px" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/d356088a-509d-4827-8ba0-9b6d42d2c3bc.__CR0,0,300,300_PT0_SX300_V1___.jpg" alt="" />
                    </div>
                </div>

            </div>
        </div>
        <div style={{ height: "170px" }}>
            <nav style={{ paddingTop: "25px" }}>
                <div>
                    <ul style={{ display: "flex", justifyContent: "space-between", backgroundColor: "smokewhite", borderRadius: "10px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)", paddingRight: "15px" }}>
                        <h1>Category</h1>
                        <p>View All Categories</p>
                    </ul>
                </div>
            </nav>
        </div>
        <div style={{ display: "flex", backgroundColor: "smokewhite", justifyContent: 'space-evenly', height: "120px", padding: "20px" }}>
            <div style={{ backgroundColor: "smokewhite", borderRadius: "20px", padding: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                <h3 style={{ marginTop: "35px" }}>Fruits & Veges</h3>
            </div>
            <div style={{ backgroundColor: "smokewhite", borderRadius: "20px", padding: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                <h3 style={{ marginTop: "35px" }}>Breads & Sweets</h3>
            </div>
            <div style={{ backgroundColor: "smokewhite", borderRadius: "20px", padding: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                <h3 style={{ marginTop: "35px" }}>Fruits & Veges</h3>
            </div>
            <div style={{ backgroundColor: "smokewhite", borderRadius: "20px", padding: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                <h3 style={{ marginTop: "35px" }}>Fruits & Veges</h3>
            </div>
            <div style={{ backgroundColor: "smokewhite", borderRadius: "20px", padding: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                <h3 style={{ marginTop: "35px" }}>Fruits & Veges</h3>
            </div><div style={{ backgroundColor: "smokewhite", borderRadius: "20px", padding: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                <h3 style={{ marginTop: "35px" }}>Fruits & Veges</h3>
            </div>
        </div>
        <nav style={{ padding: "30px", height: "120px" }}>
            <div>
                <ul style={{ display: "flex", justifyContent: "space-between", backgroundColor: "smokewhite", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", paddingRight: "15px" }}>
                    <h1>New Arrivals</h1>
                    <p>View All Categories</p>
                </ul>
            </div>
        </nav>
        <div style={{ display: "flex", justifyContent: "space-evenly", height: "130px", padding: "20px" }}>
            <div style={{ display: "flex", fontFamily: "cursive", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", paddingRight: "30px", borderRadius: "15px" }}>
                <div style={{ borderRadius: "50px" }}>
                    <img src="https://themewagon.github.io/FoodMart/images/product-thumb-11.jpg" alt="" height="80px" />
                </div>
                <div style={{ height: "20px", margin: "0px 0px 0px 20px", marginBottom: "20px" }} >
                    <section><p>Amber Jar</p></section>
                    <section>Honey best</section>
                    <section>nectar you wish</section>
                    <section>to get</section>
                </div>
            </div>
            <div style={{ display: "flex", fontFamily: "cursive", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderRadius: "15px", paddingRight: "30px" }}>

                <div>
                    <img src="https://themewagon.github.io/FoodMart/images/product-thumb-12.jpg" alt="" height="80px" />
                </div>
                <div style={{ height: "20px", margin: "0px 0px 0px 20px", marginBottom: "20px" }} >
                    <section><p>Amber Jar</p></section>
                    <section>Honey best</section>
                    <section>nectar you wish</section>
                    <section>to get</section>
                </div>
            </div>
            <div style={{ display: "flex", fontFamily: "cursive", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderRadius: "15px", paddingRight: "50px" }}>

                <div>
                    <img src="https://themewagon.github.io/FoodMart/images/product-thumb-13.jpg" alt="" height="80px" />
                </div>
                <div style={{ height: "20px", margin: "0px 0px 0px 20px" }} >
                    <section><p>Amber Jar</p></section>
                    <section>Honey best</section>
                    <section>nectar you wish</section>
                    <section>to get</section>
                </div>
            </div>
            <div style={{ display: "flex", fontFamily: "cursive", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderRadius: "15px", paddingRight: "50px" }}>

                <div>
                    <img src="https://themewagon.github.io/FoodMart/images/product-thumb-14.jpg" alt="" height="80px" />
                </div>
                <div style={{ height: "20px", margin: "0px 0px 0px 20px" }} >
                    <section><p>Amber Jar</p></section>
                    <section>Honey best</section>
                    <section>nectar you wish</section>
                    <section>to get</section>
                </div>
            </div>

        </div>
        <nav style={{ padding: "30px", height: "120px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderRadius: "10px", height: "80px", paddingLeft: "20px", paddingRight: "15px" }}>
                <div>
                    <h2>Trending products</h2>
                </div>
                <div>
                    <ul style={{ display: "flex", listStyleType: "none", gap: "15px" }}>
                        <li>ALL</li>
                        <li>FRUITS & VEGES</li>
                        <li> JUICES</li>
                    </ul>
                </div>
            </div>
        </nav>
        
            <div style={{ display: "flex", backgroundColor: "smokewhite", flexWrap: "wrap", justifyContent: "space-evenly", boxShadow: "0 4px 8px rgba(0,0,0,0.4)", marginLeft: "30px", marginRight: "40px", borderRadius: "20px",height:"680px" }}>
                <div style={{ backgroundColor: "smokewhite", height: "280px", boxShadow: "0 4px 8px rgba(0,0,0,0.4)", margin: "20px 20px 10px 10px", borderRadius: "20px" }}>
                    <div style={{ borderRadius: "30px", height: "280px", marginTop: "5px", padding: "0px 0px 0px 0px", height: "190px" }}>
                        <img src="https://themewagon.github.io/FoodMart/images/thumb-bananas.png" alt="" />
                    </div>
                    <div>
                        <h4>Sunstar Fresh Melon Juice</h4>
                        <h3>$18.00</h3>
                    </div>
                </div>
                <div style={{ backgroundColor: "smokewhite", height: "280px", boxShadow: "0 4px 8px rgba(0,0,0,0.4)", margin: "20px 20px 10px 0px", borderRadius: "20px" }}>
                    <div style={{ borderRadius: "30px", height: "200px", marginTop: "5px", padding: "0px 0px 0px 0px", height: "190px" }}>
                        <img src="https://themewagon.github.io/FoodMart/images/thumb-biscuits.png" alt="" />
                    </div>

                    <div>
                        <h4>Sunstar Fresh Melon Juice</h4>
                        <h3>$18.00</h3>

                    </div>
                </div>
                <div style={{ backgroundColor: "smokewhite", height: "280px", boxShadow: "0 4px 8px rgba(0,0,0,0.4)", margin: "20px 20px 10px 0px", borderRadius: "20px" }}>
                    <div style={{ borderRadius: "30px", height: "200px", marginTop: "5px", padding: "0px 0px 0px 0px", height: "190px" }}>
                        <img src="https://themewagon.github.io/FoodMart/images/thumb-cucumber.png" alt="" />
                    </div>
                    <div>
                        <h4>Sunstar Fresh Melon Juice</h4>
                        <h3>$18.00</h3>
                    </div>

                </div>
                <div style={{ backgroundColor: "smokewhite", height: "280px", boxShadow: "0 4px 8px rgba(0,0,0,0.4)", margin: "20px 20px 10px 0px", borderRadius: "20px" }}>
                    <div style={{ borderRadius: "30px", height: "200px", marginTop: "5px", padding: "0px 0px 0px 0px", height: "190px" }}>
                        <img src="https://themewagon.github.io/FoodMart/images/thumb-milk.png" alt="" />
                    </div>
                    <div>
                        <h4>Sunstar Fresh Melon Juice</h4>
                        <h3>$18.00</h3>
                    </div>
                </div>
                <div style={{ backgroundColor: "smokewhite", height: "280px", boxShadow: "0 4px 8px rgba(0,0,0,0.4)", margin: "20px 20px 10px 0px", borderRadius: "20px" }}>
                    <div style={{ borderRadius: "30px", height: "200px", marginTop: "5px", padding: "0px 0px 0px 0px", height: "190px" }}>
                        <img src="https://themewagon.github.io/FoodMart/images/thumb-bananas.png" alt="" />
                    </div>
                    <div>
                        <h4>Sunstar Fresh Melon Juice</h4>
                        <h3>$18.00</h3>
                    </div>
                </div>
                <div style={{ backgroundColor: "smokewhite", height: "280px", boxShadow: "0 4px 8px rgba(0,0,0,0.4)", margin: "20px 20px 10px 0px", borderRadius: "20px" }}>
                    <div style={{ borderRadius: "30px", height: "200px", marginTop: "5px", padding: "0px 0px 0px 0px", height: "190px" }}>
                        <img src="https://themewagon.github.io/FoodMart/images/thumb-biscuits.png" alt="" />
                    </div>
                    <div>
                        <h4>Sunstar Fresh Melon Juice</h4>
                        <h3>$18.00</h3>
                    </div>
                </div>
                <div style={{ backgroundColor: "smokewhite", height: "280px", boxShadow: "0 4px 8px rgba(0,0,0,0.4)", margin: "20px 20px 10px 0px", borderRadius: "20px" }}>
                    <div style={{ borderRadius: "30px", height: "200px", marginTop: "5px", padding: "0px 0px 0px 0px", height: "190px", marginRight: "10px" }}>
                        <img src="https://themewagon.github.io/FoodMart/images/thumb-cucumber.png" alt="" />
                    </div>
                    <div>
                        <h4>Sunstar Fresh Melon Juice</h4>
                        <h3>$18.00</h3>
                    </div>
                </div>
                <div style={{ backgroundColor: "smokewhite", height: "280px", boxShadow: "0 4px 8px rgba(0,0,0,0.4)", margin: "20px 20px 10px 0px", borderRadius: "20px" }}>
                    <div style={{ borderRadius: "30px", height: "200px", marginTop: "5px", padding: "0px 0px 0px 0px", height: "190px" }}>
                        <img src="https://themewagon.github.io/FoodMart/images/thumb-milk.png" alt="" />
                    </div>
                    <div>
                        <h4>Sunstar Fresh Melon Juice</h4>
                        <h3>$18.00</h3>
                    </div>
                </div>
                <div style={{ backgroundColor: "smokewhite", height: "280px", boxShadow: "0 4px 8px rgba(0,0,0,0.4)", margin: "20px 20px 10px 0px", borderRadius: "20px" }}>
                    <div style={{ borderRadius: "30px", height: "200px", marginTop: "5px", padding: "0px 0px 0px 0px", height: "190px" }}>
                        <img src="https://themewagon.github.io/FoodMart/images/thumb-bananas.png" alt="" />
                    </div>
                    <div>
                        <h4>Sunstar Fresh Melon Juice</h4>
                        <h3>$18.00</h3>
                    </div>
                </div>
                <div style={{ backgroundColor: "smokewhite", height: "280px", boxShadow: "0 4px 8px rgba(0,0,0,0.4)", margin: "20px 20px 10px 0px", borderRadius: "20px" }}>
                    <div style={{ borderRadius: "30px", height: "200px", marginTop: "5px", padding: "0px 0px 0px 0px", height: "190px" }}>
                        <img src="https://themewagon.github.io/FoodMart/images/thumb-biscuits.png" alt="" />
                    </div>
                    <div>
                        <h4>Sunstar Fresh Melon Juice</h4>
                        <h3>$18.00</h3>
                    </div>

                </div>


            </div>

    </Fragment>
}
export default Banner