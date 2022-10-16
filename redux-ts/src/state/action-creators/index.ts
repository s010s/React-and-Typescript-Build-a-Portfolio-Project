import axios from 'axios'
import { ActionType } from '../action-types'
import { Action } from '../actions'
import { Dispatch } from 'redux'

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITOIES
    })
    try {
      const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
        params: {
          text: term
        }
      })
      const names = data.objects.map((result: any) => {
        return result.package.name
      })
      dispatch({
        type: ActionType.SEARCH_REPOSITOIES_SUCCESS,
        payload: names
      })
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: ActionType.SEARCH_REPOSITOIES_ERROR,
          payload: error.message
        })
      }
    }
  }
}
