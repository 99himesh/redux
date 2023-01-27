//import a redux 
const redux= require("redux");


//reducer fn
const counterReducer=(state={counter:0},action)=>{
    if(action.type=="INCREAMENT"){
          return {
            counter:state.counter+2,

          };
        }
        if(action.type=="DECREAMENT"){
          return {
         counter:state.counter-2,
        
          };
        }
    
    }
    
  

//store
const store=redux.createStore(counterReducer);
 console.log(store.getState());

 //SUBSCRIPTION
 const counterSubscription=()=>{
    const latestState=store.getState();
    console.log(latestState);
 }

 store.subscribe(counterSubscription)
 //ACTION
 store.dispatch({type:'INCREAMENT'})
 store.dispatch({type:'DECREAMENT'})