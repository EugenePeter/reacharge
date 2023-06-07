/**
 * Trims the whitespace from the given value.
 * @param value - The string value to trim.
 * @returns The trimmed string value.
 */
export const trimValue = (value: string): string => value.trim();

/**
 * Checks if the given value contains any unsafe characters.
 * @param value - The string value to check.
 * @returns A boolean indicating if the value contains unsafe characters.
 */
export const containsUnsafeCharacters = (value: string): boolean => {
  const unsafePattern = /[^0-9.-]/;
  return unsafePattern.test(value);
};

/**
 * Checks if the given value is a valid number.
 * @param value - The string value to check.
 * @returns A boolean indicating if the value is a valid number.
 */
export const isNumberInputValue = (value: string): boolean => {
  const trimmedValue = trimValue(value);
  if (containsUnsafeCharacters(trimmedValue)) {
    return false;
  }
  return !isNaN(parseFloat(trimmedValue));
};

const errorMessages: { [key: string]: string } = {
  isNumber: "Only numeric values accepted, please update answer",
};

interface ValidationReturnVal {
  valid: boolean;
  errorMessage?: string;
}

/**
 * Validates the input value based on the specified validation rule.
 * @param value - The value to validate.
 * @param validation - The validation rule to apply.
 * @returns A boolean indicating if the value is valid or an object containing the validation result and error message.
 */
export function validateInput(
  value: string,
  validation: string
): boolean | ValidationReturnVal {
  const validationFunctions: { [key: string]: (value: string) => boolean } = {
    isNumber: isNumberInputValue,
    // Some More validators here
  };
  const validationFn = validationFunctions[validation];
  const res = validationFn && validationFn(value);
  if (res)
    return {
      valid: res,
    };

  return {
    valid: false,
    errorMessage: errorMessages[validation],
  };
}
