
export const ADD_NEW_TODO = 'ADD_NEW_TODO'
export const DELETE_TODO = "DELETE_TODO"
export const ADD_NEW_SUBITEM = "ADD_NEW_SUBITEM"
export const DELETE_SUBITEM = "DELETE_SUBITEM"

export const todoReducer = (state = [], action) => {

    console.log(action)
    switch (action.type) {

        case  ADD_NEW_TODO:
            return [
                ...state,
                action.payload,
            ]
        case DELETE_TODO :
            return state.filter(item => item.id !== action.payload.id)
        case ADD_NEW_SUBITEM : {
            return state.map(item => {

                if(item.id === action.payload.id) {
                    return {
                        ...item,
                        list: [...item.list, action.payload.newSubItem]
                    };
                }
                return item
            })
        }
        case DELETE_SUBITEM : {
            return state.map(item => {

                if(item.id === action.payload.id) {
                    return {
                        ...item,
                        list : [...item.list.filter(i => i.id !== action.payload.subId)]
                    }
                }
                    return item;
            })

        }
    }


}