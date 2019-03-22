const initState = {
	projects: [
		{ id: '1', title: 'AAA', content: 'lalala' },
		{ id: '2', title: 'BBB', content: 'hahaha' },
		{ id: '3', title: 'CCC', content: 'yayaya' },
	],
}

const projectReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CREATE_PROJECT':
			console.log('created project', action.project)
	}
	return state
}

export default projectReducer
