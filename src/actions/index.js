//Action is JS plain object and it has type property
//pas the id of library we wanna selectLibrary
//look at the diagram and simple code for better understanding

export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  };
};
