import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import ReactPlayer from 'react-player';

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
            vimeo: {
              playerOptions: {
                // color: 'D26AC2'
              }
            },
            dailymotion: {
              params: {
                // 'ui-highlight': 'D26AC2',
                'ui-start-screen-info': false
              }
            }
          }}
          onReady={() => this.setState({ ready: true })}
          controls
          pip
        />
      </div>
    );
  }
}

const CartoonDetails = ({ data: { loading, error, Video } }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  console.log(Video);

  return (
    <div className="cartoon-details">
      <h2>{Video.name}</h2>

      <div>Released in: {Video.releasedIn}</div>
      <div>Directed by: {Video.directedBy}</div>
      <div>Studio: {Video.studio.name}</div>

      {Video.omdb.Poster ? (
        <div className="cartoon-details-poster">
          <img src={Video.omdb.Poster} width="200" alt="cartoon poster" />
        </div>
      ) : null}

      {Video.omdb.Plot ? (
        <div className="cartoon-details-plot">{Video.omdb.Plot}</div>
      ) : null}

      <Videos urls={Video.links} />
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
