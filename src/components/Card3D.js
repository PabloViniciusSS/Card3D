import React, { useState } from 'react'
import styles from '../styles/components/Card3.module.css'

export const Card3D = (props) => {

    const [btnState, setBtnState] = useState(false)

    function handleClick(){
        setBtnState(btnState => !btnState)
    }


    let toggleClassCheck = btnState ? {props.img}}


  return (
    <div className={styles.container_card} >
        
        <div className={styles.flip_container}> 
            <div className={styles.flipper}>
                <div className={styles.front}>
                <img src={props.img}/>
                </div>
                <div className={styles.back}>
                    <img src={props.img2} />
                </div>
            </div>
        </div>


        <div className={styles.container_description}>
            <p>CÓDIGO: {props.numero}</p>
            <h1>{props.produto}</h1>
            <p>{props.valor}</p>
                <button href={props.link}>{props.text}</button>

        </div>
        

    </div>
  )
}

