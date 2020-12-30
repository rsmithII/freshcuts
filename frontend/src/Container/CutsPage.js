import React, {Component} from 'react'
import Services from './Services'
import Deal from './Deal'

const serviceURL = 'http://localhost:3000/services'
const dealURL = 'http://localhost:3000/deals'

class CutsPage extends Component {

    state = {
        services: [],
        deals: [],
        favorites: []
    }


    componentDidMount(){
        this.getServices()
        this.getDeals()
    }

    getServices = () => {
        fetch(serviceURL, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => response.json())
            .then(results => this.setState({
                services: results
            }
        ))       
    }

    getDeals = () => {
        fetch(dealURL, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => response.json())
            .then(dealResults => this.setState({
                deals: dealResults
            }))       
    }

    addService = (service) => {
        if(!this.state.favorites.find(task => task === service)){
            this.setState({favorites: [...this.state.favorites, service]})
        }
    }

    removeFavorite = (service) => {
        let newFavorite = this.state.favorites.filter(fav => fav !== service)
        this.setState({favorites: newFavorite})
    }

    logout = () => {
        localStorage.clear()
    }


    render(){
        return (
            <div>
                <div class="navbar">
                    <a class="active" href="http://localhost:3001">Home</a>
                    <a href="http://localhost:3001/about">About</a>
                    <a href="http://localhost:3001/contact">Contact</a>
                    <a href="http://localhost:3001/photos">Photos</a>
                    <a href="http://localhost:3001/login">Login</a>
                    <a href="http://localhost:3001/signup">Sign Up</a>
                    <a href="http://localhost:3001/login">Log Out</a>
                </div>
                 <header className="header">Fresh Cuts!</header>
                <Deal deals={this.state.deals} addService={this.addService}/>
                <h3>Available Services</h3>
                <Services services={this.state.services} addService={this.addService}/>
            </div>
        );
    }
}
export default CutsPage;