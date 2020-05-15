import { useRouter } from "next/router";

const Card = ({ name, count, type }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`/details?q=${name}`);
  };

  return (
    <div className="card-container">
      <div className="info">
        <span className="card-title">{name}</span>
        <span className="count"> {count} </span>
      </div>
      <div className="details">
        <a href={`details?q=${name}`} onClick={handleClick}>
          {type !== "country" ? "Details" : "View Global Cases"}
        </a>
      </div>
    </div>
  );
};

export default Card;
