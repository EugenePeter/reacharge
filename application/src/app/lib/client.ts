import {
  ApolloQueryResult,
  ApolloClient,
  HttpLink,
  InMemoryCache,
  OperationVariables,
  QueryOptions,
} from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const revalidate = 10; // revalidate this page every 60 seconds
export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      // https://studio.apollographql.com/public/spacex-l4uc6p/
      uri: "http://localhost:4000",
      // you can disable result caching here if you want to
      // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
      // fetchOptions: { cache: "no-store" },
    }),
  });
});

export const query = async <
  T = any,
  TVariables extends OperationVariables = OperationVariables
>(
  options: QueryOptions<TVariables, T>
): Promise<ApolloQueryResult<T>> => {
  const { query, variables } = options;
  const { getClient } = registerApolloClient(
    () =>
      new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
          uri: "http://localhost:4000",
          // fetchOptions: { cache: "no-store" },
        }),
      })
  );
  return getClient().query({ query, variables });
};
