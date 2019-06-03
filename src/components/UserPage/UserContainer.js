import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserMap from '../UserPage/UserMap'
require('dotenv').config()


class UserContainer extends Component {

    state = {
        currentLatLng: {
            lat: 0,
            lon: 0
        }
    }

    render() {

        const API_KEY = process.env.REACT_APP_GOOGLE_KEY;

        return (
        
                <UserMap
				trucks={this.props.trucks}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
        		currentLocation={this.state.currentLatLng}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `800px`, width: `800px` }} />}
				mapElement={<div style={{ height: `100%` }} />}	
			>
			
			    </UserMap>
           
        )
    }
}

const mapRedux = reduxState => {
	return { reduxState }
}

export default connect(mapRedux)(UserContainer)