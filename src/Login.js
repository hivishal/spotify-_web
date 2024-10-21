import React from 'react'
const client_id = process.env.client_id
// const Auth_URL = 'https://accounts.spotify.com/authorize?client_id=&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'
const Auth_URL='https://accounts.spotify.com/authorize?response_type=code&redirect_uri=http://localhost:3000&client_id=e84cd162f0ee4683b36de1b6ea4ddb4f&scope=ugc-image-upload%20user-read-playback-state%20user-modify-playback-state%20user-read-currently-playing%20app-remote-control%20streaming%20playlist-read-private%20playlist-read-collaborative%20playlist-modify-private%20playlist-modify-public%20user-follow-modify%20user-follow-read%20user-read-playback-position%20user-top-read%20user-read-recently-played%20user-library-modify%20user-library-read%20user-read-email%20user-read-private'

export default function Login(){
    return(
        <div className='button'>
            <button className='Button'><a className='font' href={Auth_URL}>Login</a> </button>
        </div>
    )
}