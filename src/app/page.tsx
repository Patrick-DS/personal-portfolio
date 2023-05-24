"use client"
// Third-party imports

// Global imports
import { Blog, BlogCard } from "@/components/home"

// Local imports
import { StyledMain } from "./styles"

////////////////////////////////////////////////////////////////////////////////

const Home = () => (
	<StyledMain>
		<Blog>
			<div style={{ width: "900px", height: "500px" }} />
		</Blog>
	</StyledMain>
)

export default Home
