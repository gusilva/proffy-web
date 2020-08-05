import React from 'react';

import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom'
import PageHeader from "./index";

storiesOf('Components', module)
    .addDecorator(getStory => <MemoryRouter>{getStory()}</MemoryRouter>)
    .add('Page Header', () => {
        return (
            <div id="page-teacher-list" className="container">
                <PageHeader title="Test" />
            </div>
        )
    })
