import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
let config = {
	apiKey: 'AIzaSyDr7d109ChqwmBFu3oIcj_2P6_Edp1RTDY',
	authDomain: 'gigi-plan.firebaseapp.com',
	databaseURL: 'https://gigi-plan.firebaseio.com',
	projectId: 'gigi-plan',
	storageBucket: 'gigi-plan.appspot.com',
	messagingSenderId: '402494565600',
}
firebase.initializeApp(config)
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase
