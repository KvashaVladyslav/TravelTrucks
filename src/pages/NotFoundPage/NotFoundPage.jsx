import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css"

export default function NotFoundPage() {
    return (
        <div className={css.background}>
            <div className={css.wrapper}>
                <h2 className={css.error}>Error 404</h2>
                <div className={css.textWrapper}>
                    <p className={css.text}>Page is not found</p>
                    <Link className={css.link} to="/">Home page</Link>
                </div>
            </div>
        </div>
    )
}