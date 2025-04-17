import { createContext } from "react";
import { TaskType, ActionType } from "./TaskContextProvider";

type CreateContextType = {
    tasks: TaskType[],
    dispatch: React.ActionDispatch<[action: ActionType]>
}

export const TaskContext = createContext<CreateContextType | null>(null)
