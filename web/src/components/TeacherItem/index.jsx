import React from 'react';
import './styles.css';

import whatsaapIcon from '../../assets/images/icons/whatsapp.svg'


function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/65198146?s=460&u=3f9cefa381209fa5a97e00c284d15cc2fadb1897&v=4" alt="Filipe Faralhe"/>
                <div>
                    <strong>Filipe Faralhe</strong>
                    <span>Matemática</span>
                </div>
            </header>
            <p>Amante de matemática, Filipe um professor totalmente 
               louco tenta se aventurar nesta grande aplicação web, com o objetivo de passar todo conhecimento de matemática já existente nesta terra.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 200,00</strong>
                </p>
                <button type="button">
                    <img src={whatsaapIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;