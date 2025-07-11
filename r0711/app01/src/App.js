import logo from './logo.svg';
import a1 from './images/a1.jpg';
import './App.css';
import './css/Style.css';
import React,{useState} from 'react';
import Counter from './comp/Counter';
import MovieList from './comp/MovieList';

function App() {
  
  //반복문 for (x) -> map 
  const movies = [
    {no:1,title:'쥬라기공원 1',year:2001},
    {no:2,title:'아이언맨 2',year:2002},
    {no:3,title:'아이언맨 3',year:2003},
    {no:4,title:'아이언맨 4',year:2004},
    {no:5,title:'아이언맨 5',year:2005},
  ]

  //map 함수
  const movieList =movies.map((movie)=>{
    return (
      <MovieList movie={movie} key={movie.no} />
    )
  }) 

  return (
          <div className="App">
            {/* 상단메뉴 */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      {/* 상단메뉴 end*/}

      <h2 className='top_title'>영화리스트</h2>
    
      {movieList}


  
    </div>
  );
}

export default App;
