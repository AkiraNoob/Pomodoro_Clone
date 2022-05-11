import { useEffect, useRef, useContext } from 'react';
import { TimerContext } from '../../Main/Timer/TimerContext/context';

import styles from '../HeaderStyles.module.scss'

function Feature({ times, handleClose })
{
    const [ timerState ] = useContext(TimerContext);
    const { mode } = timerState;

    useEffect(() =>
    {
        const popUp = document.getElementById('popUp');
        if (mode === 'pomodoro')
        {
            popUp.style.color = '#3b9cc9';
        }
        if (mode === 'short break')
        {
            popUp.style.color = '#4c9195';
        }
        if (mode === 'long break')
        {
            popUp.style.color = '#457ca3';
        }
    })

    useEffect(() =>
    {
        window.onclick = (e) =>
        {
            if (e.target == divRef.current)
                handleClose();
        };
        return () =>
        {
            window.onclick = () => { };
        }
    }, [])

    const divRef = useRef();

    return (
        <div className={styles.featureDisableBg} ref={divRef}>
            <div id='popUp' className={styles.featurePopUp}>
                <h1>Sorry, this feature has not been developed yet</h1>
                <button
                    onClick={() => { handleClose() }}
                    className={styles.featurePopUpBtn}
                >
                    {times}
                </button>
            </div>
        </div>
    )
}
export default Feature