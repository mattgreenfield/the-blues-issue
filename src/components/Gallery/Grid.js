import React from 'react'
import Link from 'gatsby-link'

import GalleryItem from './GalleryItem'

import styles from './gallery.module.css'

const GalleryGrid = ({items}) => {
    return (
        <ul className={styles.GalleryGrid} data-style="grid">
            { items.map((item, index) => (
                <li className={styles.Gallery__item} key={index}>
                    <GalleryItem item={ item } />
                </li>
            ))}
        </ul>
    )
}

export default GalleryGrid
