import React, { useEffect } from 'react';
import { useDispatch} from "react-redux";
import { Route, Switch, NavLink } from 'react-router-dom';
import Navigation from './components/Navigation';
// import * as sessionActions from "./store/session";
import logo from './SiteImages/Logo.jpg'
import soil from './SiteImages/soil.jpg'
import work from './SiteImages/work.jpg'
import worktwo from './SiteImages/work2.jpg'
import workthree from './SiteImages/work3.jpg'
import workfour from './SiteImages/work4.jpg'
import workfive from './SiteImages/work5.jpg'
import worksix from './SiteImages/work6.jpg'
import workseven from './SiteImages/work7.jpg'
import wholesome from './SiteImages/wholesome.jpg'
// import wholesometwo from './SiteImages/wholesome2.jpg'
import mike from './SiteImages/mike.jpg'
import mikenrhys from './SiteImages/mikenrhys.jpg'
import rhys from './SiteImages/rhys.jpg'

import './App.css'

function App() {
  const dispatch = useDispatch();
  // const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
  }, dispatch);

  // const user = useSelector(state => {
  //   return state.session.user;
  // })

  // const songs = useSelector(state => {
  //   return state.songs.songlist;
  // });
  // const albums = useSelector(state => {
  //   return state.albums.albumlist;
  // });

  // if (!songs) return null



  return (
    <>
    {/* <div className='allabout'> */}
    <NavLink to='/'>
      <img className='logo' src={logo} alt='' />
    </NavLink>
    <Navigation />

      <Switch>
        <Route path exact='/'>
      <div className='header'>
        <h2>
          All About Landscape - Your Best Choice for Your Landscaping Needs
        </h2>
      </div>
      <div className='homdiv'>
        <p className='homstate'>
          Founded by two homegrown Billings MT Boys, All About is dedicated to the community here in Billings.
           The Owners are Rhys and Mike, who built their first house during the housing market crash in 2008
           and have honed their skills since that day to make this company what it is today. Our employees are
           dedicated to hard work, and we hold the quality of our hard work to a very high standard.
        </p>
        <img className='work' src={work} />
      </div>
      <div className='homdiv'>
        <img className='worktwo' src={worktwo} />
        <p className='homstatetwo'>
          From putting in a sprinkler system or sodding a lawn to building beautiful rock wall or water feature
           for you you home, All About Landscape has the specialists for you. We've already helped thousands of people
           in your neighborhood, read their reviews {<NavLink to={'/reviews'}>here</NavLink>}. Contact us today to get a free quote
           on your next project and we'll be sure to leave you impressed!
        </p>

      </div>
        </Route>
        <Route path='/services'>
          <div className='header'>
            <h2>All About Landscape Services</h2>

          </div>
          <ul className='uservices'>
            <li className='lservices'>
              <img className='iservices' src={workthree} />
              <p className='pservices'>Landscaping</p>
            </li>
            <li className='lservices'>
              <img className='iservices' src={workfour} />
              <p className='pservices'>Rock Walls</p>
            </li>
            <li className='lservices'>
              <img className='iservices' src={workfive} />
              <p className='pservices'>Sprinklers</p>
            </li>
            <li className='lservices'>
              <img className='iservices' src={worksix} />
              <p className='pservices'>Concrete</p>
            </li>
            <li className='lservices'>
              <img className='iservices' src={workseven} />
              <p className='pservices'>Mowing</p>
            </li>
          </ul>
        </Route>
        <Route path='/about'>
          <div className='header'>
            <h2>Meet the Legends Behind the Buisness</h2>
          </div>
          <div className='homdiv'>
            <p className='homstate'>
              Mike and Rhys were born and raised in Billings, Montana
              and have been large supporters of this community and of
              its local buisness'. All About Landscape was founded back in 2008
              when 2 adventurous young men decided to throw caution to the
              wind and test skills they built through years of hard work and
              practice and build a house during the housing market crash.
              After proving they could overcome the struggles of a recession,
              they decided to expand their horizons and build a buisness off
              of the fruits of their labor.
            </p>
            <img className='work' src={mikenrhys} />
          </div>
          <div className='homdiv'>
            <img className='work' src={mike} />
            <p className='homstate'>
              Mike is a traveler and enjoys seeing the world. But out of all
              the destinations he has been, he says that Montana's beauty is
              always a more welcome site when he comes home. "It's not a big town
              we live in, but I think that's what I love about it. Whenever I come home
              from a distant land and the first thing I see from the Rims is this beautiful
              town of ours, I feel privledged that I can, in some small way, add to its beauty"
            </p>

          </div>
          <div className='homdiv'>
            <p className='homstate'>
              Rhys is an outdoor dog and has been from a very young age.
              He loves the mountains of Montana and hiking and hunting through
              them. "I think maybe that is why I enjoy landscaping so much. I enjoy
              spending time in the naturally carved out landscape of my home. Whether I
              am in God's landscape or creating my own, I just enjoy being around it.
              Since I was young I've been molded by Montana's landscape, now my job is
              to mold the landscape of Montana. I owe it to myself and the way I was raised
              to do that well."
            </p>
            <img className='work' src={rhys} />
          </div>
          <div className='homdiv'>
            <img className='work' src={wholesome} />
          </div>
          <p className='wholesome'>
          Above all else, Mike and Rhys put Family first and are dedicated to working hard for their
          family. They are dedicated partners to their spouses, and good parents to their children.
          The values that we are built is family, community and hard work/</p>
        </Route>
      </Switch>

      <div className='footer'>
        <img className='soil' src={soil} alt='' />
      </div>
    </>
  );
}

export default App;
