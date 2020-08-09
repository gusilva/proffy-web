import React from 'react'

import { storiesOf } from '@storybook/react'
import TeacherItem from './index'

const teacher = {
  id: 1,
  name: 'Gustavo',
  avatar: 'http://lorempixel.com/400/200/sports/Dummy-Text/',
  whatsapp: '999999',
  subject: 'Math',
  bio: 'Hello',
  cost: '90',
}

storiesOf('Components', module).add('Teacher Card', () => (
  <TeacherItem teacher={teacher} />
))
