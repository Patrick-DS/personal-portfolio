// Third-party imports

// Global imports
import { ThemeNames } from "@/styles";

// Local imports

////////////////////////////////////////////////////////////////////////////////

export interface ThemeManagerContextType {
	selectedThemeName: ThemeNames
	toggleTheme: () => void
}
