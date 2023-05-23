// Third-party imports

// Global imports
import { routerPaths } from "@/constants"

// Local imports

////////////////////////////////////////////////////////////////////////////////

interface LinkProps {
	itemId: number
	direction: "left" | "right"
	href: string
	displayText: string
}

const headerContent: LinkProps[] = [
	{
		"itemId": 1,
		"direction": "left",
		"href": routerPaths.home,
		"displayText": "Home"
	},
	{
		"itemId": 2,
		"direction": "right",
		"href": routerPaths.contact,
		"displayText": "Contact"
	},	
	{
		"itemId": 3,
		"direction": "right",
		"href": routerPaths.cv,
		"displayText": "CV"
	},	
	{
		"itemId": 4,
		"direction": "right",
		"href": routerPaths.projects,
		"displayText": "Projects"
	},
]

export default headerContent