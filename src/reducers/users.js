export default function users(state = {}, action) {
    switch (action.type) {
        case 'USERS_LIST_SAVE':
            return { results: action.users, searchTerm: action.searchTerm } ;
        
        default:
            console.log(`State::::`, action);
        return state;
    }
  }