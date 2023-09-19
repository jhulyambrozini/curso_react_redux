//constantes
const COMPLETAR_AULA = 'aulas/COMPLETAR_AULA'
const COMPLETAR_CURSO = 'aulas/COMPLETAR_CURSO'
const RESETAR_CURSO = 'aulas/RESETAR_CURSO'

// actions creators
const completarAula = (id) => ({type: COMPLETAR_AULA, payload: id})
const completarCurso = () => ({type: COMPLETAR_CURSO})
const resetarCurso = () => ({type: RESETAR_CURSO})

// initial state
const initialState = [
    {
        id: 1,
        nome: 'Design',
        completa: true,
      },
      {
        id: 2,
        nome: 'HTML',
        completa: false,
      },
      {
        id: 3,
        nome: 'CSS',
        completa: false,
      },
      {
        id: 4,
        nome: 'JavaScript',
        completa: false,
      },
]

// reducer

const reducer = immer.produce((state, action) => {
    switch(action.type){
        case COMPLETAR_AULA:
            const index = state.findIndex(i => i.id === action.payload)
            if(!isNaN(state[index]) && state[index]) state[index].completa = true
            break
        case COMPLETAR_CURSO:
            state.foreach(item => item.completa = true)
            break
        case RESETAR_CURSO:
            state.foreach(item => item.completa = false)
            break
        default:
            return state
    }
}, initialState)

export default reducer