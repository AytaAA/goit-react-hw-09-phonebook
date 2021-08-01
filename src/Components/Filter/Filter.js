import React from "react"
import style from "./Filter.module.css"
import { useDispatch, useSelector } from "react-redux"
import { resetFilter } from "../../redux/contacts/contacts-actions"
import { getFilter } from "../../redux/contacts/contacts-selectors"

const Filter = () => {
    const value = useSelector(getFilter)
    const dispatch = useDispatch()
    const onChange = (e) => dispatch(resetFilter(e.target.value))

    return (
        <label className={style.filter_label}>
            Find contacts by name
            <br />
            <input type="text" value={value} onChange={onChange} />
        </label>
    )
}

export default Filter
