import React from 'react'
import Icon from '../Icon'

export default function Button({type, label, icon, onClick}) {
    return (
        <button
            onClick={onClick}
            type={type || 'button'}
            className=" flex items-center justify-center gap-2 px-[20px] py-[8px] rounded-lg bg-blue-500 hover:bg-blue-600 text-white"
        >
            {label}
            {icon && <Icon/>}
        </button>
    )
}
