import { Suspense } from "react";
import Spinner from "../../components/ui/spinner";

export default async function Page() {
  return (
    <>
      <Suspense fallback={<>LOADING...</>}>
        <Suspense fallback={<Spinner />}>
          <h1>WORKSPACE PAGE!!!</h1>
        </Suspense>
        <Suspense
          fallback={
            <>
              <Spinner />
              <p> 2 content LOADING...</p>
            </>
          }
        ></Suspense>
      </Suspense>
    </>
  );
}
