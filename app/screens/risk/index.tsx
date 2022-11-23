import { View } from "react-native"
import globalstyles from "app/globalstyles"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getRiskAllData } from "app/store/reducers/genetics"
import LoadingScreen from "app/globalcomponents/loadingscreen"
import RiskTypeIndicators from "./components/risktypeindicators"
import { AppDispatch, GeneticsSliceTypes, riskDataType, RootState } from "app/store/types"
import { useAppSelector } from "app/store"
import RiskData from "./components/risksdata"
import { FlatList } from "react-native-gesture-handler"
import styles from "./styles"

const RiskScreen = () => {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(getRiskAllData())
  }, [dispatch])

  

  const {riskalldata, riskallerror, riskallloading}: GeneticsSliceTypes =
    useAppSelector<RootState>((state) => state.genetics)
  
  return (
    <>
      {
        riskallloading ? <LoadingScreen size={'large'} color={'black'} /> :
          <View style={globalstyles.container}>
            <RiskTypeIndicators />
            <FlatList
              contentContainerStyle={styles.flatlistContainer}
              data={riskalldata}
              extraData={riskalldata}
              renderItem={RiskData}
              initialNumToRender={1}
            />
          </View>
      }
    </>
  )
}




export default RiskScreen