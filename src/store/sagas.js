import { put, takeEvery } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes';
import { initListAction } from './actionCreators';
import axios from 'axios';
function* getInitList() {
    // axios.post('http://127.0.0.1:80/data', { "access_token": "token_450003000", "type": "actual_equip", "id": ["1.cs0001.3"] })
    //     .then(function (res) {
    //         const result = res.data;
    //         const action = initListAction(result);
    //         put(action);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });

    const res = yield axios.post('http://127.0.0.1:80/data', { "access_token": "token_279012200", "type": "actual_equip", "id": ["1.cs0001.3"] });
    
    const action = initListAction(res.data);
    yield put(action);
}

export function* todoSaga() {
    yield takeEvery(GET_INIT_LIST, getInitList)
}