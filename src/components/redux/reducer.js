let initialState = {
    books: [],
    loading: false,
    error: null,
  };
  

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST': 
            return {...state, loading: true};

        case 'FETCH_BOOKS_SUCCESS':
                return {...state, loading: false, books: action.payload};
        case 'FETCH_BOOKS_FAILURE':
                return {...state, loading: false, error: action.payload};
        case 'SORT_BOOKS':
                let {criteria, order} = action.payload;
                let sortBooks = [...state.books].sort((a,b) => {
                    let valA = a[criteria].toLowerCase();
                    let valB = b[criteria].toLowerCase();
                    return order === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
                });
                return {...state, books: sortBooks};
        default:
                return state;
        }
    };

    export default reducer;