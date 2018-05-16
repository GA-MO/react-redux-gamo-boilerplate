import { push } from 'react-router-redux'

export const goToPage = (path) => (dispatch) => dispatch(push(`/${path}`))
