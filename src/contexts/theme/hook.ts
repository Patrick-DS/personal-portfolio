// Third-party imports
import { useContext } from "react"

// Global imports
import ThemeManagerContext from "./context"

// Local imports

////////////////////////////////////////////////////////////////////////////////

/**
 * @function useThemeManager
 * @category Contexts
 * @description Wrapper around the useContext hook to retrieve the ThemeManager context.
 */
const useThemeManager = () => {
    const context = useContext(ThemeManagerContext)

    if (context === undefined) {
        throw new Error("The useThemeManager React hook must be used within the ThemeManagerProvider.")
    }

    return context
}

export default useThemeManager
