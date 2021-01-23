import {put, takeLatest, call} from 'redux-saga/effects';
import { GET_MOVIES, GET_MOVIES_FAILED, GET_MOVIES_SUCCESS } from './actions';
import { getRecomendedMovies } from '../../api/movies';

function * fetchMovies() {
  try{
    const response = yield call(getRecomendedMovies);
    if( response.status === 200 ){
      const movies = yield response.json();
      yield put({type: GET_MOVIES_SUCCESS, payload: movies.results});
    }else{
      yield put({type: GET_MOVIES_FAILED, payload: 'Error'});
    }
  }catch(e){
    yield put({type: GET_MOVIES_FAILED, payload: 'Error'});
  }
}

export default function* watchGetMovies(){
  yield takeLatest(GET_MOVIES, fetchMovies);
}