import React from 'react';
import { texts } from "../../assets/ts/texts/texts"
import './App.css'
import '../../assets/scss/variables.scss'
import '../../assets/scss/classes.scss'
import '../../assets/scss/fonts.scss'

//import 
import { TextBanner } from '../TextBanner/TextBanner'
import { TopBanner } from '../TopBanner/TopBanner'

function App() {
    return (
      <div className="main">
          <TopBanner title={ texts.topBanner.title }></TopBanner>
           <TextBanner text={ texts.intro.text }></TextBanner>
       </div>
    )
}

export default App;
