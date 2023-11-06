export async function getPostBody(id: number) {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(r => r.json())
    // @ts-expect-error Ok for now
  return data.body
}
