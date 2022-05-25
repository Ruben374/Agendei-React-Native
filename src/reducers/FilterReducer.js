export const initialState = {
    item: null,
    category: "",
    rate: 0
};
export const FilterReducer = (state, action) => {
    switch (action.type) {
        case "setItem":
            return { ...state, item: action.payload.item };
        case "setCategory":
            return { ...state, category: action.payload.category };
        case "setRate":
            return { ...state, rate: action.payload.rate };
        default:
            return state;
    }
};
