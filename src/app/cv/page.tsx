"use client"
// Third-party imports

// Global imports

// Local imports
import { StyledMain } from "../styles"
import {
	CVPageCardContainer,
	CVPageTitle,
	CVPageHeadline,
	CVPageContent,
	CVPageHomePageLink,
	StyledLink,
} from "./styles"

////////////////////////////////////////////////////////////////////////////////

const CV = () => (
	<StyledMain>
		<CVPageCardContainer>
			<CVPageTitle>CV</CVPageTitle>
			<CVPageHeadline>
				You can click
				<StyledLink
					href={"/CV - Patrick Da Silva (22.09.2024).pdf"}
					target="_blank"
				>
					{" "}
					here{" "}
				</StyledLink>
				to download my CV!
			</CVPageHeadline>
			<br />
			<CVPageContent>
				{/* eslint-disable-next-line react/no-unescaped-entities */}
				If you're interested in working together:
			</CVPageContent>
			<br />
			<CVPageContent>
				Please
				<StyledLink href={"/contact"}> contact me</StyledLink> and we
				can discuss our future collaboration!
			</CVPageContent>
			<br />
			<br />
			<br />
			<CVPageContent>
				This <StyledLink href="/">website</StyledLink> was created by me
				with NextJS! Try out the Light/Dark mode feature!
			</CVPageContent>
			<CVPageHomePageLink>
				<StyledLink href={"/"}>{"> Home"}</StyledLink>
			</CVPageHomePageLink>
		</CVPageCardContainer>
	</StyledMain>
)

export default CV
