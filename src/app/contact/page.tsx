"use client"
// Third-party imports

// Global imports

// Local imports
import { StyledMain } from "../styles"
import {
	ContactPageCardContainer,
	ContactPageTitle,
	ContactPageHeadline,
	ContactMethodsList,
	ContactPageHomePageLink,
	StyledLink,
} from "./styles"

////////////////////////////////////////////////////////////////////////////////

const Contact = () => (
	<StyledMain>
		<ContactPageCardContainer>
			<ContactPageTitle>Contact</ContactPageTitle>
			<ContactPageHeadline>
				You can contact me via the following methods:
			</ContactPageHeadline>
			<ContactMethodsList>
				<li>
					On LinkedIn (preferred): <br />
					<StyledLink
						href={"https://linkedin.com/in/dasilvapatrick"}
						target="_blank"
					>
						linkedin.com/in/dasilvapatrick
					</StyledLink>
				</li>
				<li>
					By phone (fastest): <br />
					<StyledLink href={"tel:+358 5030 92383"}>
						+358 5030 92383
					</StyledLink>
				</li>
				<li>
					By email: <br />
					<StyledLink href={"mailto:patrick1dasilva@gmail.com"}>
						patrick1dasilva@gmail.com
					</StyledLink>
				</li>
			</ContactMethodsList>
			<ContactPageHomePageLink>
				<StyledLink href={"/"}>{"> Home"}</StyledLink>
			</ContactPageHomePageLink>
		</ContactPageCardContainer>
	</StyledMain>
)

export default Contact
