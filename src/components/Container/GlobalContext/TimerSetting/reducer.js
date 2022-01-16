import * as constants from './constant'

const initState = {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
    intervalLongBreak: 1,
    autoStartBreak: false,
    autoStartPomodoro: false
}

function reducer(state, action)
{
    switch (action.type)
    {
        case constants.TO_CHANGE_POMODORO:
            return {
                ...state,
                pomodoro: action.data
            }
        case constants.TO_CHANGE_SHORT_BREAK:
            return {
                ...state,
                shortBreak: action.data
            }
        case constants.TO_CHANGE_LONG_BREAK:
            return {
                ...state,
                longBreak: action.data
            }
        case constants.TO_CHANGE_INTERVAL_LONG_BREAK:
            return {
                ...state,
                intervalLongBreak: action.data
            }
        case constants.TO_TOGGLE_START_BREAK: {
            return {
                ...state,
                autoStartBreak: !state.autoStartBreak
            }
        }
        case constants.TO_TOGGLE_START_POMODORO: {
            return {
                ...state,
                autoStartPomodoro: !state.autoStartPomodoro
            }
        }
        default:
            throw new Error('Invalid action')
    }
}

export default reducer
export { initState }