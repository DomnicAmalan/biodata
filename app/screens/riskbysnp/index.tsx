import LoadingScreen from "app/globalcomponents/loadingscreen"
import { useAppSelector } from "app/store"
import { getRiskBySNPData } from "app/store/reducers/genetics"
import { GeneticsSliceTypes, RootState } from "app/store/types"
import { FC, PropsWithChildren, useEffect } from "react"
import { Text, View, ScrollView } from "react-native"
import { useDispatch } from "react-redux"
import styles from "./styles"

const RiskBySNP: FC<PropsWithChildren & any> = (props) => {

  const dispatch = useDispatch()

  const {risksnp, risksnploading}: GeneticsSliceTypes = useAppSelector<RootState>((state) => state.genetics)
  console.log(risksnp?.risks)
  useEffect(() => {
    dispatch(getRiskBySNPData(props?.route.params))
  }, [])

  return (
    <>
    {risksnploading ?<LoadingScreen size={'large'} color={'black'} />:
      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
        <View style={styles.tab}></View>
        <View style={styles.section}>
          <View style={styles.dataview}>
            <Text style={styles.datahead}>Gene</Text>
            <Text style={styles.datatext}>{risksnp?.risks?.[0].geneName}</Text>
          </View>
          <View style={styles.dataview}>
            <Text style={styles.datahead}>Aminoacid designation</Text>
            <Text style={styles.datatext}>{risksnp?.risks?.[0].aminoAcid}</Text>
          </View>
          <View style={styles.dataview}>
            <Text style={styles.datahead}>Magnitude</Text>
            <Text style={styles.datatext}>{risksnp?.risks?.[0].magnitude}</Text>
          </View>
          <View style={styles.dataview}>
            <Text style={styles.datahead}>Narrative</Text>
            <Text style={styles.narrative}>{risksnp?.risks?.[0].narrative}</Text>
          </View>
        </View>
      </ScrollView>
    }
    </>
  )
}

export default RiskBySNP