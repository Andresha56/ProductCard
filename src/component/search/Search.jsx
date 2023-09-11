import { useContext, useState } from "react";
import { APIData } from "../context/APIContext";
import CardStruct from "../card/CardStruct";
import Card from "../card/Card";

// ---------style-----
const headerStyle = {
  backgroundColor: "#0066b2",
  padding: "15px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const inputStyle = {
  border: 0,
  outline: 0,
  padding: "10px",
  width: "100%",
  borderRadius: "5px",
};

function Search() {
  const data = useContext(APIData);
  const [inputValue, setInputValue] = useState("");
  const [hasUserTyped, setHasUserTyped] = useState(false);
  const handelInputChange = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);

    inputValue.length !== 0 ? setHasUserTyped(true) : setHasUserTyped(false);
  };
  // --------------filter--data--items----------
  const filteredData = data.filter((data) => {
    const { tagline, description } = data;
    const filterTagLine = tagline.replace(/\s+/g, "").toLowerCase();
    const filterDescription = description.replace(/\s+/g, "").toLowerCase();

    const itemTitleWithoutWhiteSpaces = inputValue
      .replace(/\s+/g, "")
      .toLowerCase();
    const includes =
      filterTagLine.includes(itemTitleWithoutWhiteSpaces) ||
      filterDescription.includes(itemTitleWithoutWhiteSpaces);

    return includes;
  });

  return (
    <>
      <header style={headerStyle}>
        <div className="inputCon">
          <input
            style={inputStyle}
            type="search"
            placeholder="search"
            value={inputValue}
            onChange={handelInputChange}
          />
        </div>
      </header>
      {hasUserTyped ? (
        <div style={{ margin: "40px 30px" }}>
          {
            filteredData.length > 0 ?  (<ul>
               {filteredData.map((value) => {
              return <CardStruct value={value} key={value?.id} />;
            })}
            </ul>) : (<h1>opps! not  found....</h1>)
          }
        </div>
      ) : (
        <Card />
      )}
    </>
  );
}

export default Search;
