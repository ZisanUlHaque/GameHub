import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import Card from "./Card";
import { ChevronDown } from "lucide-react";

const PopularGames = () => {
  const data = useLoaderData();
  const [sort, setSort] = useState("");
  const handleSort = (sortType) => {
    setSort(sortType);
  };

  // Sort by ratings
  const sortedGames = [...data]
    .sort((a, b) => {
      const diff = parseFloat(a.ratings) - parseFloat(b.ratings);
      if (sort === "asc") return diff;
      return -diff;
    })
    .slice(0, 3);

  return (
    <div>
      <div className="text-white flex justify-between px-10 items-center bg-black">
        <h2 className="text-3xl font-bold">Popular Games</h2>
        <details className="dropdown">
          <summary className="btn m-1 flex items-center">
            Sort By Ratings
            <ChevronDown />{" "}
            {sort ? (sort === "asc" ? "Ascending" : "Descending") : ""}
          </summary>
          <ul className="menu dropdown-content bg-base-100 text-black rounded-box z-1 w-40 p-2 shadow-sm">
            <li>
              <a onClick={() => handleSort("asc")}>Ascending</a>
            </li>
            <li>
              <a onClick={() => handleSort("desc")}>Descending</a>
            </li>
          </ul>
        </details>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto w-11/12 lg:w-10/12 gap-10 mt-10">
        {sortedGames.map((game) => (
          <Card key={game.id} data={game} />
        ))}
      </div>
      <div className="flex justify-center mt-10 pb-10">
        <Link to="/discover">
          {" "}
          <button className="btn btn-outline btn-error">Discover More</button>
        </Link>
      </div>
    </div>
  );
};

export default PopularGames;
