import { useEffect, useState } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";
import "./styles.css";

const Body = () => {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMemes = async () => {
    setLoading(true);
    const data = await fetch(`https://meme-api.com/gimme/29`);
    const json = await data.json();

    // setMemes(json.memes);
    setMemes((memes) => [...memes, ...json.memes]);
    setLoading(false);
  };

  // const handleScroll = () => {
  //   // scrollY - how much i Have scrolled
  //   // innerHeight - height of the window (visible section)
  //   // document.body.scrollHeight - total height of the webpage
  //   if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
  //     fetchMemes();
  //   }
  // };

  const handleScroll = () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      fetchMemes();
    }
  };

  // useEffect(() => {
  //   fetchMemes();

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    fetchMemes();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="imageContainer">
      {loading ? (
        <Shimmer />
      ) : (
        memes &&
        memes?.map((meme, i) => {
          return <MemeCard key={i} data={meme} />;
        })
      )}
    </div>
  );
};

export default Body;
