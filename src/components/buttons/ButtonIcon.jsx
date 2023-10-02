import React from 'react'
import Icon from '../Icon'

export default function ButtonIcon({ type, label, name, width, height, onClick, className }) {
    return (
        <button 
            type={type || 'button'} 
            onClick={onClick} 
            className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ${className}`}
        >
            <span className="sr-only">{label}</span>
            <Icon name={name} width={width} height={height} />
        </button>
    )
}
