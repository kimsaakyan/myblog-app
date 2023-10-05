import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/sections/main/Home';
import MainLayout from './layouts/MainLayout';
import Overview from './components/sections/overview/Overview';
import Archive from './components/sections/archive/Archive';
import ScrollUpBtn from './components/ScrollUpBtn';
import SingleBlog from './components/blogs/singleBlog/SingleBlog';

function App() {
	return (
		<BrowserRouter>
			<div className="">
				<Routes>
					<Route path="/" element={<MainLayout />}>
						<Route index element={<Home />} />
						<Route path="overview" element={<Overview />} />
						<Route path="archive" element={<Archive />} />
						<Route path="blog/:id" element={<SingleBlog />} />
					</Route>
				</Routes>
				<ScrollUpBtn />
			</div>
		</BrowserRouter>
	);
}

export default App;
