// Third-party imports
import { useState, useCallback } from "react"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

/**
 * @function useBoolean
 * @category Hooks
 * @description Hook used to keep track of a boolean state. Gives callbacks to manage the boolean's value.
 * @param {any} initialValue - Initial value of the boolean. Can be any type; it'll be type-casted to boolean where truthy values convert to true, and falsy values convert to false.
 * @returns boolean - The boolean state stored in the hook.
 * @returns setBooleanToTrue - A callback that sets the boolean to true.
 * @returns setBooleanToFalse - A callback that sets the boolean to false.
 * @returns toggleBooleanValue - A callback that toggles the value of the boolean from true to false and vice-versa.
 * @returns setBoolean - A basic "setState" callback, in case the value the boolean is to be set to is not known upfront.
 */
const useBoolean = (initialValue: any) => {
	const [boolean, setBoolean] = useState<boolean>(!!initialValue)
	const setBooleanToTrue = useCallback(() => setBoolean(true), [])
	const setBooleanToFalse = useCallback(() => setBoolean(false), [])
	const toggleBooleanValue = useCallback(
		() => setBoolean(previousBoolean => !previousBoolean),
		[],
	)

	return [
		boolean,
		setBooleanToTrue,
		setBooleanToFalse,
		toggleBooleanValue,
		setBoolean,
	] as const
}

export default useBoolean
