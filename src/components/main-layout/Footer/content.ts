// Third-party imports

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

interface FooterItemProps {
	itemId: number
	direction: "left" | "right"
	displayText: string
}

const headerContent: FooterItemProps[] = [
	{
		itemId: 1,
		direction: "right",
		displayText: "Created by Patrick Da Silva",
	},
	{
		itemId: 2,
		direction: "left",
		displayText: "Powered by Vercel",
	},
]

export default headerContent
