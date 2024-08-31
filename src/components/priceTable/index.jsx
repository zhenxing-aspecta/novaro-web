import { LineTable } from "./LineTable";
import { KTable } from "./KTable";
import { useState } from "react";

export const PriceTable = () => {
  const selectList = ["1D", "7D", "1M", "1Y", "ALL"];
  const [select, setSelect] = useState(["1D", 0]);
  const [type, setType] = useState("line");
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            backgroundColor: "#D3D3D3",
            width: "250px",
            height: "30px",
            borderRadius: "8px",
            padding: "0 5px",
          }}
        >
          {selectList.map((item, index) => {
            const isSelected = select[1] === index;
            console.log(select[1], index);
            return (
              <div
                key={index}
                style={{
                  width: "35px",
                  height: "24px",
                  borderColor: isSelected ? "white" : "#D3D3D3",
                  borderRadius: "8px",
                  backgroundColor: isSelected ? "white" : "#D3D3D3",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  color: "#616E85",
                }}
                onClick={() => setSelect([item, index])}
              >
                {item}
              </div>
            );
          })}
        </div>
        <div
          style={{
            marginLeft: "30px",
            width: "35px",
            height: "24px",
            backgroundColor: "#D3D3D3",
            color: "#616E85",
            borderRadius: "8px",
            textAlign: "center",
          }}
          onClick={() => setType(type === "line" ? "k" : "line")}
        >
          {type}
        </div>
      </div>

      <div>
        {type === "line" ? (
          <LineTable select={select} />
        ) : (
          <KTable select={select} />
        )}
      </div>
    </div>
  );
};
