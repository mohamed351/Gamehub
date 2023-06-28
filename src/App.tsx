
import { Button, Grid , GridItem, Show} from '@chakra-ui/react'

function App() {
  

  return (
    <>
       <Grid templateAreas={
        {
          base:`"nav nav" "main main"`,
          lg:`"nav nav" "aside main"`
        }
       }>

        <GridItem area={"nav"} bg={"blue"}> nav</GridItem>
        <Show above='lg'>
        <GridItem area={"aside"} bg={"gold"}> aside</GridItem>
        </Show>
        <GridItem area={"main"} bg={"GrayText"}>main</GridItem>
       </Grid>
      </>
  )
}

export default App
