// Third-party imports
import type { Meta } from "@storybook/react"

// Global imports
import { backgroundDecorator } from "@/components/main-layout/Background/stories"
import { PageContentDecorator } from "@/stories"

// Local imports
import ContentCard from "./ContentCard"

////////////////////////////////////////////////////////////////////////////////

export const Default = ContentCard

const storyOptions: Meta<typeof ContentCard> = {
	title: "Home/ContentCard",
	component: ContentCard,
	decorators: [backgroundDecorator, PageContentDecorator],
	args: {
		header: "Update",
		date: "21.08.19",
		content: "I have made some progress on the chatbot! Before, I had integrated a chatbot in websites written in HTML/CSS/JavaScript, so I could use a chat window that integrated well with such pages. Now that this website is written entirely with React, I have to tweak a few things before the chat can be connected with a chatbot. We are almost there! You can have a look at the chat window itself (called a chatroom) in the Projects tab. Feel free to send me some feedback!",
	},
}

export default storyOptions
