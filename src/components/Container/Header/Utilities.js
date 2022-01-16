import { useState } from 'react'
import clsx from 'clsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar, faCog, faUser, faTimes } from '@fortawesome/free-solid-svg-icons'

import Button from './Utilities/Button'
import Feature from './Utilities/Feature'
import Setting from './Utilities/Setting'

import styles from './HeaderStyles.module.scss'

function Utilities()
{
    const [ state, setState ] = useState();

    const handleOnClick = (buttonRef) => setState(buttonRef);
    const handleClose = () => setState(undefined);

    return (
        <>
            <div className={clsx(styles.utilities)}>
                <Button spanId='reportSpan' mainId='report' handleOnClick={handleOnClick} content={'Report'} className={clsx(styles.utilitiesBtn)} icon={<FontAwesomeIcon id='reportIcon' icon={faChartBar} className={clsx(styles.utilitiesIcon)} />} />
                <Button spanId='settingSpan' mainId='setting' handleOnClick={handleOnClick} content={'Setting'} className={clsx(styles.utilitiesBtn)} icon={<FontAwesomeIcon id='settingIcon' icon={faCog} className={clsx(styles.utilitiesIcon)} />} />
                <Button spanId='loginSpan' mainId='login' handleOnClick={handleOnClick} content={'Login'} className={clsx(styles.utilitiesBtn)} icon={<FontAwesomeIcon id='loginIcon' icon={faUser} className={clsx(styles.utilitiesIcon)} />} />
            </div>
            {(state !== 'Setting' && state !== undefined) && <Feature times={<FontAwesomeIcon icon={faTimes} />} handleClose={handleClose} />}
            {(state === 'Setting') && <Setting handleClose={handleClose} />}
        </>
    )
}

export default Utilities