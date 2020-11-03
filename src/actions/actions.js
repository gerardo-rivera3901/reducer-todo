export const NEW_ITEM = 'NEW_ITEM'
export const TOGGLE_STATUS = 'TOGGLE_STATUS'

const newItem = (title) => {
  return({type: NEW_ITEM, payload: title})
}

const toggleStatus = (title) => {
  return({type: TOGGLE_STATUS, payload: title})
}
// const clearTasks = () => {

// }

export default {
  newItem: newItem,
  toggleStatus: toggleStatus
}