

import "./card.css"
function CardStruct({value}) {
  return (
    <li>
      <div className="imgCon">
        <img src={value?.image_url} alt={value?.tagline} />
      </div>
      <div className="cardDescription">
        <p>{value?.tagline}</p>
        <p>{value?.description.slice(0, 100) + "..."}</p>
      </div>
    </li>
  );
}

export default CardStruct;
