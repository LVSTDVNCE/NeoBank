import React from 'react'
import styles from './Button.module.scss'

interface IButton {
	text: string
}

export const Button: React.FC<IButton> = ({ text }) => {
	return <button className={styles.button}>{text}</button>
}
