/*Structure object
task {
    id: 1
    description: 'Task description
    done:',
    time,
    day

}

*/



const taskReducer = (initialState, action) => {


    const state = [...initialState]
    // console.log(state)
    switch (action.type) {
        case 'ADD_TASK':
                return [...state, action.payload]

        case 'DELETE_TASK':
                return state.filter(task => task.id !== action.payload)

        case 'COMPLETE_TASK':
                return state.map(task => {
                    if(task.id === action.payload){
                        return{
                            ...task,
                            done: !task.done
                        }
                    }

                    return task;
                });

        case 'UPDATE_TASK':

                return state.map(task => {
                    if(task.id === action.payload.id){
                        return{
                            ...task,
                            description: action.payload.description
                        }
                    }

                    return task;
                });

        case 'FILTER_TASKS':
            return state.filter(task => task.day === action.payload)
        
                ;
            
        case 'REMOVE_TASKS':
            return state.filter(task => task.day === action.payload);

      

        default: 
            return state;

    }

};
export default taskReducer;