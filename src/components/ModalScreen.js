import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {scale} from 'react-native-size-matters';

import {Transition, Transitioning} from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

export default function ModalScreen(props) {
  const [currentIndex, setCurrentIndex] = React.useState(null);
  const ref = React.useRef();
  const [text, setText] = React.useState('');


  const [data, setData] = React.useState([]); 
 

    useEffect(() => {
      getData()
    },[])

  const getData = async () => {
  
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      //console.log(jsonValue);
      setData(JSON.parse(jsonValue))
      //return jsonValue != null ? JSON.parse(jsonValue) : null;
      
    } catch(e) {
      // error reading value
    }
  }


  const searchData = (text) => {
    const category=data.filter((item) => {
   
      const cat= item.subCategories.filter((it)=>{
        const itemData = it.subCategory.toUpperCase();
       const textData = text.toUpperCase();    
        return itemData.indexOf(textData) > -1;
      })
    
        //setData([...data, { data : cat}]);

    });

  }



  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginLeft: scale(5),
          marginRight: scale(5),
        }}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Image
            source={require('../assets/icons/cancel.png')}
            style={{width: scale(35), height: scale(35)}}
          />
        </TouchableOpacity>

        <View
          style={{
            height: scale(40),
            width: scale(250),
            margin: scale(5),
            backgroundColor: 'white',
            borderColor: 'grey',
            borderRadius: scale(5),
            borderWidth: scale(1),
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: scale(10),
              alignItems: 'center',
            }}>
            <Image
              style={{width: scale(20), height: scale(20)}}
              source={require('../assets/icons/search.png')}
            />
            <TextInput
              placeholder="Search by Sub Category"
              style={styles.textInput}
              onChangeText={(text) => searchData(text)}
              value={props.text}
              underlineColorAndroid="transparent"
            />
          </View>
        </View>

        <TouchableOpacity>
          <Image
            source={require('../assets/icons/comments.png')}
            style={{width: scale(35), height: scale(35)}}
          />
        </TouchableOpacity>
      </View>

      <View style={{marginTop: scale(15)}}>
        <Transitioning.View
          ref={ref}
          transition={transition}
          style={styles.container}>
          {console.log(data)}
          {data.map(({image, bg, color, category, subCategories}, index) => {
            return (
              <TouchableOpacity
                key={category}
                onPress={() => {
                  ref.current.animateNextTransition();
                  setCurrentIndex(index === currentIndex ? null : index);
                }}
                style={styles.cardContainer}
                activeOpacity={0.9}>
                <View style={[styles.card, {backgroundColor: bg}]}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
      
                    <Image
                      source={image}
                      style={{
                        width: scale(80),
                        height: scale(80),
                        borderRadius: scale(5),
                      }}
                    />
                    <Text style={[styles.heading, {color}]}>{category}</Text>
                  </View>

                  {index === currentIndex && (
                    <View style={styles.subCategoriesList}>
                      {subCategories.map((subCategory) => (
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', width: scale(180), margin: scale(3)}}>
                          <Image
                            source={subCategory.image}
                            style={{
                              width: scale(35),
                              height: scale(35),
                              borderRadius: scale(3),
                            }}
                          />
                        
                          <Text
                            //key={subCategory}
                            style={[styles.body, {color, width:scale(200)}]}>
                            {subCategory.subCategory}
                          </Text>
                        </View>
                      ))}
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </Transitioning.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    marginLeft: scale(5),
    fontSize: scale(15),
  },

  container: {
    //flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  cardContainer: {
    flexGrow: 1,
  },
  card: {
    flexGrow: 1,
    margin: scale(5),
    borderRadius: scale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: scale(30),
    textTransform: 'uppercase',
    width: scale(140),
    marginLeft: scale(40),
  },
  body: {
    fontSize: 20,
    lineHeight: 20 * 1.5,
    textAlign: 'center',
  },
  subCategoriesList: {
    marginTop: 20,
  },
});
