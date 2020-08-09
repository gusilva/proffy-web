import React, { FormEvent, useState } from 'react'
import './styles.css'
import PageHeader from '../../components/pageHeader'
import TeacherItem from '../../components/teacherItem'
import { Input } from '../../components/input'
import { Select } from '../../components/select'
import { useStores } from '../../models/root-store/root-store-context'
import { useObserver } from 'mobx-react-lite'

const TeacherList: React.FC = () => {
  const { proffy } = useStores()
  const [subject, setSubject] = useState('default')
  const [weekDay, setWeekDay] = useState('')
  const [time, setTime] = useState('')
  const [teachers] = useState(proffy.classes)

  const searchTeachers = async (e: FormEvent) => {
    e.preventDefault()

    proffy.getClasses(subject, weekDay, time)
  }

  return useObserver(() => (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estao sao os proffys disponiveis.">
        <form onSubmit={searchTeachers} id="search-teachers">
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
          <Select
            label={'Dia de Semana'}
            name={'week_day'}
            value={weekDay}
            onChange={(e) => setWeekDay(e.target.value)}
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
            label={'Hora'}
            name={'time'}
            type="time"
            onChange={(e) => setTime(e.target.value)}
            value={time}
          />
          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher, idx) => {
          return <TeacherItem teacher={teacher} key={idx} />
        })}
      </main>
    </div>
  ))
}

export default TeacherList
