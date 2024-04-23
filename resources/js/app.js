// resources/js/app.js

import { App } from '@inertiajs/inertia-react';
import React from 'react';
import { render } from 'react-dom';

const el = document.getElementById('app');

render(
    <App
        initialPage={JSON.parse(el.dataset.page)}
        resolveComponent={(_name) => import(`./Payment/${product.id}`).then(module => module.default)}
    />,
    el
);
