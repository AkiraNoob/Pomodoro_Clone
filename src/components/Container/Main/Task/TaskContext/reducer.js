import * as constant from './constant'

const initState = {
    taskInput: {
        title: '',
        note: '',
        est: 1,
        act: 0
    },
    tasks: []
}

function reducer(state, action)
{
    switch (action.type)
    {
        case constant.TO_ADD_TASK_INPUT: {
            return {
                ...action.data
            }
        }
        case constant.TO_ADD_TASK: {
            return {
                ...action.data
            }
        }
        case constant.TO_MODIFY_TASK: {
            return {
                ...action.data
            }
        }
        case constant.TO_DELETE_TASK: {
            return {
                ...action.data
            }
        }
    }
}

export default reducer
export { initState }