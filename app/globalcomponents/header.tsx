import globalstyles from "app/globalstyles"
import { scale, windowWidth } from "app/lib/scale"
import { BackIcon } from '../../assets/svg/icons'
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"

const Header = (props: any) => {
  const {params} = props?.route
  const RightHeaderCompFromProps = params?.RightHeaderCompFromProps
  return (
    <View style={{
      ...globalstyles.container, 
      ...styles.container
    }}>
      <TouchableOpacity onPress={() => props?.navigation?.goBack()}>
        {props?.navigation?.canGoBack() ? 
        <BackIcon /> : <></>}
       </TouchableOpacity>
      <View><Text style={styles.title}>{params?.title}</Text></View>
      <View>
        {RightHeaderCompFromProps && RightHeaderCompFromProps !== 'profile' ? <RightHeaderCompFromProps />:
          RightHeaderCompFromProps && RightHeaderCompFromProps === 'profile' ?
        <Image 
          style={{ borderRadius: 10 }}
          source={require('../../assets/images/profile.png')}
        />: <></>}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    height: scale(40), 
    width: windowWidth, 
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: scale(24),
    paddingHorizontal: 16
  },
  title: {
    color: '#000',
    fontWeight: '700',
    fontSize: 18
  }
})

export default Header