// Third-party imports

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

interface BlogEntryProps {
	itemId: number
	header: string
	date: string
	content: string
}

const blogEntries: BlogEntryProps[] = [
	{
		itemId: 1,
		header: "Update",
		date: "21.08.19",
		content: "I have made some progress on the chatbot! Before, I had integrated a chatbot in websites written in HTML/CSS/JavaScript, so I could use a chat window that integrated well with such pages. Now that this website is written entirely with React, I have to tweak a few things before the chat can be connected with a chatbot. We are almost there! You can have a look at the chat window itself (called a chatroom) in the Projects tab. Feel free to send me some feedback!",
	},
	{
		itemId: 2,
		header: "Update",
		date: "21.08.19",
		content: "I have made some progress on the chatbot! Before, I had integrated a chatbot in websites written in HTML/CSS/JavaScript, so I could use a chat window that integrated well with such pages. Now that this website is written entirely with React, I have to tweak a few things before the chat can be connected with a chatbot. We are almost there! You can have a look at the chat window itself (called a chatroom) in the Projects tab. Feel free to send me some feedback!",
	},
	{
		itemId: 3,
		header: "Update",
		date: "21.08.19",
		content: "I have made some progress on the chatbot! Before, I had integrated a chatbot in websites written in HTML/CSS/JavaScript, so I could use a chat window that integrated well with such pages. Now that this website is written entirely with React, I have to tweak a few things before the chat can be connected with a chatbot. We are almost there! You can have a look at the chat window itself (called a chatroom) in the Projects tab. Feel free to send me some feedback!",
	},
	{
		itemId: 4,
		header: "Update",
		date: "21.08.19",
		content: "I have made some progress on the chatbot! Before, I had integrated a chatbot in websites written in HTML/CSS/JavaScript, so I could use a chat window that integrated well with such pages. Now that this website is written entirely with React, I have to tweak a few things before the chat can be connected with a chatbot. We are almost there! You can have a look at the chat window itself (called a chatroom) in the Projects tab. Feel free to send me some feedback!",
	},
]

export default blogEntries