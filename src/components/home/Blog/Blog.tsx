// Third-party imports
import type { FC } from "react"

// Global imports

// Local imports
import { HeadlineCard, ContentCard } from "../blog-cards"
import { BlogContainer } from "./styles"

////////////////////////////////////////////////////////////////////////////////

interface BlogProps {
	children?: any
}

const content = [
	{
		header: "Update",
		date: "21.08.19",
		content: "I have made some progress on the chatbot! Before, I had integrated a chatbot in websites written in HTML/CSS/JavaScript, so I could use a chat window that integrated well with such pages. Now that this website is written entirely with React, I have to tweak a few things before the chat can be connected with a chatbot. We are almost there! You can have a look at the chat window itself (called a chatroom) in the Projects tab. Feel free to send me some feedback!",
	},
	{
		header: "Update",
		date: "21.08.19",
		content: "I have made some progress on the chatbot! Before, I had integrated a chatbot in websites written in HTML/CSS/JavaScript, so I could use a chat window that integrated well with such pages. Now that this website is written entirely with React, I have to tweak a few things before the chat can be connected with a chatbot. We are almost there! You can have a look at the chat window itself (called a chatroom) in the Projects tab. Feel free to send me some feedback!",
	},
	{
		header: "Update",
		date: "21.08.19",
		content: "I have made some progress on the chatbot! Before, I had integrated a chatbot in websites written in HTML/CSS/JavaScript, so I could use a chat window that integrated well with such pages. Now that this website is written entirely with React, I have to tweak a few things before the chat can be connected with a chatbot. We are almost there! You can have a look at the chat window itself (called a chatroom) in the Projects tab. Feel free to send me some feedback!",
	},
	{
		header: "Update",
		date: "21.08.19",
		content: "I have made some progress on the chatbot! Before, I had integrated a chatbot in websites written in HTML/CSS/JavaScript, so I could use a chat window that integrated well with such pages. Now that this website is written entirely with React, I have to tweak a few things before the chat can be connected with a chatbot. We are almost there! You can have a look at the chat window itself (called a chatroom) in the Projects tab. Feel free to send me some feedback!",
	},
]

/**
 * @function Blog
 * @category Components
 * @subcategory Home
 * @description Renders the blog content of the homepage.
 */
const Blog: FC<BlogProps> = ({ children }) => (
	<BlogContainer>
		<HeadlineCard
			title="Patrick Da Silva"
			subtitle="Your reference in software, cloud and machine learning"
		/>
		{content.map((contentCardProps, index) => (
			<ContentCard key={index} {...contentCardProps} />
		))}
	</BlogContainer>
)

export default Blog