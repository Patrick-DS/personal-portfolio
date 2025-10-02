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

const SPIRIT_LOGO_SIZE = 42

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
			<Icon
				imageName={ImageNames.SPIRIT_LOGO}
				width={SPIRIT_LOGO_SIZE}
				height={SPIRIT_LOGO_SIZE}
			/>
		),
	},
]

export default footerContent
