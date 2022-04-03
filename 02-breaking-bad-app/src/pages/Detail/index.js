import axios from "axios";
import React, { useState, useEffect } from "react";
import Loading from "../../components/Loading";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [char, setChar] = useState(null);
  const [loading, setLoading] = useState(true);

  const { char_id } = useParams();

  useEffect(() => {
    const fetchChar = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${char_id}`
      );
      setChar(data[0]);
      setLoading(false);
    };
    fetchChar();
  }, [char_id]);
  return (
    <div>
      {loading && <Loading />}
      {char && (
        <div>
          <h1>{char.name}</h1>
          <img src={char.img} alt={char.name} style={{ width: "50%" }} />
        </div>
      )}
      <pre>{char && JSON.stringify(char, null, 2)}</pre>
    </div>
  );
};

export default Detail;
