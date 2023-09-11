import { useContext } from "react";
import { APIData } from "../context/APIContext";
import CardStruct from "./CardStruct";

function Card() {
  const data = useContext(APIData);
  return (
    <section>
      <div style={{ margin: "40px 30px" }}>
        <ul>
          {data ? (
            data.map((value) => {
              return <CardStruct value={value} key={value.id} />;
            })
          ) : (
            <p>loading...</p>
          )}
        </ul>
      </div>
    </section>
  );
}

export default Card;
