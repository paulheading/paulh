import { trelloAction, getTrelloSuccessAction } from 'state/actions'
import { actionType } from 'state/actions/types'
import { initial } from 'state/reducers/trello'

interface trelloState {
  loading: boolean
  error: string | null
  data: getTrelloSuccessAction["payload"]
}

const initialState = {
  loading: false,
  error: null,
  data: {
    pages: {
      list: initial.list,
      cards: [initial.projects.card, initial.projects.card, initial.projects.card]
    },
    projects: {
      list: initial.list,
      cards: [initial.projects.card, initial.projects.card, initial.projects.card]
    },
    roles: {
      list: initial.list,
      cards: [initial.roles.card, initial.roles.card, initial.roles.card]
    },
    education: {
      list: initial.list,
      cards: [initial.education.card, initial.education.card, initial.education.card]
    }
  }
}

const reducer = (
  state: trelloState = initialState,
  action: trelloAction
): trelloState => {
  switch (action.type) {
    case actionType.get_trello: 
      return { loading: true, error: null, data: initialState.data }; 
    case actionType.get_trello_success: 
      return { loading: false, error: null, data: action.payload };
    case actionType.get_trello_error: 
      return { loading: false, error: action.payload, data: initialState.data };
    default: 
      return state;
  }
}

export * from './initial'
export default reducer
