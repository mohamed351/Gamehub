
import {  Grid , GridItem, Show} from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GeneraList from './components/GeneraList'

function App() {
  

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
        <GeneraList />
        </GridItem>
        </Show>
        <GridItem area={"main"} >
          <GameGrid />
        </GridItem>
       </Grid>
      </>
  )
}

export default App
