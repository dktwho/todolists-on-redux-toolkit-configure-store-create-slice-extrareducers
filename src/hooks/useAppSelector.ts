import { useSelector } from "react-redux"
import { AppRootStateType } from "../app/store"
import { RequestStatusType } from "../app/app-reducer"

export const useAppSelector = <T>(selector: (state: AppRootStateType) => any) =>
  useSelector<AppRootStateType, T>(selector)
