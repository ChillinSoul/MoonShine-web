interface GqlParams {
    query: string;
    variables: object;
    }


export async function getGqlData({query, variables}: GqlParams) {
    const response = await fetch(import.meta.env.VITE_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({query, variables})
    });
    return await response.json();
}
