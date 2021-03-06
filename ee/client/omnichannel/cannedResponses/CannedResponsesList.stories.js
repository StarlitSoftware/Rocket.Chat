import { Box } from '@rocket.chat/fuselage';
import React from 'react';

import CannedResponsesList from './CannedResponsesList';

export default {
	title: 'omnichannel/CannedResponse/CannedResponsesList',
	component: CannedResponsesList,
};

const cannedResponses = [
	{
		shortcut: 'lorem',
		text: 'Lorem ipsum dolor sit amet',
		scope: 'department',
	},
	{
		shortcut: 'lorem',
		text: 'Lorem ipsum dolor sit amet',
		scope: 'department',
	},
	{
		shortcut: 'lorem',
		text: 'Lorem ipsum dolor sit amet',
		scope: 'department',
	},
];

export const Default = () => (
	<Box maxWidth='x300' alignSelf='center' w='full'>
		<CannedResponsesList responses={cannedResponses} />
	</Box>
);
