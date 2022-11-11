export const selectToken = state => state.auth.token;
export const selectName = state => state.auth.user.name;
export const selectEmail = state => state.auth.user.email;
export const selectIsAuth = state => state.auth.isAuth;
export const selectIsLoadingUser = state => state.auth.isLoading;
export const selectIsFetching = state => state.auth.isFetching;
export const selectAuthError = state => state.auth.error;

export const selectUserId = state => state.auth.user.id;
