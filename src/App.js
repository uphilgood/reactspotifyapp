import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultStyle = {
  color: '#808080',
}

let fakeServerData = {
  user: {
    name: "Philip",
    playlists: [
      {
        name: "My Favorites",
        songs: [{name: "Beat It",
                duration: 1234},
                {name: "Bye Bye Bye",
                duration: 2345},
                {name: "End of the Road",
                duration: 3456}]
      },
      {
        name: "Discover Weekly",
        songs: [{name: "Beat It2",
                duration: 1234},
                {name: "Bye Bye Bye2",
                duration: 2345},
                {name: "End of the Road2",
                duration: 3456}]
      }, 
      {
        name: "Discover Weekly 2",
        songs: [{name: "Beat It3",
                duration: 1234},
                {name: "Bye Bye Bye3",
                duration: 2345},
                {name: "End of the Road3",
                duration: 3456}]
      },
      {
        name: "Discover Weekly3",
        songs: [{name: "Beat It4",
                duration: 1234},
                {name: "Bye Bye Bye4",
                duration: 2345},
                {name: "End of the Road4",
                duration: 3456}]
      }
    ]
  }
}

class PlayListCounter extends Component {
  render()  {
    return (
      <div style={{...defaultStyle, width: "40%", display: "inline-block"}}>
        <h2>{this.props.playlists.length} Playlists</h2>
        </div>
    );
  }
}

class HoursCounter extends Component {
  render()  {
    let allSongs = this.props.playlists.reduce((songs, eachPlayList) => {
      return songs.concat(eachPlayList.songs)
    }, [])
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0)
    return (
      <div style={{...defaultStyle, width: "40%", display: "inline-block"}}>
        <h2>{Math.round(totalDuration/60)} Hours</h2>
        </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
        <img/>
        <input type="text" onKeyUp={event => 
          this.props.onTextChange(event.target.value)}/>
        
        </div>
    )
  }
}

class Playlist extends Component {
  render() {

    return (
      <div style={{...defaultStyle, display: "inline-block", width: '25%'}}>
        <img />
        <h3>{this.props.playlist.name}</h3>
        <ul>
          {
            this.props.playlist.songs.map((song) => {
              return <li>{song.name}</li>
            })
          }
          </ul>
        </div>
    );
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {serverData: {},
    filterString: ''
  }
  }
  componentDidMount() {
    setTimeout( () => {
    this.setState({serverData: fakeServerData})
  }, 1000)
  setTimeout( () => {
    this.setState({filterString: 'weekly'})
  }, 2000)
}

  render() {
    let playlistsToRender = this.state.serverData.user ? this.state.serverData.user.playlists
    .filter(playlist => 
      playlist.name.
      toLowerCase()
      .includes(this.state.filterString.toLowerCase())) : []

    return (
      <div className="App">
{/* for code below, if serverdata exists then show the site */}
      {this.state.serverData.user ?
      <div>
      <h1 style={defaultStyle}>
      {this.state.serverData.user.name}'s Playlist!
      </h1>
      <PlayListCounter playlists={playlistsToRender}/>
      <HoursCounter playlists={playlistsToRender}/>
      <Filter onTextChange={text => this.setState({filterString: text})}/>
      {this.state.serverData.user.playlists.filter(playlist => 
      playlist.name
      .toLowerCase()
      .includes(this.state.filterString.toLowerCase()))
      .map((playlist) => {
        return <Playlist playlist={playlist}/>
      })
      }
      
      </div> : <h1>loading...</h1>
    }
      </div>
    );
  }
}

export default App;
