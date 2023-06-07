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
];

export const dummyData = [
  {
    firstName: "Ruth",
    lastName: "Langworth",
    age: 6,
    visits: 499,
    progress: 48,
    status: "relationship",
  },
  {
    firstName: "Jerel",
    lastName: "Collins",
    age: 23,
    visits: 455,
    progress: 4,
    status: "single",
  },
  {
    firstName: "Waylon",
    lastName: "Cummerata",
    age: 15,
    visits: 380,
    progress: 98,
    status: "single",
  },
  {
    firstName: "Wilfredo",
    lastName: "Blick",
    age: 22,
    visits: 683,
    progress: 94,
    status: "relationship",
  },
  {
    firstName: "Marion",
    lastName: "Koch",
    age: 0,
    visits: 31,
    progress: 93,
    status: "complicated",
  },
  {
    firstName: "Ramiro",
    lastName: "Schroeder",
    age: 12,
    visits: 688,
    progress: 97,
    status: "single",
  },
  {
    firstName: "Colt",
    lastName: "Hessel",
    age: 11,
    visits: 986,
    progress: 98,
    status: "single",
  },
  {
    firstName: "Cesar",
    lastName: "Kihn",
    age: 25,
    visits: 411,
    progress: 27,
    status: "single",
  },
  {
    firstName: "Nathanial",
    lastName: "Hessel",
    age: 33,
    visits: 238,
    progress: 85,
    status: "complicated",
  },
  {
    firstName: "Kara",
    lastName: "Rosenbaum",
    age: 38,
    visits: 962,
    progress: 42,
    status: "complicated",
  },
  {
    firstName: "Sterling",
    lastName: "Howe",
    age: 9,
    visits: 390,
    progress: 20,
    status: "complicated",
  },
  {
    firstName: "Abigayle",
    lastName: "Cormier-Schamberger",
    age: 27,
    visits: 226,
    progress: 42,
    status: "single",
  },
  {
    firstName: "Delfina",
    lastName: "Feeney",
    age: 37,
    visits: 108,
    progress: 11,
    status: "single",
  },
  {
    firstName: "Elaina",
    lastName: "Swaniawski",
    age: 13,
    visits: 271,
    progress: 3,
    status: "complicated",
  },
  {
    firstName: "Ole",
    lastName: "Boehm",
    age: 31,
    visits: 390,
    progress: 60,
    status: "relationship",
  },
  {
    firstName: "Devante",
    lastName: "Goldner",
    age: 15,
    visits: 366,
    progress: 54,
    status: "single",
  },
  {
    firstName: "Ezra",
    lastName: "Mertz",
    age: 6,
    visits: 371,
    progress: 65,
    status: "single",
  },
  {
    firstName: "Sylvia",
    lastName: "Okuneva",
    age: 37,
    visits: 424,
    progress: 15,
    status: "single",
  },
  {
    firstName: "Orin",
    lastName: "Gottlieb",
    age: 37,
    visits: 225,
    progress: 12,
    status: "complicated",
  },
  {
    firstName: "Lacey",
    lastName: "Hamill",
    age: 27,
    visits: 460,
    progress: 78,
    status: "relationship",
  },
  {
    firstName: "Stephania",
    lastName: "Medhurst",
    age: 4,
    visits: 25,
    progress: 73,
    status: "complicated",
  },
  {
    firstName: "Reagan",
    lastName: "Stehr",
    age: 4,
    visits: 572,
    progress: 12,
    status: "relationship",
  },
  {
    firstName: "Avery",
    lastName: "Bins",
    age: 39,
    visits: 144,
    progress: 68,
    status: "relationship",
  },
  {
    firstName: "Randy",
    lastName: "Ondricka",
    age: 37,
    visits: 222,
    progress: 43,
    status: "relationship",
  },
  {
    firstName: "Isaias",
    lastName: "Harvey",
    age: 26,
    visits: 867,
    progress: 58,
    status: "relationship",
  },
  {
    firstName: "Guiseppe",
    lastName: "Hirthe",
    age: 5,
    visits: 939,
    progress: 98,
    status: "single",
  },
  {
    firstName: "Brenden",
    lastName: "Veum",
    age: 29,
    visits: 875,
    progress: 83,
    status: "single",
  },
  {
    firstName: "Garry",
    lastName: "Gorczany",
    age: 29,
    visits: 676,
    progress: 18,
    status: "single",
  },
  {
    firstName: "Bobby",
    lastName: "Swift",
    age: 10,
    visits: 813,
    progress: 52,
    status: "relationship",
  },
  {
    firstName: "Osborne",
    lastName: "Schaefer",
    age: 34,
    visits: 753,
    progress: 7,
    status: "single",
  },
  {
    firstName: "Durward",
    lastName: "Leannon",
    age: 28,
    visits: 807,
    progress: 16,
    status: "relationship",
  },
  {
    firstName: "Rubye",
    lastName: "West",
    age: 15,
    visits: 706,
    progress: 12,
    status: "complicated",
  },
  {
    firstName: "Keenan",
    lastName: "Leannon",
    age: 18,
    visits: 177,
    progress: 8,
    status: "single",
  },
  {
    firstName: "Dan",
    lastName: "Feest",
    age: 14,
    visits: 996,
    progress: 56,
    status: "relationship",
  },
  {
    firstName: "Zelma",
    lastName: "Runolfsdottir",
    age: 18,
    visits: 105,
    progress: 78,
    status: "complicated",
  },
  {
    firstName: "Kale",
    lastName: "Macejkovic",
    age: 37,
    visits: 407,
    progress: 6,
    status: "single",
  },
  {
    firstName: "Connor",
    lastName: "Treutel",
    age: 23,
    visits: 733,
    progress: 55,
    status: "complicated",
  },
  {
    firstName: "Mariano",
    lastName: "Sawayn-Considine",
    age: 8,
    visits: 110,
    progress: 67,
    status: "relationship",
  },
  {
    firstName: "Elinore",
    lastName: "Welch",
    age: 19,
    visits: 50,
    progress: 76,
    status: "complicated",
  },
  {
    firstName: "Jordi",
    lastName: "Maggio",
    age: 32,
    visits: 788,
    progress: 83,
    status: "single",
  },
  {
    firstName: "Georgette",
    lastName: "Carroll",
    age: 35,
    visits: 781,
    progress: 89,
    status: "relationship",
  },
  {
    firstName: "Kelley",
    lastName: "Davis",
    age: 18,
    visits: 581,
    progress: 43,
    status: "single",
  },
  {
    firstName: "Zion",
    lastName: "Ziemann",
    age: 29,
    visits: 301,
    progress: 87,
    status: "complicated",
  },
  {
    firstName: "Lura",
    lastName: "Dicki",
    age: 35,
    visits: 588,
    progress: 20,
    status: "single",
  },
  {
    firstName: "Jovanny",
    lastName: "Little",
    age: 30,
    visits: 434,
    progress: 73,
    status: "single",
  },
  {
    firstName: "Merritt",
    lastName: "Fahey",
    age: 14,
    visits: 88,
    progress: 75,
    status: "complicated",
  },
  {
    firstName: "Armando",
    lastName: "Rath",
    age: 2,
    visits: 774,
    progress: 77,
    status: "single",
  },
  {
    firstName: "Dixie",
    lastName: "Upton",
    age: 38,
    visits: 452,
    progress: 66,
    status: "relationship",
  },
  {
    firstName: "Tavares",
    lastName: "King-Waters",
    age: 30,
    visits: 77,
    progress: 20,
    status: "single",
  },
  {
    firstName: "Vivienne",
    lastName: "Rath",
    age: 13,
    visits: 315,
    progress: 11,
    status: "relationship",
  },
  {
    firstName: "Molly",
    lastName: "Tillman",
    age: 32,
    visits: 202,
    progress: 87,
    status: "complicated",
  },
  {
    firstName: "Zackery",
    lastName: "O'Reilly",
    age: 33,
    visits: 624,
    progress: 56,
    status: "relationship",
  },
  {
    firstName: "Julian",
    lastName: "Miller",
    age: 31,
    visits: 202,
    progress: 49,
    status: "single",
  },
  {
    firstName: "Yvette",
    lastName: "Homenick",
    age: 36,
    visits: 332,
    progress: 74,
    status: "relationship",
  },
  {
    firstName: "Myrtis",
    lastName: "Lehner",
    age: 27,
    visits: 141,
    progress: 34,
    status: "complicated",
  },
  {
    firstName: "Breanne",
    lastName: "Walter",
    age: 16,
    visits: 156,
    progress: 25,
    status: "single",
  },
  {
    firstName: "Ignatius",
    lastName: "Pfeffer",
    age: 6,
    visits: 267,
    progress: 50,
    status: "single",
  },
  {
    firstName: "Laila",
    lastName: "Stark",
    age: 30,
    visits: 515,
    progress: 16,
    status: "complicated",
  },
  {
    firstName: "Antoinette",
    lastName: "Reilly",
    age: 15,
    visits: 865,
    progress: 56,
    status: "relationship",
  },
  {
    firstName: "Hailie",
    lastName: "Wolf",
    age: 34,
    visits: 823,
    progress: 4,
    status: "relationship",
  },
  {
    firstName: "Ellie",
    lastName: "MacGyver",
    age: 30,
    visits: 260,
    progress: 51,
    status: "single",
  },
  {
    firstName: "Raven",
    lastName: "Jerde",
    age: 28,
    visits: 132,
    progress: 13,
    status: "complicated",
  },
  {
    firstName: "Taya",
    lastName: "VonRueden-Gleason",
    age: 39,
    visits: 318,
    progress: 40,
    status: "relationship",
  },
  {
    firstName: "Eloy",
    lastName: "Simonis",
    age: 26,
    visits: 869,
    progress: 34,
    status: "complicated",
  },
  {
    firstName: "Kaleb",
    lastName: "Beatty",
    age: 13,
    visits: 325,
    progress: 10,
    status: "single",
  },
  {
    firstName: "Lucio",
    lastName: "Swift",
    age: 38,
    visits: 106,
    progress: 70,
    status: "complicated",
  },
  {
    firstName: "Liliana",
    lastName: "Padberg",
    age: 29,
    visits: 229,
    progress: 58,
    status: "complicated",
  },
  {
    firstName: "Jed",
    lastName: "Bergnaum",
    age: 4,
    visits: 225,
    progress: 90,
    status: "relationship",
  },
  {
    firstName: "Filiberto",
    lastName: "Hettinger",
    age: 39,
    visits: 145,
    progress: 30,
    status: "complicated",
  },
  {
    firstName: "Mariane",
    lastName: "Borer",
    age: 35,
    visits: 120,
    progress: 95,
    status: "complicated",
  },
  {
    firstName: "Kayley",
    lastName: "Huels",
    age: 15,
    visits: 276,
    progress: 87,
    status: "single",
  },
  {
    firstName: "Jerod",
    lastName: "Marvin",
    age: 1,
    visits: 281,
    progress: 29,
    status: "single",
  },
  {
    firstName: "Shany",
    lastName: "Tillman",
    age: 40,
    visits: 548,
    progress: 51,
    status: "single",
  },
  {
    firstName: "Talia",
    lastName: "Stark",
    age: 21,
    visits: 417,
    progress: 96,
    status: "single",
  },
  {
    firstName: "Carli",
    lastName: "Toy-Doyle",
    age: 40,
    visits: 16,
    progress: 82,
    status: "relationship",
  },
  {
    firstName: "Selina",
    lastName: "Weissnat",
    age: 5,
    visits: 205,
    progress: 33,
    status: "complicated",
  },
  {
    firstName: "Jaime",
    lastName: "Howell",
    age: 3,
    visits: 832,
    progress: 90,
    status: "single",
  },
  {
    firstName: "Shawna",
    lastName: "Ledner",
    age: 3,
    visits: 801,
    progress: 87,
    status: "relationship",
  },
  {
    firstName: "Josianne",
    lastName: "Hermiston",
    age: 32,
    visits: 923,
    progress: 62,
    status: "single",
  },
  {
    firstName: "Moshe",
    lastName: "Spinka",
    age: 21,
    visits: 351,
    progress: 65,
    status: "relationship",
  },
  {
    firstName: "Friedrich",
    lastName: "Harvey",
    age: 11,
    visits: 692,
    progress: 32,
    status: "relationship",
  },
  {
    firstName: "Catharine",
    lastName: "Beier",
    age: 34,
    visits: 192,
    progress: 45,
    status: "single",
  },
  {
    firstName: "Francisca",
    lastName: "Swift",
    age: 33,
    visits: 566,
    progress: 4,
    status: "single",
  },
  {
    firstName: "Belle",
    lastName: "Hessel",
    age: 0,
    visits: 796,
    progress: 16,
    status: "complicated",
  },
  {
    firstName: "Tyreek",
    lastName: "Rutherford",
    age: 18,
    visits: 188,
    progress: 50,
    status: "single",
  },
  {
    firstName: "Chyna",
    lastName: "Mayer",
    age: 32,
    visits: 823,
    progress: 76,
    status: "complicated",
  },
  {
    firstName: "Norberto",
    lastName: "O'Connell",
    age: 6,
    visits: 727,
    progress: 98,
    status: "complicated",
  },
  {
    firstName: "Lois",
    lastName: "Rogahn",
    age: 7,
    visits: 272,
    progress: 74,
    status: "relationship",
  },
  {
    firstName: "Jazlyn",
    lastName: "Klocko",
    age: 18,
    visits: 386,
    progress: 23,
    status: "single",
  },
  {
    firstName: "Name",
    lastName: "Labadie",
    age: 21,
    visits: 964,
    progress: 98,
    status: "single",
  },
  {
    firstName: "Megane",
    lastName: "Jenkins",
    age: 25,
    visits: 995,
    progress: 17,
    status: "single",
  },
  {
    firstName: "Kristofer",
    lastName: "Ebert",
    age: 2,
    visits: 634,
    progress: 84,
    status: "single",
  },
  {
    firstName: "Isadore",
    lastName: "Waters",
    age: 7,
    visits: 899,
    progress: 89,
    status: "complicated",
  },
  {
    firstName: "Lillian",
    lastName: "Mayer",
    age: 5,
    visits: 254,
    progress: 41,
    status: "complicated",
  },
  {
    firstName: "Sigrid",
    lastName: "Veum",
    age: 37,
    visits: 642,
    progress: 21,
    status: "complicated",
  },
  {
    firstName: "Zora",
    lastName: "Considine",
    age: 40,
    visits: 845,
    progress: 19,
    status: "complicated",
  },
  {
    firstName: "Eugenia",
    lastName: "Wehner",
    age: 29,
    visits: 146,
    progress: 74,
    status: "complicated",
  },
  {
    firstName: "Delbert",
    lastName: "Stokes",
    age: 7,
    visits: 462,
    progress: 46,
    status: "relationship",
  },
  {
    firstName: "Antonia",
    lastName: "Hamill",
    age: 33,
    visits: 805,
    progress: 25,
    status: "complicated",
  },
  {
    firstName: "Raymundo",
    lastName: "Cummings",
    age: 3,
    visits: 680,
    progress: 71,
    status: "relationship",
  },
];
