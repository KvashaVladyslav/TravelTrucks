import CatalogList from "../../components/CatalogList/CatalogList";
import css from "./CatalogPage.module.css"

export default function CatalogPage() {

    return (
        <div className={css.wrapper}>
            <CatalogList/>
        </div>
    )
}