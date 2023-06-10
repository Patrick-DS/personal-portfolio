// Third-party imports
import styled from "styled-components"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const StyledContainer = styled.div`
	/* Background */
	background-color: ${({ theme }) => theme.colors.shadowbox.container.background};
	box-shadow: 0 0 10px 2px ${({ theme }) => theme.colors.shadowbox.container.boxshadow};
	border: 1px solid ${({ theme }) => theme.colors.shadowbox.container.background};
	border-radius: 20px;
`