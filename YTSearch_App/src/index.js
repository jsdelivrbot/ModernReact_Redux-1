import _ from 'lodash'; //underscore is usually used with lodash.. for some reason
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';


import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDokj9phRZN6HHNp2poo_QJvrI7vqX80Gc';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos : [],
      selectedVideo : null
    };
    this.videoSearch('dog fails')
  }

  videoSearch(term){
    YTSearch({
      key: API_KEY,
      term: term,
    }, (videos) => {
      //es6 syntax* if key and prop or same name, videos: videos can be shortened just to videos
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  } 
  render() {
    //lodash returns a new function that can only be called once every 300ms, this will limit searchBar to not be running with every single keystroke.. looks a lot more natural
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
    <div>
      <SearchBar onSearchTermChange={videoSearch}/>
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList 
      onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
      videos={this.state.videos} />
    </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
