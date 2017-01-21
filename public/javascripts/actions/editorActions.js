export const ADD_SECTION = 'ADD_SECTION';
export const UPDATE_SECTIONS = 'UPDATE_SECTIONS';
export const UPDATE_SECTION = 'UPDATE_SECTION';

export const updateSections = (sections) => ({
  type: UPDATE_SECTIONS,
  sections
});

export const updateSection = (index, text) => ({
  type: UPDATE_SECTION,
  index,
  text
});

export const addSection = (id) => ({
  type: ADD_SECTION,
  id
});
