import React from 'react'
import styled from 'styled-components'

import Videos from './home/Videos'
import Footer from './home/Footer'
import Articles from './home/Articles'
import Politics from './home/Politics'
import Business from './home/Business'
import Spotlight from './home/Spotlight'
import NewsLetter from './home/NewsLetter'
import LatestPosts from './home/LatestPosts'
import Recommendation from './home/Recommendation'


const Home = () => {
    return (
        <Wrapper>
            <Spotlight />           // Safwan
            <LatestPosts />         // Gordon
            <Videos />              // Gordon
            <Recommendation />      // Nabeela
            <Politics />            // Nabeela
            <Business />            // Vatan Mishra
            <Articles />            // Vatan Mishra
            <NewsLetter />          // Paul King
            <Footer />              // Paul King
        </Wrapper>
    )
}

export default Home

const Wrapper = styled.section`

`