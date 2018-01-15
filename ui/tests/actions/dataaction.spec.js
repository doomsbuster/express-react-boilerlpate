/* eslint-disable no-unused-expressions */
import chai from 'chai'
import dataaction, { DATA_FETCHING, DATA_RECEIVED } from '../../actions/dataaction'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import sinon from 'sinon'
import axios from 'axios'

describe('Given that home page is loaded with DemoData component', () => {
  let mockStore
  let store
  let expectedActions
  let results
  let stub

  describe('When loadData() action is dispatched it', () => {
    beforeEach(() => {
      mockStore = configureMockStore([thunk])
      store = mockStore({
        appData: {
        }
      })
      results = {
        data: 'mockdata'
      }

      expectedActions = [
        {
          type: DATA_FETCHING,
          isFetching: true
        },
        {
          type: DATA_RECEIVED,
          data: results
        }
      ]

      stub = sinon.stub(axios, 'get')
    })

    it('should fetch data and dispatch data received action', () => {
      stub.resolves(results)
      return store.dispatch(dataaction.loadData()).then(() => {
        chai.expect(store.getActions()).to.eql(expectedActions)
      })
    })

    it('should wait for data to be returned, and dispatch data received action', () => {
      // Simulates a delay when making asynchronous calls
      stub.callsFake(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(results)
          }, 2000)
        })
      })

      return store.dispatch(dataaction.loadData()).then(() => {
        chai.expect(store.getActions()).to.eql(expectedActions)
      })
    })

    it('should fail to fetch data and return error', () => {
      stub.rejects()
      return store.dispatch(dataaction.loadData()).then(() => {
        chai.expect(store.getActions()).to.eql([{ type: DATA_FETCHING, isFetching: true }, { type: DATA_FETCHING, isFetching: false }])
      })
    })

    afterEach(() => {
      stub.restore()
    })
  })
})
