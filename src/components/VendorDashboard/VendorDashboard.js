import React, { Component } from 'react'
import { connect } from 'react-redux'

class VendorDashboard extends Component {
    state = {
        item: '',
        itemNumber: '', 
        description: '',
        price: ''
      }
      
      componentDidMount() {
        // this.props.dispatch({ type: 'FETCH_DASH'})
        console.log(this.props)
      }
      
      handleAdd = (event) => {
        event.preventDefault()
        console.log(this.state)
      this.props.dispatch({type: 'ADD_ITEM', payload: this.state})
      }

      handleDelete = (event) => {
        event.preventDefault()
        this.props.dispatch({})
      }
      

        handleInputChangeFor = propertyName => (event) => {
            this.setState({
              [propertyName]: event.target.value,
            });
          }

        render() {
            return (
        <div>
            <h2> {this.props.reduxState.user.username}'s Dashboard</h2>
        <button
            type="button"
            onClick={this.handleAdd}
          >
          Add New Item 
          </button>
          <input 
            type="text"
            placeholder="item"
            name="item"
            value={this.state.item}
            onChange={this.handleInputChangeFor("item")}
            />
          <input 
            type="text"
            placeholder="description"
            name="description"
            value={this.state.description}
            onChange={this.handleInputChangeFor("description")}
          />
          <input 
            type="number"
            placeholder="price"
            name="price"
            value={this.state.price}
            onChange={this.handleInputChangeFor("price")}
          />
      
          <table>
            <tr>
              <th> Item Number </th>
              <th> Item </th>
              <th> Description </th>
              <th> Price </th>
            </tr>

                  {this.props.item.map(item => {
                   return ( <tr> 
                            <td> {item.id} </td>
                            <td> {item.item} </td>
                            <td> {item.description} </td>
                            <td> {item.price} </td> 
                            <button onClick={this.handleDelete}>Delete</button>
                            <button onClick={this.handleEdit}>Edit</button>
                            </tr> )
                  })}
             
          </table>
        </div>
      
          )
        }
      }
      
      const mapState = reduxState => {
        return {
            item: reduxState.menuItem, 
           
            reduxState

            }   
        }
        export default connect(mapState)(VendorDashboard)