import { useState } from 'react'

const initialState = {
  modalId: ''
}

const useInitialState = () => {
  const [state, setState] = useState(initialState)

  const showModal = (id) => {
    setState({
      ...state,
      modalId: id
    })
  }

  return {
    state,
    showModal
  }
}

export { useInitialState }
