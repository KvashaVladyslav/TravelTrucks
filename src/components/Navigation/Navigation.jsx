import { NavLink } from "react-router-dom"
import css from "./Navigation.module.css"
import clsx from "clsx"
import icons from '../../assets/icons.svg'

export default function Navigation() {
    return (
        <nav className={css.navBox}>
            <NavLink to="/">
                <svg height={16} width={136}>
                    <use href={`${icons}#icon-logo`}></use>
                </svg>
            </NavLink>
            <ul className={css.linksBox}>
                <li><NavLink to="/" className={(params) => { return clsx(css.navLink, params.isActive && css.active)}}>Home</NavLink></li>
                <li><NavLink to="/catalog" className={(params) => { return clsx(css.navLink, params.isActive && css.active)}}>Catalog</NavLink></li>
            </ul>
        </nav>
    )
}