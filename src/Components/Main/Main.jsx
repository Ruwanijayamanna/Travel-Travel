import React from 'react'
import './main.css'
import './main.scss';
import img from '../../assets/sigiriya.jpg'
import img1 from '../../assets/babarakandafalls.jpg'
import img2 from '../../assets/daladamaligawa.jpg'
import img3 from '../../assets/ella.jpg'
import img4 from '../../assets/yala.jpg'
import img5 from '../../assets/gallefort.jpg'
import img6 from '../../assets/hortenplain.jpg'
import img7 from '../../assets/mirissa.jpg'
import img8 from '../../assets/dabullacave.jpg'
import img9 from '../../assets/unawatuna.jpg'
import img10 from '../../assets/bundala.jpg'
import img11 from '../../assets/gangarama.jpg'
import img12 from '../../assets/gallfort.jpg'
import img13 from '../../assets/viharamahadewipark.jpg'
import img14 from '../../assets/kelaniya.jpg'
import img15 from '../../assets/pettah floating.jpg'
import img16 from '../../assets/colombo dehiwala.jpg'
import img17 from '../../assets/independence.jpg'
import img18 from '../../assets/mount lavinia beach.jpg'
import img19 from '../../assets/colombo national museum.jpg'
import img20 from '../../assets/jami.jpg'

//import icon
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
//let me oaste the array named data

