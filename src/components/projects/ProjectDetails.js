import React from 'react'

const ProjectDetails = props => {
	const id = props.match.params.id
	return (
		<div className="container section project-details">
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title">Project Title - {id}</span>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus,
						voluptatibus omnis? Doloremque optio et minus. Soluta, voluptate
						similique. Ratione quo inventore a, magnam sunt explicabo recusandae
						omnis quas odio praesentium!
					</p>
				</div>
				<div className="card-action lighten-4 grey-text">
					<div>Posted By Gigi</div>
					<div>Today</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectDetails
