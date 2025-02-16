import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HomeContainer, HomeTitle, PostButton, AdListContainer } from "../styles/homeStyles";
import { Pagination } from "@mui/material";
import AdCardComponent from "../components/AdCardComponent";
import FilterControls from "../components/FilterControls";

function Home() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetch("/items")
      .then((res) => res.json())
      .then((data) => setItems(data.reverse())); 
  }, []);
  

  const filteredItems = items
    .filter((item) => (filter ? item.type === filter : true))
    .filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const displayedItems = filteredItems.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <HomeContainer>
      <HomeTitle variant="h4">Объявления</HomeTitle>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
        <PostButton variant="contained" color="success" component={Link} to="/form">
          Разместить объявление
        </PostButton>
      </div>

      <FilterControls filter={filter} setFilter={setFilter} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <AdListContainer>
      {displayedItems.map((item) => (
        <AdCardComponent key={item.id} item={item} />
      ))}
    </AdListContainer>

      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={page}
          onChange={(_, value) => setPage(value)}
          sx={{ mt: 2, display: "flex", justifyContent: "center" }}
        />
      )}
    </HomeContainer>
  );
}

export default Home;
