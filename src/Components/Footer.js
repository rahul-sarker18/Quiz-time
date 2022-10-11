import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="p-6 mt-10 justify-end dark:bg-gray-100 dark:text-gray-800">
	<div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
		<div className="flex flex-col space-y-4">
			<h2 className="font-medium">Getting started</h2>
			<div className="flex flex-col space-y-2 text-sm dark:text-gray-800">
				<Link rel="noopener noreferrer" to='/'>Installation</Link>
				<Link rel="noopener noreferrer" to='/'>Release Notes</Link>
				<Link rel="noopener noreferrer" to='/'>Upgrade Guide</Link>
				<Link rel="noopener noreferrer" to='/'>Using with Preprocessors</Link>
				<Link rel="noopener noreferrer" to='/'>Optimizing for Production</Link>
				<Link rel="noopener noreferrer" to='/'>Browser Support</Link>
				<Link rel="noopener noreferrer" to='/'>IntelliSense</Link>
			</div>
		</div>
		<div className="flex flex-col space-y-4">
			<h2 className="font-medium">Core Concepts</h2>
			<div className="flex flex-col space-y-2 text-sm dark:text-gray-800">
				<Link rel="noopener noreferrer" to='/'>Utility-First</Link>
				<Link rel="noopener noreferrer" to='/'>Responsive Design</Link>
				<Link rel="noopener noreferrer" to='/'>Hover, Focus, &amp; Other States</Link>
				<Link rel="noopener noreferrer" to='/'>Dark Mode</Link>
				<Link rel="noopener noreferrer" to='/'>Adding Base Styles</Link>
				<Link rel="noopener noreferrer" to='/'>Extracting Components</Link>
				<Link rel="noopener noreferrer" to='/'>Adding New Utilities</Link>
			</div>
		</div>
		<div className="flex flex-col space-y-4">
			<h2 className="font-medium">Customization</h2>
			<div className="flex flex-col space-y-2 text-sm dark:text-gray-800">
				<Link to='/'>Configuration</Link>
				<Link to='/'>Theme Configuration</Link>
				<Link to='/'>Breakpoints</Link>
				<Link to='/'>Customizing Colors</Link>
				<Link to='/'>Customizing Spacing</Link>
				<Link to='/'>Configuring Variants</Link>
				<Link to='/'>Plugins</Link>
			</div>
		</div>
		<div className="flex flex-col space-y-4">
			<h2 className="font-medium">Community</h2>
			<div className="flex flex-col space-y-2 text-sm dark:text-gray-800">
				<Link to='/'>GitHub</Link>
				<Link to='/'>Discord</Link>
				<Link to='/'>Twitter</Link>
				<Link to='/'>YouTube</Link>
			</div>
		</div>
	</div>
	<div className="flex items-center justify-center px-6 pt-12 text-sm">
		<span className="dark:text-gray-900">© Copyright 1986. All Rights Reserved.</span>
	</div>
</footer>
        </div>
    );
};

export default Footer;