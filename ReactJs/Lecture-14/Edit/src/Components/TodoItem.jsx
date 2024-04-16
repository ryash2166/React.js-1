import { Component } from "react";

class TodoItem extends Component {
  state = {
    editClicked: false,
    name: this.props.title
  };
  handleEdit = () => {
    this.setState({ editClicked: true });
  };
  doChange = (e) => {
    e.preventDefault();
    console.log("Clicked");
    this.setState({ editClicked: false });
  };
  onChange = (e) => {
    this.setState({ name: e.target.value });
  };
  render() {
    const { title, handleDelete } = this.props;
    return (
      <div style={{ display: "flex" }} className="item flex justify-center  ">
        <div style={{ backgroundColor: "" }}>
          {this.state.editClicked ? (
            <form onSubmit={this.doChange} className="form-edit">
              <input onChange={this.onChange} value={this.state.name}></input>
              <button className="edit">Save</button>
            </form>
          ) : (
            <div className="text">
              {this.state.name === "" ? "Empty" : this.state.name}
            </div>
          )}
        </div>
        <div>
          {!this.state.editClicked && (
            <button onClick={this.handleEdit} className="edit bg-primary px-3 py-1 rounded-full mx-3">
              Edit
            </button>
          )}
        </div>
        <div>
          <button onClick={handleDelete} className="delete bg-danger px-3 py-1 rounded-full mx-3">
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default TodoItem;

// ------------------------------------------------------------------
/*
import { Component } from "react";

class TodoItem extends Component {
  state = {
    editClicked: false,
    name: this.props.title
  };
  handleEdit = () => {
    this.setState({ editClicked: true });
  };
  doChange = (e) => {
    e.preventDefault();
    console.log("Clicked");
    this.setState({ editClicked: false });
  };
  onChange = (e) => {
    this.setState({ name: e.target.value });
  };
  render() {
    const { title, handleDelete } = this.props;
    return (
      <div style={{ display: "flex" }} className="item">
        <div style={{ backgroundColor: "" }}>
          {this.state.editClicked ? (
            <form onSubmit={this.doChange}>
              <input onChange={this.onChange} value={this.state.name}></input>
              <button className="edit">Edit Now</button>
            </form>
          ) : (
            <div>{this.state.name === "" ? "Empty" : this.state.name}</div>
          )}
        </div>
        <div>
          {!this.state.editClicked && (
            <button onClick={this.handleEdit} className="edit">
              Edit
            </button>
          )}
          <button onClick={handleDelete} className="delete">
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
*/
// -------------------------------------------------------------------

// import { Component } from "react";

// class TodoItem extends Component {
//   render() {
//     const { title, handleDelete, handleEdit } = this.props;
//     return (
//       <div style={{ display: "flex" }}>
//         {title}
//         <div>
//           <button onClick={handleEdit}>Edit</button>
//           <button onClick={handleDelete}>Delete</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default TodoItem;
