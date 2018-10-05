import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUsers } from '../actions/index';

class Home extends Component {
  componentWillMount(){
    this.props.getUsers();
  }
  render() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );

  }
}
/*Esta funcion convierte el valor de las store que yo quiero
en propiedades para el componente */
function mapStateToProps (state){
  return {
    users: state.getUsers
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getUsers
  },dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
