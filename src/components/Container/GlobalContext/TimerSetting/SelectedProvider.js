import { useState } from "react";

import { TaskSelected } from './context'

function SelectedProvider({ children })
{
    const [ selected, setSelected ] = useState(0);
    return (
        <TaskSelected.Provider value={[ selected, setSelected ]} >
            {children}
        </TaskSelected.Provider>
    )
}

export default SelectedProvider