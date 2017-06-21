const storage = () => {
  let storage = localStorage.getItem('shop');
  if (storage)
    return JSON.parse(storage);
  else
    return []
}

export default function shop(state = storage(), action) {
  if (action.type === 'NEW_COMIC' && state.length < 3) {
    const comics = state.concat(action.payload);
    localStorage.setItem('shop', JSON.stringify(comics));
    return comics;
  }
  else if (action.type === 'DELETE_COMIC' && state.length > 0)
    return state.filter((value, index) => index !== action.payload);
  else if (action.type === 'RESET_COMICS')
    return [];
  else
    return state;
}
