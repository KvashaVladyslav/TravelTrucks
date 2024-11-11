import css from './Loader.module.css'
import clsx from 'clsx'

export default function Loader() {
    return (
        <div className={css.loader}>
            <div className={css.truck}>
                <div className={css.truckBody}>
                    <div className={css.window}></div>
                    <div className={css.cargo}></div>
                </div>
                <div className={clsx(css.wheel, css.wheelLeft)}></div>
                <div className={clsx(css.wheel, css.wheelRight)}></div>
            </div>
        </div>

    )
}