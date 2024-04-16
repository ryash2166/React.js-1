import { Component } from "react";

class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="add a todo here"
            value={item}
            onChange={handleChange}
            className="border-2 px-4 mr-2 py-2 ml-2"
          ></input>
          {/* <button type="submit">{editItem ? "edit item" : "add item"}</button> */}
          <button className="edit bg-green-500 px-3 mt-3 rounded-full py-2" type="submit">
            add item
          </button>
        </form>
      </div>
    );
  }
}

export default TodoInput;