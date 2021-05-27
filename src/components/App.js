import React from "react";
import SearchBar from "./SearchBar"
import VideoList from "./VideoList"
import VideoDetail from "./VideoDetail"
import yotube from "../api/youtube"

class App extends React.Component{
  state = {videos : [], selectedVideo : null};

  componentDidMount(){
    this.onTerSubmit('Learn React')
  }
  
  onTerSubmit = async term =>{
    const response = await yotube.get('/search', {
      params:{
        q:  term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
  }
  render(){
    return (
      <div className="ui container"> 
        <SearchBar onFormSubmit={this.onTerSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
            </div>
          </div>
        </div>
      </div> 
    );
  }
}

export default App;
