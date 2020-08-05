import React from 'react';

import { storiesOf } from '@storybook/react';
import TeacherItem from './index';

storiesOf('Components', module)
    .add('Teacher Card', () => <TeacherItem />);
