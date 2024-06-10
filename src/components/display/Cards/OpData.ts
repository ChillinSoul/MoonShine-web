export async function getData() {
  const query = `
    query total {
      totalAffaires
      totalColis
      totalPoids
}
`;
  const response = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: query,
    }),
  });

  const json = await response.json();
  console.log(json);
  const Affaires = json.data;
  return Affaires;
}
