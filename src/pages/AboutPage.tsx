import React from 'react'
import { useNavigate } from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const navigate = useNavigate()
    return (
        <>
        <h1>Страница инормации</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsa eveniet expedita quis vitae est minus quia ea iste ipsam aliquam ipsum sint similique dolorem cumque ad, necessitatibus adipisci numquam.
        </p>
        <button className='btn' onClick={() => navigate(-1)}>Обратно к списку дел</button>
        </>
    )
}