import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import CurrentMarker from '../MapComponents/CurrentMarker'
import { connect } from 'react-redux'
// import AllTheTrucks from '../UserPage/AllTheTrucks'



const UserMap = withScriptjs(withGoogleMap((props) =>{


    // const markers = props.trucks.map( trucks => <TruckMarker
    //     trucks={trucks}
    //     location={{lat: trucks.closestTruck.lat, lng: trucks.closestTruck.lon}}
    //   />);
   
  return (
      <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: props.currentLocation.lat, 
                        lng: props.currentLocation.lng }}
    >
    {/* {markers} */}
      <CurrentMarker />
      {/* <AllTheTrucks /> */}
      </GoogleMap>
    );
  }
))

const mapRedux = reduxState => {
    return { reduxState }
}

export default connect(mapRedux)(UserMap);