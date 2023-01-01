import React from 'react'
import Post from '../post/Post'
import Shared from '../share/Share'
import "./feed.css"

export default function Feed() {
  return (
    <div className="feed">
        <div className="feedWrapper">
          <Shared/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>
    </div>
  )
}
