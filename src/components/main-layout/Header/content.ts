// Third-party imports

// Global imports
import { routerPaths } from "@/constants"

// Local imports

////////////////////////////////////////////////////////////////////////////////

interface LinkProps {
	linkId: number
	direction: "left" | "right"
	href: string
	displayText: string
}

const headerContent: LinkProps[] = [
	{
		"linkId": 1,
		"direction": "left",
		"href": routerPaths.home,
		"displayText": "Home"
	},
	{
		"linkId": 2,
		"direction": "right",
		"href": routerPaths.contact,
		"displayText": "Contact"
	},	
	{
		"linkId": 3,
		"direction": "right",
		"href": routerPaths.cv,
		"displayText": "CV"
	},	
	{
		"linkId": 4,
		"direction": "right",
		"href": routerPaths.projects,
		"displayText": "Projects"
	},
]

export default headerContent