import { Suspense } from "react";
import TryLang from "./components/TestComp";
import TryLangTwo from "./components/TestCompTwo";
import Spinner from "../../components/ui/spinner";

// async function getArtist() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/comments");
//   return new Promise((resolve) => {
//     setTimeout(async () => {
//       const yo = await res.json();
//       console.log("FETCHING ARTIST DONE");
//       resolve(yo);
//     }, 1000);
//   });
// }

// async function getPhotos() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/photos");
//   return new Promise((resolve) => {
//     setTimeout(async () => {
//       const yo = await res.json();
//       console.log("FETCHING PHOTOS DONE");
//       resolve(yo);
//     }, 1000);
//   });
// }

// async function getUsers() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return new Promise((resolve) => {
//     setTimeout(async () => {
//       const yo = await res.json();
//       console.log("FETCHING USERS DONE");
//       resolve(yo);
//     }, 1000);
//   });
// }
/**
 * - Do fetch requset on a page component
 * - It's recommended to fetch 
 * - If the requested data will be shared in all subcomponents on certain page,
 *   then [FETCH] data in the page component.

 */
export default async function Page() {
  // Initiate requests in parallel
  // const artistData = getArtist();
  // const photosData = getPhotos();
  // const usersData = getUsers();

  const displayUsers = async () => {
    const artist = await artistData;
    return (
      <div>
        <h2>NAME</h2>
        <p>{artist[0].name}</p>
      </div>
    );
  };
  return (
    <>
      {/* {displayUsers()} */}
      <Suspense fallback={<>LOADING...</>}>
        <h1>Hello, Dashboard Page!</h1>
        <Suspense fallback={<Spinner />}>
          {/* @ts-expect-error Async Server Component */}
          {/* <TryLang promise={photosData} /> */}
        </Suspense>
        <Suspense
          fallback={
            <>
              <Spinner />
              <p> 2 content LOADING...</p>
            </>
          }
        >
          {/* @ts-expect-error Async Server Component */}
          {/* <TryLangTwo promise={usersData} /> */}
        </Suspense>
      </Suspense>
    </>
  );
}
