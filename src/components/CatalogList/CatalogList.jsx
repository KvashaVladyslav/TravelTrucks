import { useEffect } from "react"
import { getAllTrucks } from "../../redux/trucks/operations"
import { useDispatch, useSelector } from "react-redux"
import { selectTrucks } from "../../redux/trucks/selectors"
import CatalogListItem from "../CatalogListItem/CatalogListItem";
import css from "./CatalogList.module.css"

export default function CatalogList() {
    const trucks = useSelector(selectTrucks) || [];

    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(getAllTrucks())
    }, [dispatch])
    
    return (
        <div>
            <ul className={css.list}>
            {trucks.map((item) => (
                    <li key={item.id}>
                        <CatalogListItem item={item} />
                    </li>
                ))}</ul>
        </div>
    )
}