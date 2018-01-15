import {connect} from 'react-redux'
import DemoData from '../components/DemoData'
import dataactions from '../actions/dataaction'

const mapStateToProps = (state) => {
  return {
    appData: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: dispatch(dataactions.loadData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DemoData)
