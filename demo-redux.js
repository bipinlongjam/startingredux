const redux = require('redux');


const counterReducer= (state = {counter: 0}, action) => {
    if(action.type === 'increment'){
        return{
            counter: state.counter + 2,
        }
    }
    if(action.type === 'decrement'){
        return{
            counter: state.counter - 2,
        }
    }
    return state;
};
const store = redux.createStore(counterReducer);  

//console.log(store.getState());

const counterSubcriber =()=>{
   const latestState= store.getState();
  console.log(latestState)
}
store.subscribe(counterSubcriber);

store.dispatch({type:'increment'})
store.dispatch({type:'decrement'})