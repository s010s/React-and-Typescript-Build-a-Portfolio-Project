import { ActionType } from '../action-types'

interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITOIES
}
interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITOIES_SUCCESS
  payload: string[]
}
interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITOIES_ERROR
  payload: string
}

export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction
