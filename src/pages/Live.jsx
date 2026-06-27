import React from "react";
import { Link } from "react-router-dom";
import { FaPlayCircle, FaFutbol } from "react-icons/fa";
import { OutlineButton } from "../components/button/Button";
import "./live.scss";

const Live = () => {
  return (
    <div className="live-page">
      <div className="container">
        <section className="live-page__hero">
          <div className="live-page__hero__content">
            <p className="live-page__eyebrow">Live now</p>
            <h1>Watch the biggest matches in real time.</h1>
            <p>
              Catch live football action with a distraction-free viewing experience,
              designed for fast access and smooth playback.
            </p>
            <div className="live-page__actions">
              <Link to="/movie">
                <OutlineButton className="small">Back to movies</OutlineButton>
              </Link>
              <span className="live-page__pill">
                <FaPlayCircle /> Live stream
              </span>
            </div>
          </div>
          <div className="live-page__hero__card">
            <FaFutbol />
            <h2>Match center</h2>
            <p>Stream highlights, live fixtures, and score updates from the most popular football action.</p>
          </div>
        </section>

        <section className="live-page__player-card">
          <div className="live-page__player-card__header">
            <h2>Live match viewer</h2>
            <span>Updated in real time</span>
          </div>
          <div className="live-page__player-frame">
            <iframe
              title="Live match stream"
              src="https://www.scorebat.com/embed/"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Live;
