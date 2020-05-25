export const SET_LOACTION = "router/SET_LOCATION";

export function setLocation(location) {
    return {
        type: SET_LOACTION,
        payload: { location },
    }
}