import React from 'react';

import retrieveAllCities from '../logic/retrieve-all-cities';
import { City } from './City';
import MapView from './MapView'

class ShowCitiesList extends React.Component {

    state = {}

    getCitiesList = () => {
        retrieveAllCities()
            .then(cities => this.setState({ cities }))
    };

    render() {
        return (
            <>
                <button onClick={this.getCitiesList}>Obtener ciudades</button>

                {this.state.cities && <ul>
                    {this.state.cities.map(city => <li><City city={city} /></li>)}
                </ul>}

                {this.state.cities && <MapView />}
            </>
        );
    }
}

// TODO compo that paints a single city (<li><City city={city} /></li>)
// TODO check google map vs leaflet

export default ShowCitiesList;