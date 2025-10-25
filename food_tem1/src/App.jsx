import React from "react"
import Header from "./components/header/Header"
import Banner from "./components/section/Banner"
import Footer from "./components/footer/Footer"


class App extends React.Component {
    render() {
        return (

            <div>
                <Header />
                <Banner />
                <Footer />
            </div>
        )
    }
}
export default App