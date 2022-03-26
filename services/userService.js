import axios from "axios";
import config from "./../config";

const apiUrl = config.api_url;

export const passUser = (currentUser, targetUser) => {
    return axios.post(apiUrl + 'user-action/pass', {
        user_uuid: currentUser,
        target_uuid: targetUser,
    });
}

export const likeUser = (currentUser, targetUser) => {
    return axios.post(apiUrl + 'user-action/like', {
        user_uuid: currentUser,
        target_uuid: targetUser,
    });
}

export const getCurrentUserByUuid = (uuid) => {
    return axios.get(apiUrl + `user/${uuid}`);
}

export const getRandomUser = () => {
    return axios.get(apiUrl + 'user/random/get-random-user');
}

export const getUserExceptLikedOrPassed = (currentUser) => {
    return axios.get(apiUrl + `user/get-except/liked-or-passed/${currentUser}`);
}

export const getUsersLiked = (currentUser) => {
    return axios.get(apiUrl + `user-action/liked/get-user-liked/${currentUser}`);
}

export const getMatchesUser = (currentUser) => {
    return axios.get(apiUrl + `matches/get-matches-user/${currentUser}`);
}
