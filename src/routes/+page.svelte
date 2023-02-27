<script lang="ts">
  import { ApolloClient, InMemoryCache } from "@apollo/client/core";
  import { setClient, query } from "svelte-apollo";
  import { GET_USER, type GetUser } from "$lib/queries";

  const client = new ApolloClient({
    uri: "https://graphql.anilist.co",
    cache: new InMemoryCache(),
  });
  setClient(client);

  const user = query<GetUser>(GET_USER);
</script>

<pre>
  {JSON.stringify($user, null, 2)}
</pre>
