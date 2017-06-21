export const getCharacters = () => ({
  type: 'GET_CHARACTERS'
});

export const newComic = (comic) => ({
  type: 'NEW_COMIC',
  payload: comic
});

export const deleteComic = (index) => ({
  type: 'DELETE_COMIC',
  payload: index
});

export const resetComics = () => ({
  type: 'RESET_COMICS'
});
