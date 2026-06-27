import React from "react";
import { Link } from "react-router-dom";

import { OutlineButton } from "../components/button/Button";
import HeroSlide from "../components/hero-slide/HeroSlide";
import MovieList from "../components/movie-list/MovieList";

import { category, movieType, tvType } from "../api/tmdbApi";

const Home = () => {
  return (
    <>
      <header>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2220397932843171"
          crossOrigin="anonymous"
        ></script>

        <HeroSlide />
        <div className="container">
          <div className="home-spotlight">
            <div className="home-spotlight__card">
              <p className="home-spotlight__eyebrow">Curated for your next binge</p>
              <h3>Discover blockbusters, classics, and hidden gems in one elegant catalog.</h3>
              <p>Browse a refined collection of movies and TV series with a faster, cleaner experience.</p>
              <div className="home-spotlight__actions">
                <Link to="/movie">
                  <OutlineButton className="small">Explore Movies</OutlineButton>
                </Link>
                <Link to="/tv">
                  <OutlineButton className="small btn-outline">Explore TV</OutlineButton>
                </Link>
              </div>
            </div>
            <div className="home-spotlight__stats">
              <div className="home-spotlight__stat">
                <strong>4K+</strong>
                <span>Curated picks</span>
              </div>
              <div className="home-spotlight__stat">
                <strong>24/7</strong>
                <span>Fresh updates</span>
              </div>
              <div className="home-spotlight__stat">
                <strong>Fast</strong>
                <span>Discover mode</span>
              </div>
              <div className="home-spotlight__stat">
                <strong>Clean</strong>
                <span>Modern UI</span>
              </div>
            </div>
          </div>

          <div className="section mb-3">
            <div className="section__header mb-2">
              <h2>Trending Movies</h2>
              <Link to="/movie">
                <OutlineButton className="small">View more</OutlineButton>
              </Link>
            </div>
            <MovieList category={category.movie} type={movieType.popular} />
            <a href="https://www.highrevenuegate.com/satfri23ch?key=67fefc8e4ccb2ae46fdfeba6f1847891" className="promo-banner">
              <img alt="banner" src="https://landings-cdn.adsterratech.com/referralBanners/png/728%20x%2090%20px.png" />
            </a>
          </div>
          <div className="section mb-3">
            <div className="section__header mb-2">
              <h2>Top Rated Movies</h2>
              <Link to="/movie">
                <OutlineButton className="small">View more</OutlineButton>
              </Link>
            </div>
            <MovieList category={category.movie} type={movieType.top_rated} />
          </div>

          <div className="section mb-3">
            <div className="section__header mb-2">
              <h2>Trending TV</h2>
              <Link to="/tv">
                <OutlineButton className="small">View more</OutlineButton>
              </Link>
            </div>
            <MovieList category={category.tv} type={tvType.popular} />
          </div>
          <div className="section mb-3">
            <div className="section__header mb-2">
              <h2>Top Rated TV</h2>
              <Link to="/tv">
                <OutlineButton className="small">View more</OutlineButton>
              </Link>
            </div>
            <MovieList category={category.tv} type={tvType.top_rated} />
          </div>
        </div>
      </header>
    </>
  );
};
export default Home;
