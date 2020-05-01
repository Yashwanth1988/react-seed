import React, { useEffect } from 'react'
import { Button, InputText } from 'react-lib'
import { Establishment } from './Establishment'

export function Card({ onUpdateCompany }){

	const [company, setCompany] = React.useState('1')
	const [user, setUser] = React.useState('')

	// const mapDispatchToProps = (dispatch) => {
	// 	return {
	// 		toggleTodo : function(todoId){
	// 			return dispatch(toggleTodo(todoId))
	// 		}
	// 	}
	// }

	const fetchCallback = React.useCallback(() => {
		if(company){
		  fetchUserApi(company)
		}
	}, [company])

	function fetchUserApi(id){
		setUser('Please wait..! Fetching information.')
		fetch(`/api/user/${id}`).then(response => {
			if(response.ok){
				const res = response.json()
				return res
			}
		}).then(data => {
			setUser(data.username)
		})
	} 

	useEffect(function(){
		//fetchUserApi(company)
		fetchCallback()
	}, [fetchCallback])

	function handleCompany(event){
		setCompany(event.target.value)
	}

	function handleUpdateCompany(){
		onUpdateCompany(company)
		//fetchUserApi(company)
		fetchCallback()
	}

	return (
			<div>
				Company: 
				<InputText value={company} onChange={handleCompany}/>
				<Button onClick={handleUpdateCompany} label="Enroll" />
				<Establishment />
				Username: { user }
			</div>
		)
}

