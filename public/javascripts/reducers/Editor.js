import {ADD_SECTION, UPDATE_SECTIONS, UPDATE_SECTION, SAVE_SECTIONS} from '../actions/editorActions';

const editor = (state = {
  sections: [],
  isSaving: false
}, action) => {
  const { sections } = state;
  switch(action.type) {
    case ADD_SECTION:
      return Object.assign({}, state, {sections: [...sections, '']});
    case UPDATE_SECTIONS:
      return Object.assign({}, state, {sections: sections});
    case UPDATE_SECTION:
      //clone array, then update cloned array
      let newSections = sections.slice(0);
      const { index, text } = action;
      newSection[action] = text;
      return Object.assign({}, state, {sections: newSections});
    case SAVE_SECTIONS:
      return Object.assign({}, state, {sections: action.sections})
    default:
      return state;
  }
}

export default editor;
