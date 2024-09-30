//Pliki z zadania 8 ( aby projekt działał bez błędów potrzebny jest store)

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;