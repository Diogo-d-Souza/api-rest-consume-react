const initialState = {
  buttonClicked: false,
};

// eslint-disable-next-line default-param-last
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'BUTTON_CLICKED': {
      const newState = { ...state };
      newState.buttonClicked = !newState.buttonClicked;
      return newState;
    }
    default: {
      return state;
    }
  }
}
