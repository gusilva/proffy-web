import React, { FormEvent, useState } from 'react'
import PageHeader from '../../components/pageHeader'
import './styles.css'
import { Input } from '../../components/input'
import warningIcon from '../../assets/images/icons/warning.svg'
import { TextArea } from '../../components/textArea'
import { Select } from '../../components/select'
import api from '../../services/api'
import { useHistory } from 'react-router-dom'

const TeacherForm: React.FC = () => {
  const history = useHistory()
  const initialSelectValues = { week_day: 'default', from: '', to: '' }
  const [scheduleItems, setScheduleItems] = useState([initialSelectValues])
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [bio, setBio] = useState('')
  const [subject, setSubject] = useState('default')
  const [cost, setCost] = useState('')

  const addNewSchedule = () =>
    setScheduleItems([...scheduleItems, initialSelectValues])

  const handleCreateClass = (event: FormEvent) => {
    event.preventDefault()

    api
      .post('classes', {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItems,
      })
      .then(() => {
        history.push('/')
      })
      .catch((e) => {
        alert('Error: ' + e)
      })
  }

  const setScheduleItemValue = (idx: number, key: string, value: string) => {
    const newArray = scheduleItems.map((scheduleItem, index) => {
      if (index === idx) {
        return { ...scheduleItem, [key]: value }
      }
      return scheduleItem
    })
    setScheduleItems(newArray)
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrivel que voce quer dar aulas"
        description="O primeiro passo e preencher esse formularion de inscricao"
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input
              label="Nome Completo"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="Avatar"
              name="avatar"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
            <Input
              label="Whatsapp"
              name="whatsapp"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            />
            <TextArea
              label="Biografia"
              name="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <legend>Sobre a aula</legend>
            <Select
              label={'Materia'}
              name={'subject'}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biografia', label: 'Biografia' },
                { value: 'Ciencias', label: 'Ciencias' },
                { value: 'Educacao Fisica', label: 'Educacao fisica' },
                { value: 'Fisica', label: 'Fisica' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'Historia', label: 'Historia' },
                { value: 'Matematica', label: 'Matematica' },
                { value: 'Portugues', label: 'Portugues' },
                { value: 'Quimica', label: 'Quimica' },
              ]}
            />
            <Input
              label={'Custo da sua hora por aula'}
              name={'cost'}
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horarios disponiveis
              <button type="button" onClick={addNewSchedule}>
                + Novo horario
              </button>
            </legend>
            {scheduleItems.map((scheduleItem, idx) => {
              return (
                <div key={idx} className="schedule-item">
                  <Select
                    label={'Dia da Semana'}
                    value={scheduleItem.week_day}
                    name={'week_day'}
                    onChange={(e) =>
                      setScheduleItemValue(idx, 'week_day', e.target.value)
                    }
                    options={[
                      { value: '0', label: 'Domingo' },
                      { value: '1', label: 'Segunda-feira' },
                      { value: '2', label: 'Terca-feira' },
                      { value: '3', label: 'Quarta-feira' },
                      { value: '4', label: 'Quinta-feira' },
                      { value: '5', label: 'Sexta-feira' },
                      { value: '6', label: 'Sabado' },
                    ]}
                  />
                  <Input
                    value={scheduleItem.from}
                    label={'Das'}
                    name={'from'}
                    type="time"
                    onChange={(e) =>
                      setScheduleItemValue(idx, 'from', e.target.value)
                    }
                  />
                  <Input
                    value={scheduleItem.to}
                    label={'Ate'}
                    name={'to'}
                    type="time"
                    onChange={(e) =>
                      setScheduleItemValue(idx, 'to', e.target.value)
                    }
                  />
                </div>
              )
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os dados
            </p>

            <button type="submit">Salvar Cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default TeacherForm
