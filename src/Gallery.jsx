import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./Context";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;
const Gallery = () => {
  const { searchValue } = useGlobalContext();
  const query = useQuery({
    queryKey: ["images", searchValue],
    queryFn: async () => {
      const response = await axios.get(`${url}&query=${searchValue}`);
      return response.data;
    },
  });
  if (query.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (query.isError) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  }

  const results = query.data.results;
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found...</h4>
      </section>
    );
  }
  return (
    <section className="image-container">
      {results.map((result) => {
        const url = result?.urls?.regular;
        return (
          <img
            src={url}
            key={result.id}
            alt={result.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
};

export default Gallery;
