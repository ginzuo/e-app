<template>
    <div>
        <p>There are {{ data?.ships?.length || 0 }} ships.</p>
    </div>
</template>
  
<script lang="ts" setup>
const query = gql`
query getShips($limit: Int!) {
  ships(limit: $limit) {
    id
    name
  }
}
`
const variables = { limit: 5 }

const { data } = await useAsyncQuery(query, variables)
</script>
