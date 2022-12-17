import { configureStore } from "@reduxjs/toolkit"

const counterReducer = (state = {value : 0} , action) => {
    switch(action.type) {
        case "counter/incremented" : 
            return { value : state.value + 1}
        case "counter/decremented" : 
            return { value : state.value - 1}
        default : 
            return state
    }
}

let store = configureStore(counterReducer)

store.subscribe( () => console.log(store.getState()) )
store.dispatch("counter/incremented")