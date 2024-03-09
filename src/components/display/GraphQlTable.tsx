import React, { useState, useEffect } from 'react';

const GraphQLTable = ({ query, endpoint = 'http://localhost:4000/graphql' } : {query : string, endpoint :string}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.errors) {
          setError(response.errors.map((e : any) => e.message).join(', '));
        } else {
          setData(response.data);
        }
      })
      .catch((error) => {
        console.log(`Network error: ${error.message}`);
      });
  }, [query, endpoint]);

  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>Loading...</p>;

  // Extract keys for table headers
  const entries = Object.entries(data).flatMap(([key, value]) => 
    value instanceof Array ? value : [{ [key]: value }]
  );
  const headers = entries.length > 0 ? Object.keys(entries[0]) : [];

  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Data from Server</h1>
      {entries.length > 0 ? (
        <table>
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header}>{header.replace(/_/g, ' ')}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <tr key={index}>
                {headers.map((header) => (
                  <td key={header}>{entry[header] ?? 'N/A'}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default GraphQLTable;
