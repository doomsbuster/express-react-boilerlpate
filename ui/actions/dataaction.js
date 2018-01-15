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
    return axios.get('https://jsonplaceholder.typicode.com/posts').then((data) => {
      dispatch(dataactions.dataReceived(data))
    }).catch((error) => {
      console.log(error)
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
