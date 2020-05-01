import React from 'react'
import { EstablishmentContext } from './contexts'

export function Establishment(){

	//const year = React.useContext(EstablishmentContext)

	function renderYear(year){
		return <h3>Establishment Year is : { year }</h3>
	}

	return (
			<div>
				<EstablishmentContext.Consumer>
					{
						(year) => renderYear(year)
					}
				</EstablishmentContext.Consumer>
			</div>
		)
}