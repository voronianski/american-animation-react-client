import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import config from '../config';

import TitleBar from '../components/TitleBar';
import CartoonsBox from '../components/cartoons/CartoonsBox';

import './_dashboard.scss';

const Dashboard = ({ favoritedVideoIds }) => (
  <div className="dashboard-page container-inner-narrow mx-auto">
    <div className="dashboard-content">
      <TitleBar title="Discover" />

      <div className="dashboard-content-inner clearfix">
        {favoritedVideoIds.length ? (
          <div className="dashboard-content-box col col-6 sm-col-4 md-col-3 px2 mb3">
            <Link
              to="/cartoons/favorites"
              className="dashboard-content-box-inner block"
            >
              <CartoonsBox ids={favoritedVideoIds} />
              <h4 className="title h5">Your Favorites</h4>
              <div className="description gray h6" />
            </Link>
          </div>
        ) : null}

        <div className="dashboard-content-box col col-6 sm-col-4 md-col-3 px2 mb3">
          <Link
            to="/cartoons/50-greatest"
            className="dashboard-content-box-inner block"
          >
            <CartoonsBox ids={config.fiftyGreatest.ids} />
            <h4 className="title h5">{config.fiftyGreatest.title}</h4>
            <div className="description gray h6">
              {config.fiftyGreatest.description}
            </div>
          </Link>
        </div>

        <div className="dashboard-content-box col col-6 sm-col-4 md-col-3 px2 mb3">
          <Link
            to="/cartoons/tex-avery-red"
            className="dashboard-content-box-inner block"
          >
            <CartoonsBox ids={config.texAveryRed.ids} />
            <h4 className="title h5">{config.texAveryRed.title}</h4>
            <div className="description gray h6">
              {config.texAveryRed.description}
            </div>
          </Link>
        </div>
      </div>
    </div>

    <div className="dashboard-content">
      <TitleBar title="Everything in one place" />

      <div className="dashboard-content-inner clearfix">
        <div className="dashboard-content-box col col-6 sm-col-4 md-col-3 px2 mb3">
          <Link to="/cartoons">
            <h4>All Cartoons</h4>
          </Link>
        </div>

        <div className="dashboard-content-box col col-6 sm-col-4 md-col-3 px2 mb3">
          <Link to="/characters">
            <h4>All Characters</h4>
          </Link>
        </div>

        <div className="dashboard-content-box col col-6 sm-col-4 md-col-3 px2 mb3">
          <Link to="/studios">
            <h4>All Studios</h4>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  favoritedVideoIds: state.favoritedCartoons
});

export default connect(mapStateToProps)(Dashboard);
