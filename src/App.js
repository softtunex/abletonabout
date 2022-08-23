import { useState } from 'react';
import './App.css';
import ContentFile from './Component/ContentFile/ContentFile';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import SecondNav from './Component/SecondNav/SecondNav';
import SectionFive from './Component/SectionFive/SectionFive';
import SectionFour from './Component/SectionFour/SectionFour';
import SectionOne from './Component/SectionOne/SectionOne';
import SectionSix from './Component/SectionSix/SectionSix';
import SectionThree from './Component/SectionThree/SectionThree';
import SectionTwo from './Component/SectionTwo/SectionTwo';
function App() {
  const [more, setMore] = useState(false)

  let navArr =["Live", "Push", "Link", "Shop", "Packs", "Help", <span className="more" onClick={()=>setMore(!more)}>More {more?"-":"+"}</span>]

  const navBar = navArr.map((nav,i)=> {
    return <li key={i} className='navBarList'>{nav}</li>
  })
  return (
    <div className="App">
      <div className='App-glass'>
        <Header navBar = {navBar} more={more}/>
      </div>
      <hr />
      <SecondNav/>
      <ContentFile 
        header="We make Live, Push and Link — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things." 
        content="Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world."/>
      <SectionOne/>
      
      <ContentFile 
        header="Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding." 
        content="We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for."/>
      <SectionTwo/>
      <ContentFile 
        header="We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo." 
        content="Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture."
        />
      <SectionThree/>
      <br/>
      <ContentFile 
        header="We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great." 
        content="Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We’ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don’t always agree with each other, but opinion and debate are valued and openly encouraged."
        />
      <SectionFour/>
      <ContentFile 
        header="We’re passionate about what we do, but we’re equally passionate about improving who we are." 
        content="We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other. Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices."
        />
      <SectionFive/>
      <SectionSix/>
      <hr/>
      <Footer/>
      
    </div>
  );
}

export default App;
