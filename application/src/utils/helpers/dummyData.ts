import { faker } from "@faker-js/faker";

export type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  progress: number;
  status: "relationship" | "complicated" | "single";
};

export type Members = {
  name: string;
  label?: Array<{} | string | number>;
  task: Array<{
    done: number;
    total: number;
  }>;
  dateJoined: any;
  performance: [{}];
};

const range = (len: number) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = (): Person => {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    age: faker.number.int(40),
    visits: faker.number.int(1000),
    progress: faker.number.int(100),
    status: faker.helpers.shuffle<Person["status"]>([
      "relationship",
      "complicated",
      "single",
    ])[0]!,
  };
};

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Person[] => {
    const len = lens[depth]!;
    return range(len).map((d): Person => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}

export const dummyMembers: Array<Members> = [
  {
    name: "Eugene Peter",
    label: [
      {
        value: "agency",
        color: "warning",
      },
      {
        value: "hr",
        color: "success",
      },
    ],
    task: [
      {
        done: 10,
        total: 10,
      },
    ],
    dateJoined: "january",
    performance: [
      {
        indicator: "info",
        trend: "upwards",
        stars: 4,
      },
    ],
  },
  {
    name: "John Doe",
    label: [
      {
        value: "marketing",
        color: "primary",
      },
      {
        value: "sales",
        color: "danger",
      },
    ],
    task: [
      {
        done: 7,
        total: 12,
      },
    ],
    dateJoined: "february",
    performance: [
      {
        indicator: "info",
        trend: "upwards",
        stars: 2,
      },
    ],
  },
  {
    name: "Jane Smith",
    task: [
      {
        done: 3,
        total: 8,
      },
    ],
    dateJoined: "march",
    performance: [
      {
        indicator: "danger",
        trend: "downwards",
        stars: 4,
      },
    ],
  },
  {
    name: "David Johnson",
    task: [
      {
        done: 10,
        total: 15,
      },
    ],
    dateJoined: "april",
    performance: [
      {
        indicator: "info",
        trend: "upwards",
        stars: 4,
      },
    ],
  },
  {
    name: "Sarah Williams",
    label: [
      {
        value: "operations",
        color: "warning",
      },
      {
        value: "customer support",
        color: "info",
      },
    ],
    task: [
      {
        done: 6,
        total: 10,
      },
    ],
    dateJoined: "may",
    performance: [
      {
        indicator: "warning",
        trend: "upwards",
        stars: 1,
      },
    ],
  },
  {
    name: "Eugene Peter",
    task: [
      {
        done: 10,
        total: 10,
      },
    ],
    dateJoined: "january",
    performance: [
      {
        indicator: "info",
        trend: "upwards",
        stars: 4,
      },
    ],
  },
  {
    name: "John Doe",
    task: [
      {
        done: 7,
        total: 12,
      },
    ],
    dateJoined: "february",
    performance: [
      {
        indicator: "info",
        trend: "upwards",
        stars: 2,
      },
    ],
  },
  {
    name: "Jane Smith",
    label: [
      {
        value: "finance",
        color: "info",
      },
      {
        value: "operations",
        color: "success",
      },
    ],
    task: [
      {
        done: 3,
        total: 8,
      },
    ],
    dateJoined: "march",
    performance: [
      {
        indicator: "danger",
        trend: "downwards",
        stars: 4,
      },
    ],
  },
  {
    name: "David Johnson",
    label: [
      {
        value: "it",
        color: "info",
      },
      {
        value: "development",
        color: "success",
      },
    ],
    task: [
      {
        done: 10,
        total: 15,
      },
    ],
    dateJoined: "april",
    performance: [
      {
        indicator: "success",
        trend: "upwards",
        stars: 4,
      },
    ],
  },
  {
    name: "Sarah Williams",
    label: [
      {
        value: "operations",
        color: "warning",
      },
      {
        value: "customer support",
        color: "success",
      },
    ],
    task: [
      {
        done: 6,
        total: 10,
      },
    ],
    dateJoined: "may",
    performance: [
      {
        indicator: "warning",
        trend: "upwards",
        stars: 1,
      },
    ],
  },
  {
    name: "Eugene Peter",
    label: [
      {
        value: "agency",
        color: "warning",
      },
      {
        value: "hr",
        color: "success",
      },
    ],
    task: [
      {
        done: 10,
        total: 10,
      },
    ],
    dateJoined: "january",
    performance: [
      {
        indicator: "info",
        trend: "upwards",
        stars: 4,
      },
    ],
  },
  {
    name: "John Doe",
    task: [
      {
        done: 7,
        total: 12,
      },
    ],
    dateJoined: "february",
    performance: [
      {
        indicator: "success",
        trend: "upwards",
        stars: 2,
      },
    ],
  },
  {
    name: "Jane Smith",
    label: [
      {
        value: "finance",
        color: "info",
      },
      {
        value: "operations",
        color: "success",
      },
    ],
    task: [
      {
        done: 3,
        total: 8,
      },
    ],
    dateJoined: "march",
    performance: [
      {
        indicator: "danger",
        trend: "downwards",
        stars: 4,
      },
    ],
  },
  {
    name: "David Johnson",
    label: [
      {
        value: "it",
        color: "info",
      },
      {
        value: "development",
        color: "success",
      },
    ],
    task: [
      {
        done: 10,
        total: 15,
      },
    ],
    dateJoined: "april",
    performance: [
      {
        indicator: "success",
        trend: "upwards",
        stars: 4,
      },
    ],
  },
  {
    name: "Sarah Williams",
    label: [
      {
        value: "operations",
        color: "warning",
      },
      {
        value: "customer support",
        color: "success",
      },
    ],
    task: [
      {
        done: 6,
        total: 10,
      },
    ],
    dateJoined: "may",
    performance: [
      {
        indicator: "warning",
        trend: "upwards",
        stars: 1,
      },
    ],
  },
  {
    name: "Eugene Peter",
    label: [
      {
        value: "agency",
        color: "warning",
      },
      {
        value: "hr",
        color: "success",
      },
    ],
    task: [
      {
        done: 10,
        total: 10,
      },
    ],
    dateJoined: "january",
    performance: [
      {
        indicator: "info",
        trend: "upwards",
        stars: 4,
      },
    ],
  },
  {
    name: "John Doe",
    task: [
      {
        done: 7,
        total: 12,
      },
    ],
    dateJoined: "february",
    performance: [
      {
        indicator: "success",
        trend: "upwards",
        stars: 2,
      },
    ],
  },
  {
    name: "Jane Smith",
    label: [
      {
        value: "finance",
        color: "info",
      },
      {
        value: "operations",
        color: "success",
      },
    ],
    task: [
      {
        done: 3,
        total: 8,
      },
    ],
    dateJoined: "march",
    performance: [
      {
        indicator: "danger",
        trend: "downwards",
        stars: 4,
      },
    ],
  },
  {
    name: "David Johnson",

    task: [
      {
        done: 10,
        total: 15,
      },
    ],
    dateJoined: "april",
    performance: [
      {
        indicator: "success",
        trend: "upwards",
        stars: 4,
      },
    ],
  },
  {
    name: "Sarah Williams",
    label: [
      {
        value: "operations",
        color: "warning",
      },
      {
        value: "customer support",
        color: "success",
      },
    ],
    task: [
      {
        done: 6,
        total: 10,
      },
    ],
    dateJoined: "may",
    performance: [
      {
        indicator: "warning",
        trend: "upwards",
        stars: 1,
      },
    ],
  },
  {
    name: "Eugene Peter",

    task: [
      {
        done: 10,
        total: 10,
      },
    ],
    dateJoined: "january",
    performance: [
      {
        indicator: "info",
        trend: "upwards",
        stars: 4,
      },
    ],
  },
  {
    name: "John Doe",

    task: [
      {
        done: 7,
        total: 12,
      },
    ],
    dateJoined: "february",
    performance: [
      {
        indicator: "success",
        trend: "upwards",
        stars: 2,
      },
    ],
  },
  {
    name: "Jane Smith",
    label: [
      {
        value: "finance",
        color: "info",
      },
      {
        value: "operations",
        color: "success",
      },
    ],
    task: [
      {
        done: 3,
        total: 8,
      },
    ],
    dateJoined: "march",
    performance: [
      {
        indicator: "danger",
        trend: "downwards",
        stars: 4,
      },
    ],
  },
  {
    name: "David Johnson",

    task: [
      {
        done: 10,
        total: 15,
      },
    ],
    dateJoined: "april",
    performance: [
      {
        indicator: "success",
        trend: "upwards",
        stars: 4,
      },
    ],
  },
  {
    name: "Sarah Williams",
    label: [
      {
        value: "operations",
        color: "warning",
      },
      {
        value: "customer support",
        color: "success",
      },
    ],
    task: [
      {
        done: 6,
        total: 10,
      },
    ],
    dateJoined: "may",
    performance: [
      {
        indicator: "warning",
        trend: "upwards",
        stars: 1,
      },
    ],
  },
  {
    name: "Eugene Peter",
    label: [
      {
        value: "agency",
        color: "warning",
      },
      {
        value: "hr",
        color: "success",
      },
    ],
    task: [
      {
        done: 10,
        total: 10,
      },
    ],
    dateJoined: "january",
    performance: [
      {
        indicator: "info",
        trend: "upwards",
        stars: 4,
      },
    ],
  },
  {
    name: "John Doe",

    task: [
      {
        done: 7,
        total: 12,
      },
    ],
    dateJoined: "february",
    performance: [
      {
        indicator: "success",
        trend: "upwards",
        stars: 2,
      },
    ],
  },
  {
    name: "Jane Smith",
    label: [
      {
        value: "finance",
        color: "info",
      },
      {
        value: "operations",
        color: "success",
      },
    ],
    task: [
      {
        done: 3,
        total: 8,
      },
    ],
    dateJoined: "march",
    performance: [
      {
        indicator: "danger",
        trend: "downwards",
        stars: 4,
      },
    ],
  },
  {
    name: "David Johnson",
    label: [
      {
        value: "it",
        color: "info",
      },
      {
        value: "development",
        color: "success",
      },
    ],
    task: [
      {
        done: 10,
        total: 15,
      },
    ],
    dateJoined: "april",
    performance: [
      {
        indicator: "success",
        trend: "upwards",
        stars: 4,
      },
    ],
  },
  {
    name: "Sarah Williams",
    label: [
      {
        value: "operations",
        color: "warning",
      },
      {
        value: "customer support",
        color: "success",
      },
    ],
    task: [
      {
        done: 6,
        total: 10,
      },
    ],
    dateJoined: "may",
    performance: [
      {
        indicator: "warning",
        trend: "upwards",
        stars: 1,
      },
    ],
  },
  {
    name: "Eugene Peter",
    label: [
      {
        value: "agency",
        color: "warning",
      },
      {
        value: "hr",
        color: "success",
      },
    ],
    task: [
      {
        done: 10,
        total: 10,
      },
    ],
    dateJoined: "january",
    performance: [
      {
        indicator: "info",
        trend: "upwards",
        stars: 4,
      },
    ],
  },
  {
    name: "John Doe",
    label: [
      {
        value: "marketing",
        color: "primary",
      },
      {
        value: "sales",
        color: "danger",
      },
    ],
    task: [
      {
        done: 7,
        total: 12,
      },
    ],
    dateJoined: "february",
    performance: [
      {
        indicator: "success",
        trend: "upwards",
        stars: 2,
      },
    ],
  },
  {
    name: "Jane Smith",
    label: [
      {
        value: "finance",
        color: "info",
      },
      {
        value: "operations",
        color: "success",
      },
    ],
    task: [
      {
        done: 3,
        total: 8,
      },
    ],
    dateJoined: "march",
    performance: [
      {
        indicator: "danger",
        trend: "downwards",
        stars: 4,
      },
    ],
  },
  {
    name: "David Johnson",
    label: [
      {
        value: "it",
        color: "info",
      },
      {
        value: "development",
        color: "success",
      },
    ],
    task: [
      {
        done: 10,
        total: 15,
      },
    ],
    dateJoined: "april",
    performance: [
      {
        indicator: "success",
        trend: "upwards",
        stars: 4,
      },
    ],
  },
  {
    name: "Sarah Williams",
    label: [
      {
        value: "operations",
        color: "warning",
      },
      {
        value: "customer support",
        color: "success",
      },
    ],
    task: [
      {
        done: 6,
        total: 10,
      },
    ],
    dateJoined: "may",
    performance: [
      {
        indicator: "warning",
        trend: "upwards",
        stars: 1,
      },
    ],
  },
  {
    name: "Eugene Peter",
    label: [
      {
        value: "agency",
        color: "warning",
      },
      {
        value: "hr",
        color: "success",
      },
    ],
    task: [
      {
        done: 10,
        total: 10,
      },
    ],
    dateJoined: "january",
    performance: [
      {
        indicator: "info",
        trend: "upwards",
        stars: 4,
      },
    ],
  },
  {
    name: "John Doe",
    label: [
      {
        value: "marketing",
        color: "primary",
      },
      {
        value: "sales",
        color: "danger",
      },
    ],
    task: [
      {
        done: 7,
        total: 12,
      },
    ],
    dateJoined: "february",
    performance: [
      {
        indicator: "success",
        trend: "upwards",
        stars: 2,
      },
    ],
  },
  {
    name: "Jane Smith",
    label: [
      {
        value: "finance",
        color: "info",
      },
      {
        value: "operations",
        color: "success",
      },
    ],
    task: [
      {
        done: 3,
        total: 8,
      },
    ],
    dateJoined: "march",
    performance: [
      {
        indicator: "danger",
        trend: "downwards",
        stars: 4,
      },
    ],
  },
  {
    name: "David Johnson",
    label: [
      {
        value: "it",
        color: "info",
      },
      {
        value: "development",
        color: "success",
      },
    ],
    task: [
      {
        done: 10,
        total: 15,
      },
    ],
    dateJoined: "april",
    performance: [
      {
        indicator: "success",
        trend: "upwards",
        stars: 4,
      },
    ],
  },
  {
    name: "Sarah Williams",
    task: [
      {
        done: 6,
        total: 10,
      },
    ],
    dateJoined: "may",
    performance: [
      {
        indicator: "warning",
        trend: "upwards",
        stars: 1,
      },
    ],
  },
  {
    name: "Eugene Peter",
    label: [
      {
        value: "agency",
        color: "warning",
      },
      {
        value: "hr",
        color: "success",
      },
    ],
    task: [
      {
        done: 10,
        total: 10,
      },
    ],
    dateJoined: "january",
    performance: [
      {
        indicator: "info",
        trend: "upwards",
        stars: 4,
      },
    ],
  },
  {
    name: "John Doe",
    label: [
      {
        value: "marketing",
        color: "primary",
      },
      {
        value: "sales",
        color: "danger",
      },
    ],
    task: [
      {
        done: 7,
        total: 12,
      },
    ],
    dateJoined: "february",
    performance: [
      {
        indicator: "info",
        trend: "upwards",
        stars: 2,
      },
    ],
  },
  {
    name: "Jane Smith",
    task: [
      {
        done: 3,
        total: 8,
      },
    ],
    dateJoined: "march",
    performance: [
      {
        indicator: "danger",
        trend: "downwards",
        stars: 4,
      },
    ],
  },
  {
    name: "David Johnson",
    task: [
      {
        done: 10,
        total: 15,
      },
    ],
    dateJoined: "april",
    performance: [
      {
        indicator: "info",
        trend: "upwards",
        stars: 4,
      },
    ],
  },
  {
    name: "Sarah Williams",
    label: [
      {
        value: "operations",
        color: "warning",
      },
      {
        value: "customer support",
        color: "info",
      },
    ],
    task: [
      {
        done: 6,
        total: 10,
      },
    ],
    dateJoined: "may",
    performance: [
      {
        indicator: "warning",
        trend: "upwards",
        stars: 1,
      },
    ],
  },
  {
    name: "Eugene Peter",
    task: [
      {
        done: 10,
        total: 10,
      },
    ],
    dateJoined: "january",
    performance: [
      {
        indicator: "info",
        trend: "upwards",
        stars: 4,
      },
    ],
  },
  {
    name: "John Doe",
    task: [
      {
        done: 7,
        total: 12,
      },
    ],
    dateJoined: "february",
    performance: [
      {
        indicator: "info",
        trend: "upwards",
        stars: 2,
      },
    ],
  },
  {
    name: "Jane Smith",
    label: [
      {
        value: "finance",
        color: "info",
      },
      {
        value: "operations",
        color: "success",
      },
    ],
    task: [
      {
        done: 3,
        total: 8,
      },
    ],
    dateJoined: "march",
    performance: [
      {
        indicator: "danger",
        trend: "downwards",
        stars: 4,
      },
    ],
  },
  {
    name: "David Johnson",
    label: [
      {
        value: "it",
        color: "info",
      },
      {
        value: "development",
        color: "success",
      },
    ],
    task: [
      {
        done: 10,
        total: 15,
      },
    ],
    dateJoined: "april",
    performance: [
      {
        indicator: "success",
        trend: "upwards",
        stars: 4,
      },
    ],
  },
  {
    name: "Sarah Williams",
    label: [
      {
        value: "operations",
        color: "warning",
      },
      {
        value: "customer support",
        color: "success",
      },
    ],
    task: [
      {
        done: 6,
        total: 10,
      },
    ],
    dateJoined: "may",
    performance: [
      {
        indicator: "warning",
        trend: "upwards",
        stars: 1,
      },
    ],
  },
  {
    name: "Eugene Peter",
    label: [
      {
        value: "agency",
        color: "warning",
      },
      {
        value: "hr",
        color: "success",
      },
    ],
    task: [
      {
        done: 10,
        total: 10,
      },
    ],
    dateJoined: "january",
    performance: [
      {
        indicator: "info",
        trend: "upwards",
        stars: 4,
      },
    ],
  },
  {
    name: "John Doe",
    task: [
      {
        done: 7,
        total: 12,
      },
    ],
    dateJoined: "february",
    performance: [
      {
        indicator: "success",
        trend: "upwards",
        stars: 2,
      },
    ],
  },
  {
    name: "Jane Smith",
    label: [
      {
        value: "finance",
        color: "info",
      },
      {
        value: "operations",
        color: "success",
      },
    ],
    task: [
      {
        done: 3,
        total: 8,
      },
    ],
    dateJoined: "march",
    performance: [
      {
        indicator: "danger",
        trend: "downwards",
        stars: 4,
      },
    ],
  },
  {
    name: "David Johnson",
    label: [
      {
        value: "it",
        color: "info",
      },
      {
        value: "development",
        color: "success",
      },
    ],
    task: [
      {
        done: 10,
        total: 15,
      },
    ],
    dateJoined: "april",
    performance: [
      {
        indicator: "success",
        trend: "upwards",
        stars: 4,
      },
    ],
  },
  {
    name: "Sarah Williams",
    label: [
      {
        value: "operations",
        color: "warning",
      },
      {
        value: "customer support",
        color: "success",
      },
    ],
    task: [
      {
        done: 6,
        total: 10,
      },
    ],
    dateJoined: "may",
    performance: [
      {
        indicator: "warning",
        trend: "upwards",
        stars: 1,
      },
    ],
  },
  {
    name: "Eugene Peter",
    label: [
      {
        value: "agency",
        color: "warning",
      },
      {
        value: "hr",
        color: "success",
      },
    ],
    task: [
      {
        done: 10,
        total: 10,
      },
    ],
    dateJoined: "january",
    performance: [
      {
        indicator: "info",
        trend: "upwards",
        stars: 4,
      },
    ],
  },
  {
    name: "John Doe",
    task: [
      {
        done: 7,
        total: 12,
      },
    ],
    dateJoined: "february",
    performance: [
      {
        indicator: "success",
        trend: "upwards",
        stars: 2,
      },
    ],
  },
  {
    name: "Jane Smith",
    label: [
      {
        value: "finance",
        color: "info",
      },
      {
        value: "operations",
        color: "success",
      },
    ],
    task: [
      {
        done: 3,
        total: 8,
      },
    ],
    dateJoined: "march",
    performance: [
      {
        indicator: "danger",
        trend: "downwards",
        stars: 4,
      },
    ],
  },
  {
    name: "David Johnson",

    task: [
      {
        done: 10,
        total: 15,
      },
    ],
    dateJoined: "april",
    performance: [
      {
        indicator: "success",
        trend: "upwards",
        stars: 4,
      },
    ],
  },
  {
    name: "Sarah Williams",
    label: [
      {
        value: "operations",
        color: "warning",
      },
      {
        value: "customer support",
        color: "success",
      },
    ],
    task: [
      {
        done: 6,
        total: 10,
      },
    ],
    dateJoined: "may",
    performance: [
      {
        indicator: "warning",
        trend: "upwards",
        stars: 1,
      },
    ],
  },
  {
    name: "Eugene Peter",

    task: [
      {
        done: 10,
        total: 10,
      },
    ],
    dateJoined: "january",
    performance: [
      {
        indicator: "info",
        trend: "upwards",
        stars: 4,
      },
    ],
  },
  {
    name: "John Doe",

    task: [
      {
        done: 7,
        total: 12,
      },
    ],
    dateJoined: "february",
    performance: [
      {
        indicator: "success",
        trend: "upwards",
        stars: 2,
      },
    ],
  },
  {
    name: "Jane Smith",
    label: [
      {
        value: "finance",
        color: "info",
      },
      {
        value: "operations",
        color: "success",
      },
    ],
    task: [
      {
        done: 3,
        total: 8,
      },
    ],
    dateJoined: "march",
    performance: [
      {
        indicator: "danger",
        trend: "downwards",
        stars: 4,
      },
    ],
  },
  {
    name: "David Johnson",

    task: [
      {
        done: 10,
        total: 15,
      },
    ],
    dateJoined: "april",
    performance: [
      {
        indicator: "success",
        trend: "upwards",
        stars: 4,
      },
    ],
  },
  {
    name: "Sarah Williams",
    label: [
      {
        value: "operations",
        color: "warning",
      },
      {
        value: "customer support",
        color: "success",
      },
    ],
    task: [
      {
        done: 6,
        total: 10,
      },
    ],
    dateJoined: "may",
    performance: [
      {
        indicator: "warning",
        trend: "upwards",
        stars: 1,
      },
    ],
  },
  {
    name: "Eugene Peter",
    label: [
      {
        value: "agency",
        color: "warning",
      },
      {
        value: "hr",
        color: "success",
      },
    ],
    task: [
      {
        done: 10,
        total: 10,
      },
    ],
    dateJoined: "january",
    performance: [
      {
        indicator: "info",
        trend: "upwards",
        stars: 4,
      },
    ],
  },
  {
    name: "John Doe",

    task: [
      {
        done: 7,
        total: 12,
      },
    ],
    dateJoined: "february",
    performance: [
      {
        indicator: "success",
        trend: "upwards",
        stars: 2,
      },
    ],
  },
  {
    name: "Jane Smith",
    label: [
      {
        value: "finance",
        color: "info",
      },
      {
        value: "operations",
        color: "success",
      },
    ],
    task: [
      {
        done: 3,
        total: 8,
      },
    ],
    dateJoined: "march",
    performance: [
      {
        indicator: "danger",
        trend: "downwards",
        stars: 4,
      },
    ],
  },
  {
    name: "David Johnson",
    label: [
      {
        value: "it",
        color: "info",
      },
      {
        value: "development",
        color: "success",
      },
    ],
    task: [
      {
        done: 10,
        total: 15,
      },
    ],
    dateJoined: "april",
    performance: [
      {
        indicator: "success",
        trend: "upwards",
        stars: 4,
      },
    ],
  },
  {
    name: "Sarah Williams",
    label: [
      {
        value: "operations",
        color: "warning",
      },
      {
        value: "customer support",
        color: "success",
      },
    ],
    task: [
      {
        done: 6,
        total: 10,
      },
    ],
    dateJoined: "may",
    performance: [
      {
        indicator: "warning",
        trend: "upwards",
        stars: 1,
      },
    ],
  },
  {
    name: "Eugene Peter",
    label: [
      {
        value: "agency",
        color: "warning",
      },
      {
        value: "hr",
        color: "success",
      },
    ],
    task: [
      {
        done: 10,
        total: 10,
      },
    ],
    dateJoined: "january",
    performance: [
      {
        indicator: "info",
        trend: "upwards",
        stars: 4,
      },
    ],
  },
  {
    name: "John Doe",
    label: [
      {
        value: "marketing",
        color: "primary",
      },
      {
        value: "sales",
        color: "danger",
      },
    ],
    task: [
      {
        done: 7,
        total: 12,
      },
    ],
    dateJoined: "february",
    performance: [
      {
        indicator: "success",
        trend: "upwards",
        stars: 2,
      },
    ],
  },
  {
    name: "Jane Smith",
    label: [
      {
        value: "finance",
        color: "info",
      },
      {
        value: "operations",
        color: "success",
      },
    ],
    task: [
      {
        done: 3,
        total: 8,
      },
    ],
    dateJoined: "march",
    performance: [
      {
        indicator: "danger",
        trend: "downwards",
        stars: 4,
      },
    ],
  },
  {
    name: "David Johnson",
    label: [
      {
        value: "it",
        color: "info",
      },
      {
        value: "development",
        color: "success",
      },
    ],
    task: [
      {
        done: 10,
        total: 15,
      },
    ],
    dateJoined: "april",
    performance: [
      {
        indicator: "success",
        trend: "upwards",
        stars: 4,
      },
    ],
  },
  {
    name: "Sarah Williams",
    label: [
      {
        value: "operations",
        color: "warning",
      },
      {
        value: "customer support",
        color: "success",
      },
    ],
    task: [
      {
        done: 6,
        total: 10,
      },
    ],
    dateJoined: "may",
    performance: [
      {
        indicator: "warning",
        trend: "upwards",
        stars: 1,
      },
    ],
  },
  {
    name: "Eugene Peter",
    label: [
      {
        value: "agency",
        color: "warning",
      },
      {
        value: "hr",
        color: "success",
      },
    ],
    task: [
      {
        done: 10,
        total: 10,
      },
    ],
    dateJoined: "january",
    performance: [
      {
        indicator: "info",
        trend: "upwards",
        stars: 4,
      },
    ],
  },
  {
    name: "John Doe",
    label: [
      {
        value: "marketing",
        color: "primary",
      },
      {
        value: "sales",
        color: "danger",
      },
    ],
    task: [
      {
        done: 7,
        total: 12,
      },
    ],
    dateJoined: "february",
    performance: [
      {
        indicator: "success",
        trend: "upwards",
        stars: 2,
      },
    ],
  },
  {
    name: "Jane Smith",
    label: [
      {
        value: "finance",
        color: "info",
      },
      {
        value: "operations",
        color: "success",
      },
    ],
    task: [
      {
        done: 3,
        total: 8,
      },
    ],
    dateJoined: "march",
    performance: [
      {
        indicator: "danger",
        trend: "downwards",
        stars: 4,
      },
    ],
  },
  {
    name: "David Johnson",
    label: [
      {
        value: "it",
        color: "info",
      },
      {
        value: "development",
        color: "success",
      },
    ],
    task: [
      {
        done: 10,
        total: 15,
      },
    ],
    dateJoined: "april",
    performance: [
      {
        indicator: "success",
        trend: "upwards",
        stars: 4,
      },
    ],
  },
  {
    name: "Sarah Williams",
    task: [
      {
        done: 6,
        total: 10,
      },
    ],
    dateJoined: "may",
    performance: [
      {
        indicator: "warning",
        trend: "upwards",
        stars: 1,
      },
    ],
  },
];
