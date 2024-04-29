const redux = require('redux')
const createStore = redux.createStore

/* constant */

const BUY_ICECREAME = 'BUY_ICECREAME'
const BUYICECREAME = 'BUYICECREAME'


function buy_icecreame(){
    return{
        type:BUY_ICECREAME,
        info:'First Redux Action'
    }
}

function buyicecreame(){
    return{
        type:BUYICECREAME,
        info:'Second Redux Action'
    }
}

const initialState = {
    numOfIcecreame : 20
}

const reducer  = (state = initialState , action) => {
    switch(action.type){
        case BUY_ICECREAME: return {...state , numOfIcecreame:state.numOfIcecreame - 1};
        case BUYICECREAME: return {...state , numOfIcecreame:state.numOfIcecreame + 1};
        default: return state
    }
}

const store = createStore(reducer)

console.log('Initial State' , store.getState());

store.subscribe(() => console.log('Updated State' , store.getState()))

store.dispatch(buy_icecreame())

store.dispatch(buyicecreame())

store.dispatch(buy_icecreame())


// Short Method

const reducer1 = (state = 2, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + action.value;
      case "DECREMENT":
        return state - action.value;
      case "MULTIPLICATION":
        return state * action.value;
      default:
        return state;
    }
  };
  
  const store1 = createStore(reducer1);
  
  store1.subscribe(() => {
    console.log("current state is", store1.getState());
  });
  
  store1.dispatch({
    type: "MULTIPLICATION",
    value: 5
  });
    
  store1.dispatch({
    type: "DECREMENT",
    value: 2
  });

  store1.dispatch({
    type: "INCREMENT",
    value: 1
  });