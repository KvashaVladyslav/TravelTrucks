import { NavLink } from "react-router-dom"
import css from "./HomePage.module.css"

export default function HomePage() { 

    return (
        <div className={css.background}>
            <div className={css.infoWrapper}>
                <div className={css.titleBox}>
                    <h2 className={css.mainTitle}>Campers of your dreams</h2>
                    <h3 className={css.descTitle}>You can find everything you want in our catalog</h3>
                </div>
                <NavLink className={css.link} to="/catalog">View Now</NavLink>
            </div>
        </div>
    )
}