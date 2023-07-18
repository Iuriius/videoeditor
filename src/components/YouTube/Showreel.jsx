import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import YouTube from "react-youtube";
import { css } from "@emotion/react";

export const Showreel = ({ videoId }) => {
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=AIzaSyCPHHBWSzdiVecHHHsOB5CRldPdh5gaB1A`
        );
        setVideoData(response.data.items[0]);
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };

    fetchData();
  }, [videoId]);

  if (!videoData) {
    return <div>Loading...</div>;
  }

  const { snippet } = videoData;
  const videoTitle = snippet.title;
  const videoThumbnail = snippet.thumbnails.default.url;

  const showreelContainerStyles = css`
    /* Add styles for the container */
  `;

  const youtubeVideoContainerStyles = css`
    width: 100%; /* Set the initial width of the video to 100% */

    @media screen and (min-width: 768px) {
      width: 768px;
    }

    @media screen and (min-width: 1200px) {
      width: 800px;
    }
  `;

  return (
    <div css={showreelContainerStyles}>
      <h2>{videoTitle}</h2>
      <div css={youtubeVideoContainerStyles}>
        <YouTube videoId={videoId} opts={{ width: "100%" }} />
      </div>
      <img src={videoThumbnail} alt={videoTitle} style={{ display: "none" }} />
    </div>
  );
};

Showreel.propTypes = {
  videoId: PropTypes.string.isRequired,
};
