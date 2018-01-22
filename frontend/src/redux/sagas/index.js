import { fork, put, takeEvery } from 'redux-saga/effects'

export function* test() {
  yield put({
    type: "SUCCESS"
  })
}

export function* watchTest() {
  yield takeEvery("TEST", test)
}

export default function* rootSaga() {
  yield [
    fork(watchTest)
  ]
}