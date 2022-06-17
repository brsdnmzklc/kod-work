import {Alert} from 'react-native';
export default (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITES':
      const favorite = action.payload;
      const filter = state.favorites.find(item => item.id === favorite.id);
      if (filter) {
        return state;
      } else {
        Alert.alert('KodWork', 'Favorilere Eklendi');
        return {...state, favorites: [...state.favorites, action.payload]};
      }

    case 'REMOVE_FAVORITES':
      Alert.alert('KodWork', 'Favorilerden Kaldırıldı');
      return {
        ...state,
        favorites: state.favorites.filter(e => e.id !== action.payload),
      };
    default:
      return state;
  }
};
