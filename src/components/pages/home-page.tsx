import React, {BaseSyntheticEvent, useEffect, useState} from "react";
import {
  Genre,
  MovieAPIResponse,
  MovieItem as MovieInfoProps,
  MovieItemType,
} from "../../api/movie.types";
import {movieAPI} from "../../api/get-movie.service";
import {GenresList} from "../genres-list/genres-list";
import {MovieItem} from "../movie/movie-item/movie-item";
import {Header} from "../header/header";
import {MovieDecription} from "../description/movie-decription";
import {Pagination} from "../pagination-test/pagination";
import {CustomInput} from "../input/search-by-name";
import "./style.sass";
import {DropdownSelect} from "../dropdown-select/dropdown-select";
import {Link} from "react-router-dom";
import {RootState} from "../../store/store";
import {useSelector} from "react-redux";

const initialGenres = [{name: "", slug: ""}];

const initialSearch = {query: "", field: ""};

const initialAllMovies = {docs: [], limit: 0, page: 0, pages: 0, total: 0};

export const HomePage = () => {
  const [allMovies, setAllMovies] = useState<MovieAPIResponse>(
    initialAllMovies as MovieAPIResponse
  );
  const [allGenres, setAllGenres] = useState<Genre[]>(initialGenres);
  const [modalParams, setModalParams] = useState<{
    movieInfo: MovieInfoProps;
    isOpened: boolean;
  }>({isOpened: false, movieInfo: {} as MovieInfoProps});
  const [currentPage, setCurrentPage] = useState(1);

  const [search, setSearch] = useState(initialSearch);

  const getInitialData = async () => {
    const movies = await movieAPI.getAllMovies();
    const genres = await movieAPI.getGenresList();

    setAllGenres(genres);
    setAllMovies(movies);
  };

  useEffect(() => {
    getInitialData();
  }, []);

  useEffect(() => {
    searchByQuery();
  }, [search, currentPage]);

  const closeModal = () => {
    setModalParams({isOpened: false, movieInfo: {} as MovieInfoProps});
  };

  const openModal = (index: number) => {
    setModalParams({isOpened: true, movieInfo: allMovies.docs[index]});
  };

  const searchByQuery = async () => {
    const name = await movieAPI.getMovieByQuery(
      search.query,
      search.field,
      currentPage
    );

    setAllMovies(name);
  };

  const handleYearChange = (value: string) => {
    setSearch((prev) => ({...prev, query: "year", field: value}));
    setCurrentPage(1);
  };
  const handleMovieNameChange = (value: string) => {
    setSearch((prev) => ({...prev, query: "name", field: value}));
    setCurrentPage(1);
  };

  const handleGenreNameChange = (value: string) => {
    setSearch((prev) => ({
      ...prev,
      query: "genres.name",
      field: value,
    }));
    setCurrentPage(1);
  };

  const favoriteMovies: MovieItemType = useSelector(
    (state: RootState) => state.favoriteMovies
  );

  return (
    <div className="homePage">
      <div className="navBar">
        <Header onClick={getInitialData} />
        <Link className="favoriteMovieBtn" to="/favorite_movie">
          любимое {favoriteMovies.length}
        </Link>
        <CustomInput handleSeachMovie={handleMovieNameChange} />
        <DropdownSelect handleSeachByYear={handleYearChange} />
      </div>
      <div className="wrapper">
        <MovieDecription
          isOpened={modalParams.isOpened}
          onCloseModal={closeModal}
          movieItemInfo={modalParams.movieInfo}
        />
        <div className="genres">
          <GenresList
            allGenres={allGenres}
            onGenreClick={handleGenreNameChange}
          />
        </div>
        <div className="moveList">
          {allMovies?.docs?.map((item, index: number) => (
            <div key={index}>
              <MovieItem
                movieItem={item}
                onClick={() => openModal(index)}
                isFavoriteFilms={false}
              />
            </div>
          ))}

          <div className="paginationWrapper">
            <Pagination
              limit={12}
              totalCount={allMovies?.total ? allMovies?.total : 0}
              onChange={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
