import "./Video.scss";
import prePlayIcon from "./Assets/Icons/play.svg";
import ReactPlayer from "react-player";
export const Video = () => {
  return (
    <div className="Video">
      <ReactPlayer
        width={"757px"}
        height={"564px"}
        url="https://player.vimeo.com/external/372311827.sd.mp4?s=7b58adfb4a8609401a1466e3b33946f8b49ae705&profile_id=164&oauth2_token_id=57447761"
        controls={true}
        volume={1}
      />
    </div>
  );
};
