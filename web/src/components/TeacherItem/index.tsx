import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://avatars2.githubusercontent.com/u/54123248?s=460&u=de1ea7e1d9b2a4ab66e4d830d8a87a24c5e10f41&v=4" alt=""/>
            <div>
              <strong>Lineu Pastorelli</strong>
              <span>Química</span>
            </div>
          </header>

          <p>
            Qualquer coisa Qualquer coisa
            <br /> <br />
            Qualquer coisaQualquer coisaQualquer coisaQualquer coisa
            Qualquer coisa
            Qualquer coisaQualquer coisaQualquer coisaQualquer coisav
            Qualquer coisaQualquer coisav
            Qualquer coisav
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$80,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="WhatsApp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
  )
}

export default TeacherItem;