import React from 'react'
import './css/HomeScreen.css'
import Nav from './Nav'
import Banner from './Banner'
import Row from './Row'
import userrequests from './Request'

function HomeScreen() {
  return (
    <div className='HomeScreen'>
      <Nav/>
     <Banner/>
     
     <Row title="Documentaries" isLargeRow fetchURL={userrequests.fetchDocumentaries}/>
     <Row title="Trending Now" fetchURL={userrequests.fetchTrending}/>
     <Row title="Top Rated" fetchURL={userrequests.fetchTopRated}/>
     <Row title="Horror Movies" fetchURL={userrequests.fetchHorrorMovies}/>
     <Row title="Action Movie" fetchURL={userrequests.fetchActionMovies}/>
     
     <Row title="Romantic Movies" fetchURL={userrequests.fetchRomanceMovies}/>
     
         
      
    </div>
  )
}

export default HomeScreen