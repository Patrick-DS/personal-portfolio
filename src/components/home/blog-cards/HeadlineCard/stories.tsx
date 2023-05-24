// Third-party imports
import type { Meta } from "@storybook/react"

// Global imports
import { backgroundDecorator } from "@/components/main-layout/Background/stories"
import { PageContentDecorator } from "@/stories"

// Local imports
import HeadlineCard from "./HeadlineCard"

////////////////////////////////////////////////////////////////////////////////

export const Default = HeadlineCard

const storyOptions: Meta<typeof HeadlineCard> = {
	title: "Home/HeadlineCard",
	component: HeadlineCard,
	decorators: [backgroundDecorator, PageContentDecorator],
	args: {
		title: "Patrick Da Silva",
		subtitle: "Your reference in software, cloud and machine learning",
	},
}

export default storyOptions
