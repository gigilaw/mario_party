export const createProject = project => {
	return (dispatch, getState, { getFirebase, getFireStore }) => {
		//async
		dispatch({ type: 'CREATE_PROJECT', project })
	}
}
