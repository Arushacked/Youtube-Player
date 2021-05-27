import React from "react";
import VideoItem from "./VideoItem";

class VideoList extends React.Component{
    // const {videos, onVideoSelect} = this.props; 
    getVideoItem = () =>{
        const renderedItems = this.props.videos.map((video) => {
            return <VideoItem key={video.id.videoId} onVideoSelect={this.props.onVideoSelect} video={video} />;
        });
        return renderedItems;
    }
    

    render(){
        return (
            <div className="ui relaxed divided list">
                {this.getVideoItem()}
            </div>
        );
    }
}

export default VideoList;