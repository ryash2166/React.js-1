import { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <div className="mt-4 mx-[800px]">
        <h3 className="mb-2 text-xl font-bold">Todo List</h3>
        <div className="list">
          {items.map((item) => {
            return (
              <TodoItem
                key={item.id}
                title={item.title}
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
              />
            );
          })}
        </div>
        {items.length > 0 && (
          <button type="button" className="deleteAll-btn bg-orange-500 px-3 py-2 rounded-full mt-2 font-bold" onClick={clearList}>
            ClearList
          </button>
        )}
      </div>
    );
  }
}

export default TodoList;
