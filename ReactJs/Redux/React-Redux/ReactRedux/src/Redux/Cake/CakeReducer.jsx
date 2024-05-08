import { BUY_CAKE } from "./CakeConstant"

const state1 = {
    numofCake: 10
}

const CakeReducer = (state = state1, action) => {
    switch(action.type){
        case BUY_CAKE: return state - 1
            default: return state
    }
}

export default CakeReducer