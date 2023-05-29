// Third-party imports
import type { Meta, StoryObj } from "@storybook/react"

// Global imports
import { backgroundDecorator } from "@/components/main-layout/Background/stories"
import { PageContentDecorator } from "@/stories"

// Local imports
import ContentCard from "./ContentCard"
import blogEntries from "../../Blog/blog-entries"
import type { BlogEntryProps } from "../../Blog/blog-entries"

////////////////////////////////////////////////////////////////////////////////

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

type Story = StoryObj<typeof ContentCard>

const removeItemId: (blogEntryProps: BlogEntryProps) => Omit<BlogEntryProps, "itemId"> = ({
	itemId,
	...blogEntryProps
}) => blogEntryProps


export const Example1: Story = {
	args: removeItemId(blogEntries[0])
}

export const Example2: Story = {
	args: removeItemId(blogEntries[1])
}

export const Example3: Story = {
	args: removeItemId(blogEntries[2])
}

export const Example4: Story = {
	args: removeItemId(blogEntries[3])
}

export const Example5: Story = {
	args: removeItemId(blogEntries[4])
}

export const Example6: Story = {
	args: removeItemId(blogEntries[5])
}

export const Example7: Story = {
	args: removeItemId(blogEntries[6])
}

export const Example8: Story = {
	args: removeItemId(blogEntries[7])
}



export default storyOptions
