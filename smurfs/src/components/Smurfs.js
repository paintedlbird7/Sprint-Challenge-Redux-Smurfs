// import React, { Component } from 'react';
// import './App.css';
// import logo from './logo.svg';
// import SelectedFriend from './SelectedFriend';
// import { connect } from 'react-redux';
// import { deleteFriend, updateSingleFriend, toggleShowUpdate } from '../actions';
// import UpdateFriendForm from './UpdateFriendForm';

// class Smurfs extends Component {
//   handleDeleteFriend = () => {
//     const { id } = this.props.smurfSelected;
//     this.props.deleteFriend(id);
//   };

//   handleShowSmurf = smurf => {
//     this.props.updateSingleFriend(smurf);
//   };

//   toggleShowUpdate = () => {
//     this.props.toggleShowUpdate();
//   };
//   render() {
//     return (
//       <div className="Smurf-Container">
//         <ul className="Smurf-List">
//           {this.props.friends.map(friend => {
//             return (
//               <li onClick={() => this.handleShowFriend(friend)} key={friend.id}>
//                 {friend.name}
//               </li>
//             );
//           })}
//         </ul>
//         {Object.keys(this.props.friendSelected).length > 0 ? (
//           <SelectedFriend
//             handleShowSmurf={this.handleShowSmurf}
//             toggleShowUpdate={this.toggleShowUpdate}
//             handleDeleteSmurf={this.handleDeleteSmurf}
//             selected={this.props.friendSelected}
//           />
//         ) : null}
//         {this.props.showUpdate ? (
//           <UpdateSmurfForm friend={this.props.friendSelected} />
//         ) : null}
//         {this.props.deletingSmurf ? (
//           <img src={logo} className="App-logo" alt="logo" />
//         ) : null}
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     deleting: state.friendsReducer.deletingSmurf,
//     error: state.friendsReducer.error,
//     showUpdate: state.singleFriendReducer.showUpdate,
//     friendSelected: state.singleSmurfReducer.friendSelected
//   };
// };

// export default connect(mapStateToProps, {
//   deleteSmurf,
//   updateSingleSmurf,
//   toggleShowUpdate
// })(Smurfs);