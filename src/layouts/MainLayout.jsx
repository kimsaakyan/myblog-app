import React from 'react'
import { Outlet } from 'react-router-dom'
import MainSidebar from '../components/sidebars/MainSidebar'
import RightSidebar from '../components/sidebars/RightSidebar'
import { useSelector } from 'react-redux';
import ArchiveConfirmation from '../components/modals/ArchiveConfirmation';
import BurgerMenu from '../components/sidebars/BurgerMenu';
import { useState } from 'react';


const MainLayout = () => {
	const archiveConfirmation = useSelector(state => state.alert.successfullyAddedToArchive);

	const [burgerIsOpen, setBurgerIsOpen] = useState(false);

	return (
		<div className="flex justify-between">
			<div className="hidden m:block m:w-1/4 ">
				<MainSidebar />
			</div>
			<div className="w-full m:w-3/4 md:w-1/2 flex flex-col">
				<div className="m:hidden">
					<button onClick={() => { setBurgerIsOpen(true) }} className="mt-2">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
							<path fillRule="evenodd" d="M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
						</svg>
					</button>
					{burgerIsOpen && <BurgerMenu burgerIsOpen={burgerIsOpen} setBurgerIsOpen={setBurgerIsOpen} />}
				</div>
				<Outlet />
			</div>
			<div className="w-1/4 hidden md:block">
				<RightSidebar />
			</div>

			{archiveConfirmation && <ArchiveConfirmation />}
		</div>
	)
}

export default MainLayout