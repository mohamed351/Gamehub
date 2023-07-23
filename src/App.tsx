
import {  Grid , GridItem, Show} from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GeneraList from './components/GeneraList'
import { Genera } from './hooks/useGenera'
import { useState } from 'react'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/useGames'


function App() {
  
const [selectedGenera,setSelectedGenera] = useState<Genera | null>(null)
const [selectedPlatform,setSelectedPlatform] = useState<Platform |null>(null);;
const  onSelectedGenera=(item:Genera)=>{
  setSelectedGenera(item);
}
  return (
    <>
       <Grid templateAreas={
        {
          base:`"nav nav" "main main"`,
          lg:`"nav nav" "aside main"`
        }
       }>

        <GridItem area={"nav"} > 
        <Navbar />
        </GridItem>
        <Show above='lg'>
        <GridItem area={"aside"} minW={230} paddingX={"5px"}> 
        <GeneraList onSelectGenera={onSelectedGenera}/>
        </GridItem>
        </Show>
        <GridItem area={"main"} >
         <PlatformSelector selectedPlatform={selectedPlatform} onSelectedPlatform={(platform)=> setSelectedPlatform(platform)}/>
          <GameGrid selectedPlatform={selectedPlatform} selectedGenera={selectedGenera} />
        </GridItem>
       </Grid>
      </>
  )
}

export default App
