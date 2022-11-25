import LoadingScreen from "app/globalcomponents/loadingscreen"
import globalstyles from "app/globalstyles"
import { useAppSelector } from "app/store"
import { getSubHazardData } from "app/store/reducers/genetics"
import { GeneticsSliceTypes, RootState } from "app/store/types"
import { FC, PropsWithChildren, useEffect } from "react"
import { View, Text } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { useDispatch } from "react-redux"
import SubHazardRisksCard from "./components/subhazardriskcards"
import styles from "./styles"

const SubHazards: FC<PropsWithChildren & any> = (props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSubHazardData(props?.route.params))
  }, [dispatch, props?.route.params])

  const {subhazard, subhazardloading}: GeneticsSliceTypes = useAppSelector<RootState>((state) => state.genetics)
  return (
    <>
    {subhazardloading ? <LoadingScreen size={'large'} color={'black'} />: 
    <View style={styles.container}>
      <Text style={styles.description}>
        {subhazard?.subHazardDescription || 'Description Missing'}
      </Text>
      <View style={{display: 'flex', flexDirection: 'row', alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.headerlabel}>Gene</Text>
        <Text style={styles.headerlabel}>Reference Sequence</Text>
        <Text style={styles.headerlabel}>Allele</Text>
        <Text style={styles.headerlabel}>Magnitude</Text>
      </View>
      <View style={styles.riskscontainer}>
        <FlatList 
          data={subhazard?.risks}
          renderItem={SubHazardRisksCard}
          extraData={subhazard?.risks}
          style={globalstyles.flatlistContainer}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>}
    </>
  )
}

export default SubHazards