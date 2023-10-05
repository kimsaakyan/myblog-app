import React from 'react'
import ExpandedSidebar from './ExpandedSidebar'
import IconicSidebar from './IconicSidebar'

const MainSidebar = () => {
	return (
		<div className="lg:flex">
			{/* Visible on large screens */}
			<div className="hidden md:block">
				<ExpandedSidebar />
			</div>

			{/* Visible on medium screens */}
			<div className="hidden m:block md:hidden">
				<IconicSidebar />
			</div>
			
		</div>

	)
}

export default MainSidebar