import { NEW_ITEM, TOGGLE_STATUS } from '../actions/actions'

export const initialState = {
  toDoItems: [{
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
}]}

const reducer = (state, action) => {
  switch(action.type) {
    case(NEW_ITEM):
      return({...state, toDoItems: [...state.toDoItems, {item: action.payload, completed: false, id: new Date()}]})
    case(TOGGLE_STATUS):
      return({...state, todoItems: state.todoItems.map((item) => {
          if (item.id === action.payload) {
            return { ...item, completed: !item.completed };
          } else {
            return item;
          }
        })
      })
    default:
      return (state)
  }
}
export default reducer;