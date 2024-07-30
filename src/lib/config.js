/**
 * All of these values are used throughout the site – for example, 
 * in the <meta> tags, in the footer, and in the RSS feed.
 * 
 * PLEASE BE SURE TO UPDATE THEM ALL! Thank you!
 **/ 

export const siteTitle = 'Dylan Hildenbrand'
export const siteDescription = 'A template for setting up your own personal static website'
export const siteURL = 'http://localhost:5173'
export const siteLink = 'http://localhost:5173'
export const siteAuthor = 'Dylan Hildenbrand'

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 10

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'About',
		route: '/about'
	}, 
  {
		title: 'Blog',
		route: '/blog'
	},
  {
		title: 'Contact',
		route: '/contact' 
	},
]
