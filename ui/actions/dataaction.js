import axios from 'axios'

export const LOAD_DATA = 'LOAD_DATA'
export const DATA_FETCHING = 'FETCHING'
export const DATA_RECEIVED = 'DATA_RECEIVED'

let dataactions = {}

dataactions.dataReceived = (data) => {
  return {
    type: DATA_RECEIVED,
    data
  }
}

dataactions.loadData = () => {
  return (dispatch) => {
    dispatch(dataactions.dataFetching(true))
    return axios.get('https://jsonplaceholder.typicode.com/posts/1').then((data) => {
      dispatch(dataactions.dataReceived(data.data))
      dispatch(dataactions.dataFetching(false))
    }).catch((error) => { // eslint-disable-line handle-callback-err
      dispatch(dataactions.dataFetching(false))
    })
  }
}

dataactions.dataFetching = (isFetching) => {
  return {
    type: DATA_FETCHING,
    isFetching
  }
}
export default dataactions
