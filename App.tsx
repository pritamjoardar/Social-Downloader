import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  ActivityIndicator
} from 'react-native';

import { WebView } from 'react-native-webview';

const App =()=>{
  const [load,setLoad] = useState<boolean>(true);
  return(
    <>
    <SafeAreaView className={'flex-1 relative'}>
      <WebView onLoadEnd={()=>setLoad(false)} source={{ uri: 'https://reelsaver.online/' }}  />
      {load?<ActivityIndicator className='absolute border h-full w-full' size={'large'} color={'#ee2a7b'}/>:null}
      </SafeAreaView>
    </>
  )
  
}

export default App