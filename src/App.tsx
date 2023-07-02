
import {  Grid , GridItem, Show} from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GeneraList from './components/GeneraList'
import { Genera } from './hooks/useGenera'
import { useState } from 'react'

function App() {
  
const [selectedGenera,setSelectedGenera] = useState<Genera | null>(null)
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
        <GridItem area={"aside"} paddingX={"5px"}> 
        <GeneraList onSelectGenera={onSelectedGenera}/>
        </GridItem>
        </Show>
        <GridItem area={"main"} >
          <GameGrid selectedGenera={selectedGenera} />
        </GridItem>
       </Grid>
      </>
  )
}

export default App
