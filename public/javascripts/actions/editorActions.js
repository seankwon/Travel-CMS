export const ADD_SECTION = 'ADD_SECTION';
export const UPDATE_SECTIONS = 'UPDATE_SECTIONS';
export const UPDATE_SECTION = 'UPDATE_SECTION';
export const SAVE_SECTIONS = 'SAVE_SECTIONS';

export const updateSections = (sections) => ({
  type: UPDATE_SECTIONS,
  sections
});

export const updateSection = (index, text) => ({
  type: UPDATE_SECTION,
  index,
  text
});

export const saveSections = (sections, user_id) => ({
  type: SAVE_SECTIONS,
  user_id,
  sections
});

export const addSection = (id) => ({
  type: ADD_SECTION,
  id
});
