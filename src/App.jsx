

import './styles.css'
import Header from './components/Header'
import Section from './components/Sections'
import ListaItem from './components/ListaItem'

const gamesListData =[
  { 
    url:"https://www.twitch.tv/directory/game/League%20of%20Legends", 
    imageUrl:"https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg", 
    alt:"Imagem do jogo League of Legends", 
  },

  {
    url:"https://www.twitch.tv/directory/game/VALORANT",
    imageUrl:"https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg", 
    alt:"Imagem do jogo Valorant",
  },
  {
    url:"https://www.twitch.tv/directory/game/Minecraft",
    imageUrl:"https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg", 
    alt:"Imagem do jogo Minecraft", 
  },
  {
    url:"https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    imageUrl:"https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg", 
    alt:"Imagem do jogo TFT",
  } 
]

const chanelListData =[
    { 
    href:"https://www.twitch.tv/maykbrito",
    imageUrl:"https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png", 
    alt:"Imagem de Mayk Brito",
    },  
    {
    href:"https://www.twitch.tv/alanzoka",
    imageUrl:"https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-150x150.png", 
    alt:"Imagem de Alanzoka",
    },
      {
    href:"https://www.twitch.tv/cellbit",
    imageUrl:"https://static-cdn.jtvnw.net/jtv_user_pictures/cb885149-f7f7-48f0-99ae-fe0a386ed3e2-profile_image-150x150.png", 
    alt:"Imagemd de Cellbit",
      }
]

const socialLIstData =[
  {
    url:"https://twitch.com/maykbrito",
    imageUrl:"/assets/twitch.svg",
    alt:"twich do Myk Brito"
  },
  {
    url:"https://instagram.com/maykbrito",
    imageUrl:"/assets/instagram.svg",
    alt:"Instagram do Myk Brito"
  },
  {
    url:"https://twitter.com/maykbrito",
    imageUrl:"/assets/twitter.svg",
    alt:"Twitter do Myk Brito"
  },
  {
    url:"https://youtube.com/maykbrito",
    imageUrl:"/assets/youtube.svg",
    alt:"youtube do Myk Brito"
  },



]

function App() {
  return (
    <div>
      {/* incluir header aqui */}
      <Header/>
      
      <main>
      {/* incluir main aqui */}
      <Section 
          title="Meus Jogos"
          subtitle="Os games que mais curto jogar"
          className="games-list"
          >
          {/* items da lista*/}  
          {
            gamesListData.map(function(item)
            {
              return (
                <ListaItem 
                  url= {item.url}
                  imageUrl={item.imageUrl}
                  alt={item.alt}
                />
              )
            })
          }
      </Section>

      <Section 
          title="Canais e Streamers"
          subtitle="Listas de canais e transmissão que não perco"
          className="channel-list"
          >
          {
            chanelListData.map(function(item)
            {
              return(
                <ListaItem
                  url={item.url}
                  imageUrl={item.imageUrl}
                  alt={item.alt}
                />
              )
           })
        }
      </Section>

      <Section
        title ="Minhas Redes"
        subtitle ="Se Conect comigo agora mesmo!" 
        className ="social-list"  >

        {
          socialLIstData.map(function(item){
            return(
              <ListaItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
                />
            )
          })
        }  
        
      </Section>    
      </main>
    </div>
  
  )
}

export default App
