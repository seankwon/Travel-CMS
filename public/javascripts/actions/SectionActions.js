//toggle edit mode
export function toggleEdit(index) {
  type: 'TOGGLE_EDIT',
  index
}

//change text
export function changeText(index, text) {
  type: 'CHANGE_TEXT',
  text,
  index
}

//save text
export function saveText(index, text) {
  type: 'SAVE_TEXT'
  text,
  index
}
