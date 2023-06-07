/**
 * Interface representing a registration question.
 */
interface RegistrationQuestion {
  id: number;
  key: string;
  label: string;
  placeholder: string;
  helperText: string;
}

/**
 * Simulates an asynchronous fetch request to retrieve registration questions.
 * @returns A Promise that resolves to an array of registration questions.
 */
export function fetchRegistrationQuestions(): Promise<RegistrationQuestion[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulated dummy data
      const dummyData: RegistrationQuestion[] = [
        {
          id: 1,
          key: "registrationNumber",
          label: "Registration Number",
          placeholder: "Registration Number",
          helperText: "Please enter the registration of the insured vehicle.",
        },
        {
          id: 2,
          key: "postalCode",
          label: "Post Code",
          placeholder: "Post Code",
          helperText: "Please enter the post code of the insured vehicle.",
        },
      ];
      resolve(dummyData);
    }, 3000);
  });
}

export function fetchRegistrationQuestions2(): Promise<RegistrationQuestion[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulated dummy data
      const dummyData: RegistrationQuestion[] = [
        {
          id: 1,
          key: "registrationNumber",
          label: "Registration Number",
          placeholder: "Registration Number",
          helperText: "Please enter the registration of the insured vehicle.",
        },
        {
          id: 2,
          key: "postalCode",
          label: "Post Code",
          placeholder: "Post Code",
          helperText: "Please enter the post code of the insured vehicle.",
        },
      ];
      resolve(dummyData);
    }, 5000);
  });
}

/**
 * Retrieves the registration questions asynchronously.
 * @returns A Promise that resolves to an array of registration questions.
 */
export async function retrieveRegistrationQuestions() {
  try {
    const data = await fetchRegistrationQuestions();
    return data;
  } catch (error) {
    return [];
  }
}
