import React from 'react';
import Tweet from './Tweet'
const TwitterFeed = props => {
  let tweeter = props.data.map(tweet =>{
    return(
      <Tweet key = {tweet.id_str} text= {tweet.text} user = {tweet.user}/>
    )
  })
  return(
    <div>
      {tweeter}
    </div>
  )
}

export default TwitterFeed;
