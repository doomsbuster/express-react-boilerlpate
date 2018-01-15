import { DATA_FETCHING, DATA_RECEIVED } from '../actions/dataaction'

const initialState = {
  isFetching: false,
  post: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DATA_FETCHING:
      return Object.assign({}, state, {
        isFetching: action.isFetching
      })
    case DATA_RECEIVED:
      return Object.assign({}, state, {
        post: action.data
      })
    default:
      return state
  }
}
