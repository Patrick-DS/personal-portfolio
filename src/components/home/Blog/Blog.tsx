// Third-party imports
import type { FC } from "react"

// Global imports

// Local imports
import BlogCard from "../BlogCard"
import { BlogContainer, BlogTitle, BlogSubtitle } from "./styles"

////////////////////////////////////////////////////////////////////////////////

interface BlogProps {
	children?: any
}

/**
 * @function Blog
 * @category Components
 * @subcategory Home
 * @description Renders the blog content of the homepage.
 */
const Blog: FC<BlogProps> = ({ children }) => (
	<BlogContainer>
		<BlogCard>
			<BlogTitle>Patrick Da Silva</BlogTitle>
			<BlogSubtitle>Your reference in software, cloud and machine learning</BlogSubtitle>
		</BlogCard>
		<BlogCard>
			{children}
		</BlogCard>
	</BlogContainer>
)

export default Blog