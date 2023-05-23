// Third-party imports
import type { FC } from "react"

// Global imports

// Local imports
import { StyledContainer } from "./styles"

////////////////////////////////////////////////////////////////////////////////

interface ShadowBoxProps {
	children?: any
}

/**
 * @function ShadowBox
 * @category Components
 * @subcategory Generic
 * @description Used for containers that render content potentially anywhere on the website.
 */
const ShadowBox: FC<ShadowBoxProps> = ({ children }) => (
	<StyledContainer>
		{children}
	</StyledContainer>
)

export default ShadowBox