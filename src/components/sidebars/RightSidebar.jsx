import React from 'react'
import SearchForm from '../forms/SearchForm'
import StatsCard from '../stats/StatsCard'

const RightSidebar = () => {
	return (
		<div className="flex flex-col h-screen fixed w-1/4 shadow-lg">
			<SearchForm />
			<StatsCard />
		</div>
	)
}

export default RightSidebar