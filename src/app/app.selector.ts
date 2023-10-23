import { AppRootStateType } from "./store"

export const selectIsInitialized = (state: AppRootStateType) => state.app.isInitialized
export const selectStatus = (state: AppRootStateType) => state.app.status
export const selectIsError = (state: AppRootStateType) => state.app.error
export const selectIsLoggedIn = (state: AppRootStateType) => state.auth.isLoggedIn
