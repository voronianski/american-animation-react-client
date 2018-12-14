import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import gql from 'graphql-tag';
import nprogress from 'nprogress';

import './_cartoon-details.scss';

export const CartoonDetailsQuery = gql`
  query CartoonDetailsQuery($videoId: ID!) {
    Video(id: $videoId) {
      id
      name
      directedBy
      releasedIn
      studio {
        id
        name
      }
      characters {
        id
        name
      }
      links
      imdbUrl
      omdb
    }
  }
`;

class Videos extends Component {
  constructor() {
    super();

    this.state = {
      ready: false
    };
  }

  render() {
    const { urls } = this.props;

    if (!urls.length) {
      return;
    }

    return (
      <div
        className="cartoon-details-videos"
        style={{
          opacity: this.state.ready ? 1 : 0
        }}
      >
        <ReactPlayer
          url={urls[0]}
          config={{
            dailymotion: {
              params: { 'ui-start-screen-info': false }
            }
          }}
          onReady={() => this.setState({ ready: true })}
          className="video-player"
          width="100%"
          height="100%"
          controls
          pip
        />
      </div>
    );
  }
}

const CartoonDetails = ({ data: { loading, error, Video } }) => {
  if (loading) {
    nprogress.start();
    return null;
  }

  nprogress.done();

  if (error) {
    return <div>Error!</div>;
  }

  console.log(Video);

  return (
    <div className="cartoon-details">
      <h2 className="cartoon-details-title h1 mt0 mb2">
        <span className="cartoon-details-name">{Video.name} </span>
        <span className="cartoon-details-year regular h3">
          ({Video.releasedIn})
        </span>
      </h2>

      <div className="cartoon-details-inner md-flex">
        <div className="flex-none mr3 mb2">
          {Video.omdb.Poster ? (
            <div className="cartoon-details-poster">
              <img src={Video.omdb.Poster} width="250" alt="cartoon poster" />
            </div>
          ) : null}

          <button
            className="cartoon-details-favorites-btn btn btn-primary block col-12 mt2 h5 caps regular"
            onClick={() => console.log('redux')}
          >
            + Add to Favorites
          </button>
        </div>

        <div className="flex-auto">
          <div className="cartoon-details-info h5">
            <div>
              <span className="caps h6">Studio: </span>
              <Link to={`/studios/${Video.studio.id}`}>
                {Video.studio.name}
              </Link>
            </div>

            <div>
              <span className="caps h6">Director: </span>
              <span>{Video.directedBy}</span>
            </div>

            {Video.omdb.Runtime ? (
              <div>
                <span className="caps h6">Runtime: </span>
                <span>{Video.omdb.Runtime}</span>
              </div>
            ) : null}

            {Video.omdb.Released ? (
              <div>
                <span className="caps h6">Released: </span>
                <span>{Video.omdb.Released}</span>
              </div>
            ) : null}

            {Video.characters.length ? (
              <div className="cartoon-details-characters">
                <span className="caps h6">Features: </span>
                {Video.characters.map(character => (
                  <Link
                    key={character.id}
                    className="cartoon-details-characters-link mr1"
                    to={`/characters/${character.id}`}
                  >
                    {character.name}
                  </Link>
                ))}
              </div>
            ) : null}

            {Video.omdb.Plot ? (
              <div className="cartoon-details-plot h4 mt2 gray">
                {Video.omdb.Plot}
              </div>
            ) : null}

            <div className="mt3">
              <Videos urls={Video.links} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default graphql(CartoonDetailsQuery, {
  options: props => ({
    variables: {
      videoId: props.id
    }
  })
})(CartoonDetails);
