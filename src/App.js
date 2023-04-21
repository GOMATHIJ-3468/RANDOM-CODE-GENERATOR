import './App.css';
import Footer from './footer';
import Header from './header';
import React,{useState,useEffect} from 'react';

const App=()=>{
const[Quote,setQuote]=useState("");
const Getquote=()=>{
	fetch("https://type.fit/api/quotes")
	.then((res)=>res.json())
	.then((data)=>{
		let randomnum = Math.floor(Math.random() * data.length);
		setQuote(data[randomnum]);
	});
}
useEffect(()=>{
	Getquote();
},[]);
return(
    <div className='textbox'>
    <Header/>
      <div className="App">
      <div id="bkcolor">

                  <h1><div id="quote1">''{Quote.text}</div></h1><br></br>
                  <div id="quote2"><marquee>-{Quote.author}</marquee></div>
                  <div id="link">
                  <a id="link1" href="https://twitter.com/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB47l40xXW0xjc8OKV1j96linzMR8o8sNwFgs0jK2pnw&usqp=CAU&ec=48665701" alt="" width="40px" height="40px"></img></a>
                  <a id="link2" href="https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DEleanor%2BRoosevelt%26content%3DRemember%2Bno%2Bone%2Bcan%2Bmake%2Byou%2Bfeel%2Binferior%2Bwithout%2Byour%2Bconsent.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button"><img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiFPpZJ_YPBCZ-DGuPpHTnqS8CjH3w6fHHd10p_1HNeA&usqp=CAU&ec=48665701" alt="" width="40px" height="40px"></img></a>
                  </div>
                  <button id="button" onClick={Getquote}>New Quote</button>
          </div>
      </div>
      <Footer/>
      </div>
	);
}
export default App;