const Data =[{
  id:1,
  imgSrc:img ,
  destTitle : 'Sigiriya',
  location : 'Sigiriya, Central Province',
  grade : ' ★★★★★',
  fees :'$30 (Foreign tourists)',
  description:'Known as the "Lion Rock" this ancient rock fortress is a UNESCO World Heritage site. It features stunning frescoes, impressive water gardens, and panoramic views from the summit.',

},

{
  id:2,
  imgSrc:img1 ,
  destTitle : 'Babarakanda Waterfall',
  location : 'Badulla',
  grade : ' ★★★★★',
  fees :'Free',
  description : 'Bambarakanda Falls is the tallest waterfall in Sri Lanka, cascading down 263 meters (863 feet). Surrounded by lush greenery and pine forests, its a spectacular sight and a great spot for nature lovers and photographers.',
}

,{
  id:3,
  imgSrc:img2,
  destTitle : 'Temple of the Tooth Relic (Sri Dalada Maligawa)',
  location : 'Kandy, Central Province',
  grade : '★★★★★ ',
  fees :'$30 (Foreign tourists)',
  description :' This sacred Buddhist temple houses a relic of the Buddhas tooth and is a significant pilgrimage site. The temple’s architecture and surrounding Kandy Lake add to its charm. It is a significant religious site and offers a glimpse into Sri Lankan culture and history.',

}
,{
  id:4,
  imgSrc:img3 ,
  destTitle : 'Ella Rock',
  location : ' Ella, Uva Province',
  grade : '★★★★☆',
  fees :'Free',
  description :'Ella Rock offers a challenging hike with rewarding views of the lush green landscape, tea plantations, and distant mountains. It’s a popular spot for nature enthusiasts and photographers.',

}
,{
  id:5,
  imgSrc:img4 ,
  destTitle : 'Yala National Park',
  location : 'Southeast Sri Lanka',
  grade : '★★★★★',
  fees :'$25 (Foreign tourists)',
  description :'Renowned for its diverse wildlife, including leopards, elephants, and a variety of bird species, Yala National Park is a prime destination for safari tours and nature observation.',


}
,{
  id:6,
  imgSrc:img5,
  destTitle : 'Galle Fort',
  location : 'Galle, Southern Province',
  grade : '★★★★★',
  fees :'Free',
  description :'A UNESCO World Heritage site, Galle Fort is a well-preserved colonial-era fortification with charming streets, historical buildings, and stunning ocean views. It reflects a blend of European and South Asian architecture.',

}
,{
  id:7,
  imgSrc:img6 ,
  destTitle : 'Horton Plains National Park',
  location : 'Nuwara Eliya, Central Province',
  grade : '★★★★☆',
  fees :'$15 (Foreign tourists)',
  description :'Famous for its "World’s End" cliff, Horton Plains offers scenic hikes through cloud forests and grasslands. It’s also a habitat for endemic species and a great spot for nature lovers.',

}
,{
  id:8,
  imgSrc:img7,
  destTitle : 'Mirissa Beach',
  location : 'Mirissa, Southern Province',
  grade : ' ★★★★☆',
  fees :'Free',
  description :'A picturesque beach known for its golden sands, clear waters, and whale watching opportunities. It’s a popular spot for relaxation and water activities.',

}
,{
  id:9,
  imgSrc:img8,
  destTitle : 'Dambulla Cave Temple',
  location : 'Dambulla, Central Province',
  grade : ' ★★★★☆',
  fees :'$10 (Foreign tourists)',
  description :'This complex of five cave temples is filled with Buddhist murals and statues, making it an important cultural and religious site. It offers both historical insights and stunning views of the surrounding area.',
}
,{
  id:10,
  imgSrc:img9,
  destTitle : 'Unawatuna Beach',
  location : 'Galle District, Southern Province',
  grade : ' ★★★★☆',
  fees :'Free',
  description :' Unawatuna is a popular coastal town renowned for its beautiful beaches, clear turquoise waters, and vibrant coral reefs. Its a fantastic spot for snorkeling, diving, and relaxing by the sea. The town also has a lively atmosphere with numerous cafes, bars, and restaurants.',
}
,{
  id:11,
  imgSrc:img10,
  destTitle : 'Bundala National Park (Bird Park)',
  location : 'Hambantota District, Southern Province',
  grade : ' ★★★★☆',
  fees :'$15',
  description :'Bundala National Park is a UNESCO biosphere reserve and a haven for birdwatchers. It is home to over 200 species of birds, including flamingos, pelicans, and various migratory birds. The parks diverse ecosystems of wetlands, lagoons, and sand dunes provide an ideal environment for birdlife and other wildlife.',
}

,{
  id:12,
  imgSrc:img11,
  destTitle : 'Gangarama Temple',
  location : 'Colombo',
  grade : ' ★★★★☆',
  fees :'$1',
  description:'The Gangaramaya is one of the oldest Buddhist temples in Colombo, located on Beira Lake. It is a unique blend of architecture and culture and was built in the 19th century and started by the famous scholar-monk Hikkaduwe Sri Sumangala Nayaka Thera. ',
}

,{
  id:13,
  imgSrc:img12,
  destTitle : 'Galle Face',
  location : 'Colombo',
  grade : ' ★★★★☆',
  fees :'Free',
  description:'The Galle Face Green is a beautiful beach park located in Fort Colombo along its eastern coastline. Spread over almost five hectares, it is popular for activities like kite flying, fishing, football, beach volleyball, jogging, and relaxing by the beach. It also offers stunning sunrise and sunset views',
}
,{
  id:14,
  imgSrc:img13,
  destTitle : 'Viharamahadevi Park',
  location : 'Colombo',
  grade : ' ★★★★☆',
  fees :'Free',
  description:'Viharamahadevi is one of the biggest and oldest parks in Sri Lanka, located quite close to the National Museum in Colombo. The parks highlight is a huge Buddha statue accompanied by series of water fountains. It also has a mini zoo and a childrens play area. The park also offers breathtaking sunrise and sunset views.',
}
,{
  id:15,
  imgSrc:img14,
  destTitle : 'Kelaniya Rajamaha Viharaya',
  location : 'Colombo',
  grade : ' ★★★★☆',
  fees :'Free',
  description:'Kelaniya Raja Maha Vihara is a Buddhist temple built in the 5th century. It is believed to have been visited by the Buddha on his third visit to the country along with 500 monks after the enlightenment of 8 years, back in 500 BCE. The main attraction is the astounding 90 feet stupa and the intrinsic paintings.',
}
,{
  id:16,
  imgSrc:img15,
  destTitle : 'Pettah Floating Market',
  location : 'Colombo',
  grade : ' ★★★★☆',
  fees :'',
  description:'The Pettah Floating Market is a series of pavilions constructed on the far end of the restored Beira lake between the Pettah bus station and the railway station. There are about ninety trade stalls and shops along the waters, with vendors selling fruits, vegetables and flowers on the wooden boats floating lazily on the lake. ',
}
,{
  id:17,
  imgSrc:img16,
  destTitle : 'National Zoological Garden',
  location : 'Colombo',
  grade : ' ★★★★☆',
  fees :'$15',
  description:'The National Zoological Garden of Sri Lanka, also known as the Colombo Zoo or the Dehiwala Zoo is home to over 300 different species of animals, birds, reptiles, and fish from all over the world. It also has a beautiful butterfly garden, fountains, and colorful flowers.',
}
,{
  id:18,
  imgSrc:img17,
  destTitle : 'Independence Square',
  location : 'Colombo',
  grade : ' ★★★★☆',
  fees :'$20',
  description:'Located in the Cinnamon Gardens district, Independence Square was built in 1948 to commemorate Sri Lanka gaining independence from the British Empire. The present-day square includes manicured fountain gardens, ponds, and the grand Independence Memorial Hall, immortalizing those who fought to preserve the Sri Lankan identity during colonisation. ',
}
,{
  id:19,
  imgSrc:img18,
  destTitle : 'Mount Lavinia Beach',
  location : 'Colombo',
  grade : ' ★★★★☆',
  fees :'$9',
  description:'Famed for its "Golden Mile" of scenic blond coastline, Mount Lavinia Beach offers a mile-long stretch of sand, gentle waves, lifeguards, fancy hotels, pubs, and restaurants. Its known for its serene atmosphere and beautiful sunsets. The beach has various water sports, including surfing, bodyboarding, and jet skiing.',
}
,{
  id:20,
  imgSrc:img19,
  destTitle : 'National Museum',
  location : 'Colombo',
  grade : ' ★★★★☆',
  fees :'Free',
  description:'The National Museum of Colombo is the largest museum in Sri Lanka. It dates back to 1877 and has a colonial vibe with a rich history covering 2500 years. The building’s artworks have an essence of the Dutch, Portuguese, and British Colonial times,with the display of significant ancient',
}

,{
  id:21,
  imgSrc:img20,
  destTitle : 'Jami Ul-Alfar Mosque',
  location : 'Colombo',
  grade : ' ★★★★☆',
  fees :'$5',
  description:'Famed for its striking red and white candy-striped brick facade, Red Mosque is a long-standing landmark mosque on Second Cross Street, the old port area of Colombo. The dual-storied building with minarets has a clock tower reminiscent of Kuala Lumpur’s Jamek Mosque. Prayer times and Fridays are the busiest hours.',
}

]




const Main = () => {
  return (
   <section className='main container section'>
    <div className="secTitle">
    <h3 className="title">
      Most Visited Destination
    </h3>
    </div>
      <div className="secContent grid">
        {
          Data.map(({id,imgSrc,destTitle,location ,grade,fees,description}) => {
              return(
                <div key={id} className="singleDestination">

                  <div className="imageDiv">
                  <img src={imgSrc} alt = {destTitle} /></div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle} </h4>
                  <span className="continent flex">
                  <HiOutlineLocationMarker className='icon'/>
                 <span className="name">{location}</span>
                  </span>

                 <div className="fees flex">
                  <div className="grade">
                    <span>{grade}<small>+1</small></span>
                  </div>
                  <div className="price">
                    <h3>{fees}</h3>
                  </div>
                 </div>
                <div className="desc">
                  <p>{description}</p>
                </div>

                  <button className='btn flex'>
                    DETAILS  < HiOutlineClipboardCheck className='icon'/>
                  </button>
                </div>
                </div>
        
              )
          }
        )}

      </div>



   </section>
  )
}

export default Main;
