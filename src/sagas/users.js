import { call, put } from "redux-saga/effects";
import axios from 'axios';

export function* usersFetchList(action) {
    const access_token = "9aba463b4acf8782bd1cec3c1548696d193b1e1a";
    const url = `https://api.github.com/search/users?q=${action.searchTerm}&access_token=${access_token}`;
    const users = yield call(() => axios.get(url));

    yield put({
        type: 'USERS_LIST_SAVE',
        users: users,
        searchTerm: action.searchTerm
    });
}