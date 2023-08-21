import { View, Text } from 'react-native'
import React, {useEffect} from 'react'
import { popularMovies } from './services/index.js'
const App = () => {
   const init = async()=>{
    const mydata =await popularMovies()
    console.log('mydata', mydata)
   }

   init()
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App