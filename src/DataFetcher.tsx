import React, { useState, useEffect } from 'react';
import axios from 'axios';



type Post = {
  id: number;
  title: string;
  body: string;
};

interface DataFetcherProps {
  id: number;
}

const DataFetcher: React.FC<DataFetcherProps> = ({ id }) => {
 
  const [data, setData] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
      
      const fetchData = async () => {
          try {
              setLoading(true); 
              setError(null);   

              const response = await axios.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
              setData(response.data);
          } catch (err) {
              setError('Error');
          } finally {
              setLoading(false);
          }
      };

      fetchData();
  }, [id]); 

  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
      <div>
          <h1>Data {id}:</h1>
          <ul>
              {data && data.map(item => (
                  <li key={item.id}>{item.title}</li>
              ))}
          </ul>
      </div>
  );
};

export default DataFetcher;