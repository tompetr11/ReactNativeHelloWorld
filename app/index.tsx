 import { Image, View,Text,ScrollView } from "react-native";

const DATA =[{title: '', subtitle:'',},
  {title: '', subtitle:'',},
  {title: '', subtitle:'',},
  {title: '', subtitle:'',},]

const Card =(props)=>{
  console.log(props);
  return (

<View style={{
  // se props e null ?? usa blue
  backgroundColor:props.backgroundColor ?? 'blue',
  height:400,
  borderRadius:15,
  flexDirection:'row',
  marginBottom:10,
}}>

     {/*IMAGE*/}
    <View style={{flex:1,
      justifyContent:'center',
      alignItems:'center',
    }}>
     <Image 
     source={require('../assets/images/mavci.jpg')}
      style={{
        width:150,
        height:150,
        borderRadius:150/2,
        resizeMode:'cover'
      }}/>
    </View>
      {/*IMAGE*/}

  {/*DESCRIPTION*/}
  <View style={{flex:1, paddingVertical:16,}}>
    <Text style={{fontSize:20, fontWeight:'800'}}>{props.title}</Text>
    <View style={{flex:1, justifyContent:'center',paddingRight:16,}}>
      <Text>{props.subtitle}</Text>
    </View>
  </View>
   {/*DESCRIPTION*/}
</View>
  )
}

export default function Index() {
  return (
    
 

<ScrollView style={{flex:1,
backgroundColor:'brown',
  paddingHorizontal:16,
}}>
  {DATA.map((card)=>{return(<Card title={card.title}
 subtitle={card.subtitle}
 backgroundColor={'white'}/>)})}


 <Card 
 key
 title={'ciao'}
 subtitle={'htrfbcvbujiw<iuuiefbjwbfjwrgbieiobjoinguibfuvbfdioms'}
 backgroundColor={'white'}/>

<Card title={'uy'}
 subtitle={'htrfbcvbujgedvnjgrjkegw<bjweg<hjbwefiwegiewgigwiueriuegwiu<wiw<iuuiefbjwbfjwrgbieiobjoinguibfuvbfdioms'}
 backgroundColor={'purple'}/>

  <Card title={'male'}
 subtitle={'htrfbcvbujgedvnjrgbieiobjoinguibfuvbfdioms'}
 />
</ScrollView>

  );
}