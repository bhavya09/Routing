const MemeCard = ({ data }) => {
  const { url, title, author } = data;

  return (
    <>
      <div className="imageBox">
        <img className="imageClass" alt="meme" src={url} />
        <p>{author}</p>
      </div>
    </>
  );
};

export default MemeCard;
