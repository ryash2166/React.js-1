import { useReducer } from "react";

const initialState = { name: "John", age: 30 };

const reducer = (state, action) => {
  switch (action.type) {
    case "updateName":
      return { ...state, name: action.payload };
    case "updateAge":
      return { ...state, age: action.payload };
    default:
      return state;
  }
};

const UserForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <form>
      <label>
        Name:
        <input
          type="text"
          value={state.name}
          onChange={(e) =>
            dispatch({ type: "updateName", payload: e.target.value })
          }
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          value={state.age}
          onChange={(e) =>
            dispatch({ type: "updateAge", payload: e.target.value })
          }
        />
      </label>
    </form>
  );
};

export default UserForm;