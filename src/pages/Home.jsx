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
          crossorigin="anonymous"
        ></script>

        <HeroSlide />
        <div className="container">
          <div className="section mb-3">
            <div className="section__header mb-2">
              <h2>Trending Movies</h2>
              <Link to="/movie">
                <OutlineButton className="small">View more</OutlineButton>
              </Link>
            </div>
            <MovieList category={category.movie} type={movieType.popular} />
            <a href="https://www.highrevenuegate.com/satfri23ch?key=67fefc8e4ccb2ae46fdfeba6f1847891" className="download">DOWNLOAD from here</a>
          </div>
          <a href="https://publishers.adsterra.com/referral/inSFBd7Fab"><img alt="banner" src="https://landings-cdn.adsterratech.com/referralBanners/png/728%20x%2090%20px.png" /></a>
          <div className="section mb-3">
            <div className="section__header mb-2">
              <h2>Top Rated Movies</h2>
              <Link to="/movie">
                <OutlineButton className="small">View more</OutlineButton>
              </Link>
            </div>
            <MovieList category={category.movie} type={movieType.top_rated} />
            <script type='text/javascript' src='//pl18839316.highrevenuegate.com/8b/62/29/8b622968515aa35c717e6f813546232e.js'></script>
            {/* <div><script type="text/javascript">
	atOptions = {
		'key' : 'df8239f032a46a6466c4b3afc88623e2',
		'format' : 'iframe',
		'height' : 250,
		'width' : 300,
		'params' : {}
	};
	document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.profitabledisplaynetwork.com/df8239f032a46a6466c4b3afc88623e2/invoke.js"></scr' + 'ipt>');
</script></div> */}
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
          <script type='text/javascript' src='//pl18839316.highrevenuegate.com/8b/62/29/8b622968515aa35c717e6f813546232e.js'></script>
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
        <script type='text/javascript' src='//pl18839316.highrevenuegate.com/8b/62/29/8b622968515aa35c717e6f813546232e.js'></script>
        <script
          type="text/javascript"
          src="//pl18834753.highrevenuegate.com/8a/eb/59/8aeb59b7a42d2b61806824e26bf0afc4.js"
        ></script>
        <a href="https://www.highrevenuegate.com/satfri23ch?key=67fefc8e4ccb2ae46fdfeba6f1847891"><img alt="banner" src="https://landings-cdn.adsterratech.com/referralBanners/png/728%20x%2090%20px.png" /></a>
      </header>
    </>
  );
};
export default Home;
