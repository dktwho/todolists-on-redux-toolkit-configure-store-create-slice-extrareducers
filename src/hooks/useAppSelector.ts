import { useSelector } from "react-redux"
import { AppRootStateType } from "../app/store"
import { RequestStatusType } from "../app/app-reducer"

export const useAppSelector = (selector: any) =>
  useSelector<AppRootStateType, boolean | RequestStatusType | string | null>(selector)
