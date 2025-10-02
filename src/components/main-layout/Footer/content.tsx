// Third-party imports
import { type ReactNode } from "react"

// Global imports
import { Icon, ImageNames } from "@/components/generic"

// Local imports

////////////////////////////////////////////////////////////////////////////////

interface FooterItemProps {
	itemId: number
	direction: "left" | "right"
	displayText?: string
	displayIcon?: ReactNode
}

const footerContent: FooterItemProps[] = [
	{
		itemId: 1,
		direction: "right",
		displayText: "Created by Patrick Da Silva",
	},
	{
		itemId: 2,
		direction: "left",
		displayIcon: (
			<Icon imageName={ImageNames.SPIRIT_LOGO} width={48} height={42} />
		),
	},
]

export default footerContent
