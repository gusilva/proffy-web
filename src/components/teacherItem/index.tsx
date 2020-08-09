import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'
import api from '../../services/api'

interface TeacherProps {
  teacher: {
    id: number
    name: string
    avatar: string
    whatsapp: string
    subject: string
    bio: string
    cost: string
  }
}

const TeacherItem: React.FC<TeacherProps> = (props: TeacherProps) => {
  const { id, name, avatar, cost, bio, subject, whatsapp } = props.teacher

  const createNewConnection = () => {
    api.post('connections', {
      user_id: id,
    })
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={avatar} alt="Profile Placeholder" />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>
      <p>{bio}</p>

      <footer>
        <p>
          Preco/hora
          <strong>R$ {cost}</strong>
        </p>
        <a href={`https://wa.me/${whatsapp}`} onClick={createNewConnection}>
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  )
}
export default TeacherItem
