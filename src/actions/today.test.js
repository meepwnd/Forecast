import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import {fetchToday} from './today';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetch today data action', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates TODAY_SUCCESS after successfuly fetching data', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {data: {
          today: '123'
        }}
      });
    });

    const expectedActions = [
      { type: 'TODAY_FETCH' },
      { type: 'TODAY_SUCCESS', payload: {data: {
        today: '123'
      }} },
    ];

    const store = mockStore({ data: {} })

    return store.dispatch(fetchToday()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

