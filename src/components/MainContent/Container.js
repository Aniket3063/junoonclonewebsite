import React from 'react'
import './Container.css'

const Container = () => {
  return (
    <div className='wrap-container'>
      <div className='about-container'>
        <h2>About Junoon</h2>
        <div className='about'>
          <div className='about-logo'><img src="https://junoonnsut.com/style/images/junoon-logo-only.png" alt='photo' /></div>
          <div id='about'>
            <p>Founded in 2010, Junoon is a platform for photography and videography enthusiasts of NSUT where they can showcase and nurture their talents . Our members excel not just in different genres of photography but also in film making, photo editing and storytelling through pictures. We bring out our flair for photography through three of our main projects: Project Perspective, Storygram and Humans Of NSUT. Two more new projects, Poll it Out and Project Reels, have been incorporated adding to the rich history of the society. Junoon also organizes the Ethnic Day every year wherein the students and the faculty come together to celebrate and display our fusion of cultures, traditions and harmony. Our society provides the platform to the photography enthusiasts as they exhibit talent through their pictures that we feature on our social media handles. We conduct photowalks around Delhi, hence providing a captivating experience for everyone who wants to learn and grow in this field. Additionally, our team holds technical workshops for enhanced learning and organizes time to time photography competitions. Junoon also indulges in collborations with other societies to exhibit the best of happenings in NSUT.</p>
          </div>
        </div>
        {/* <div className='space40'></div> */}
        <div className='wrapper'>
          <section className='flex-all-center' id='count-number'>
            <div className='column'>
              <p>
                <span id='count'>57</span>
                <span>Competitions</span>
              </p>
            </div>
            <div className='column'>
              <p>
                <span id='count'>124</span>
                <span>Photowalks</span>
              </p>
            </div>
            <div className='column'>
              <p>
                <span id='count'>45</span>
                <span>Work-shops</span>
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className='space50'></div>
      <h2>Featured Shots</h2>
      <div className='tiles flex-all-center'>
        <div className='image-frame'>
          <img src='https://junoonnsut.com/style/images/h1.jpg' alt='photo'></img>
        </div>
        <div className='image-frame'>
          <img src='https://junoonnsut.com/style/images/h2.jpg' alt='photo'></img>
        </div>
        <div className='image-frame'>
          <img src='https://junoonnsut.com/style/images/h3.jpg' alt='photo'></img>
        </div>
        <div className='image-frame'>
          <img src='https://junoonnsut.com/style/images/h4.jpg' alt='photo'></img>
        </div>
        <div className='image-frame'>
          <img src='https://junoonnsut.com/style/images/h5.jpg' alt='photo'></img>
        </div>
        <div className='image-frame'>
          <img src='https://junoonnsut.com/style/images/h6.jpg' alt='photo'></img>
        </div>
        <div className='image-frame'>
          <img src='https://junoonnsut.com/style/images/h7.jpg' alt='photo'></img>
        </div>
        <div className='image-frame'>
          <img src='https://junoonnsut.com/style/images/h8.jpg' alt='photo'></img>
        </div>
        <div className='image-frame'>
          <img src='https://junoonnsut.com/style/images/h9.jpg' alt='photo'></img>
        </div>
      </div>
      <div className='space50'></div>

      <h2>Best of Storygram</h2>
      <div className='storygram-container flex-all-center'>
        <div className='storygram-tiles'>
        <div className='story-image-frame'>
          <a href='#' target='_blank'>
            <span className='bg flex-all-center'>
              <h3>STORY 1</h3>
            </span>
            <img src='https://junoonnsut.com/style/images/story3.jpg' alt='photo'></img>
          </a>
        </div>
          <div className='para-story'>
            <div className='story-title'><a href='#'><h3> Storygram 1</h3></a></div>
            <p> The Bofors Howitzer stood strong in all its glory, and in front it stood two people. The little boy was in absolute awe of the grandiosity of the machine. The giant wheels and the extended barrel left him in wonder. His grandfather had felt the exact same stream of emotions some thirty years ago when he first operated on the beast. It was a long time ago, but being in the presence of the Howitzer again had sent him down the memory lane. He smiled as he remembered some of the most cherished moments he had spent while serving in the Army. It was a cold morning, but warm nostalgia comforted him. It was a cold morning, but he felt at home., and the guide took his farewell.</p>
            <hr></hr>
            <div className='meta-footer flex-all-center'>
              <span className='date'>05 JULY 2018</span>
              <span className='comment'><i class="fa fa-comments"></i> 12</span>
            </div>
          </div>
        </div>
        <div className='storygram-tiles'>
        <div className='story-image-frame'>
          <a href='#' target='_blank'>
            <span className='bg flex-all-center'>
              <h3>STORY 2</h3>
            </span>
            <img src='https://junoonnsut.com/style/images/story1.jpg' alt='photo'></img>
          </a>
        </div>
          <div className='para-story'>
            <div className='story-title'><a href='#'><h3> Storygram 2</h3></a></div>
            <p> What Dev couldn’t foresee was the incoming sandstorm and eventual loss from the outside world. At the mercy of the desert without much supply, the travelers felt utterly lost. Just then a miracle occurred. A man appeared in front of them out of thin air, or so they felt. He informed them that his name is Susej, and he is one of the guides, sent by the traveling agency to ensure they are escorted safely after the storm. Guiding the path on a cold desert night, the guide went on to point out the fabled biblical star of the east, a bright magnificent star that had helped the three wise kings to reach the birthplace of Jesus. After a night’s travel, the group finally found the city, and the guide took his farewell.</p>
            <hr></hr>
            <div className='meta-footer flex-all-center'>
              <span className='date'>18 JUNE 2018</span>
              <span className='comment'><i class="fa fa-comments"></i> 15</span>
            </div>
          </div>
        </div>
      </div>
      <div className='space50'></div>

    </div>
  )
}

export default Container
