import React, { useState } from 'react'
import styles from '../styles/components/Card3.module.css'
import { Md360 } from "react-icons/md";
import { GrClose } from "react-icons/gr";

export const Card3D = (props) => {

    const [imageState, setImage] = useState(false)

    function handleClick(){
        setImage(!imageState)
    }




  return (
    <div className={styles.container_card} >
        
        <div className={styles.container_img}> 
            <div className={styles.icon}>
            {!imageState ? <Md360 className={styles.rotation} 
            onClick={handleClick => setImage(!imageState)}
            /> :  <GrClose className={styles.fechar}  onClick={() => setImage(!imageState)} />}
            </div>
                <div className={styles.img}>
                {!imageState ? <img src={props.img} /> : <img src={props.img2} />}
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

