// Third-party imports
import styled from "styled-components"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const TestComponent = styled.div`
	color: ${({ theme }) => {
        console.log("THEME", theme)
        return theme?.colors?.text || "red"
    }};
    font-size: 100px;
`