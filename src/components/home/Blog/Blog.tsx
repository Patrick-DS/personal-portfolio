// Third-party imports
import type { FC } from "react"

// Global imports

// Local imports
import BlogCard from "../BlogCard"
import { BlogContainer, BlogTitle, BlogSubtitle, HeadlineContainer } from "./styles"

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
		<HeadlineContainer>
			<BlogTitle>Patrick Da Silva</BlogTitle>
			<BlogSubtitle>Your reference in software, cloud and machine learning</BlogSubtitle>
		</HeadlineContainer>
		{children ? (
			<>
				<BlogCard>
					{children}
				</BlogCard>
				<BlogCard>
					{children}
				</BlogCard>
			</>
		) : null}
	</BlogContainer>
)

export default Blog