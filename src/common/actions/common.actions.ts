import { createAction } from "@reduxjs/toolkit"
import { TodolistDomainType } from "../../features/TodolistsList/todolists-reducer"
import { TasksStateType } from "../../features/TodolistsList/tasks-reducer"

export type ClearTasksAndTodolists = {
  todolists: TodolistDomainType[]
  tasks: TasksStateType
}
export const clearTasksAndTodolists = createAction<ClearTasksAndTodolists>("common/clear-tasks-todolists")
