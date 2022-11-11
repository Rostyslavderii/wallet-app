export const selectToken = state => state.auth.token;
export const selectName = state => state.auth.user.username;
export const selectEmail = state => state.auth.user.email;
export const selectIsAuth = state => state.auth.isAuth;
export const selectIsLoadingUser = state => state.auth.isLoading;
export const selectIsFetching = state => state.auth.isFetching;
export const selectAuthError = state => state.auth.error;
