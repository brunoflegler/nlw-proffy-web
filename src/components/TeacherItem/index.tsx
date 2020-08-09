import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

interface TeacherItemProps {
  photo: string,
  name: string,
  subject: string,
  description: string,
  value: string,
}

const TeacherItem: React.FC<TeacherItemProps> = ({ photo, name, subject, description, value}) => {
  return (
    <article className="teacher-item">
          <header>
            <img src={photo} alt="Bruno Flegler Dal Col" />
            <div>
              <strong>{name}</strong>
              <span>{subject}</span>
            </div>
          </header>

          <p>
            {description}
          </p>

          <footer>
            <p>
              Preço/Hora
              <strong>{value}</strong>
            </p>

            <button type="button">
              <img alt="Whatsapp" src={whatsappIcon} />
              Entrar em contato
            </button>

          </footer>

        </article>
  )
}

export default TeacherItem
