import { View, Animated, Text, TouchableOpacity, ListRenderItemInfo, Easing } from "react-native"
import { StyleSheet } from "react-native";
import { riskDataType } from "app/store/types";
import { scale } from "app/lib/scale";
import Typography from "app/globalcomponents/typography";
import StackedBarChartComponent from "app/globalcomponents/barstackedchart";
import { CollapseIcon, ExpandIcon } from "../../../../assets/svg/icons";
import { FC, PropsWithChildren, useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const intialHeight = 70
const RiskData: FC<PropsWithChildren<IRiskData>> = (props) => {
  const {item, index} = props?.data;
  const [open, setOpen] = useState(false)
  const animationHeight = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (open) {
      Animated.timing(animationHeight, {
        duration: 500,
        toValue: 0,
        easing: Easing.linear,
        useNativeDriver: false
      }).start();
    }
    else{
      Animated.timing(animationHeight, {
        duration: 500,
        toValue: 0,
        easing: Easing.linear,
        useNativeDriver: false
      }).start();
    }
  }, [open]);

  const navigation = useNavigation()
  return (
    <View style={{display: 'flex', flexDirection: 'row'}}>
      <Animated.View 
        style={[styles.container, {
          height: open ? '97%': scale(intialHeight),
        } ]} 
        key={`riskname-${index}`}
      >
        <View style={{ display: 'flex', width: scale(250),  }}>
          <Typography style={styles.label}>{item?.hazardName}</Typography>
          <StackedBarChartComponent 
            index={index}
            data={[item?.deficient, item?.risk, item?.wildType, item?.improved, item?.optimal]}
            colorrange={['#EF9611', '#FFF4E4', '#D2D2D2', '#EBFBE2', '#81B578']}
            width={scale(250)}
            height={scale(8)}
            styles={styles.chartcontainer}
            barRadius={2}
          />
          {open ? 
          <View style={styles.subsection}>
            <Text >This section contains genetic traits often found in supercentenarians.</Text>
            {item?.subHazards.map((subhazard, idx) => (
              <View 
                key={`subhazard-${idx}`} style={styles.subhazarcontainer}
              >
                <Typography style={styles.subhazardlabel}>{subhazard?.subHazardName}</Typography>
                <StackedBarChartComponent 
                  index={index}
                  data={[subhazard?.deficient, subhazard?.risk, subhazard?.wildType, subhazard?.improved, subhazard?.optimal]}
                  colorrange={['#EF9611', '#FFF4E4', '#D2D2D2', '#EBFBE2', '#81B578']}
                  width={scale(220)}
                  height={scale(4)}
                  styles={styles.chartcontainer}
                  barRadius={4}
                />
                <TouchableOpacity 
                  onPress={() => navigation?.navigate('SubHazard', {subHazardId: subhazard.subHazardId})}
                >
                  <Text style={styles.morebutton}>More</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>: null}
        </View>
        <TouchableOpacity onPress={() => {
          setOpen(!open)
        }} style={styles.collapsiblecontainer}>
          {open ? <CollapseIcon />: <ExpandIcon />}
        </TouchableOpacity>
        
      </Animated.View>
      
    </View>
  )
}

interface IRiskData {
  data: ListRenderItemInfo<riskDataType>
  
}

const styles = StyleSheet.create({
  container: {
    width: scale(316),
    elevation: 2,
    backgroundColor: '#fff',
    marginLeft: scale(16),
    marginRight: scale(16),
    marginBottom: scale(16),
    borderRadius: scale(12),
    padding: scale(16),
    display: 'flex',
    flexDirection: 'row',
  },
  subhazarcontainer: {
    elevation: 2,
    backgroundColor: '#fff',
    marginBottom: scale(4),
    borderRadius: scale(12),
    padding: scale(16),
    display: 'flex',
    flexDirection: 'column',
    zIndex: 100,
    marginTop: scale(4),
  },
  label: {
    fontWeight: '600',
    fontSize: 14,
    textTransform: 'capitalize',
    color: '#15284E'
  },
  subhazardlabel: {
    fontWeight: '500',
    fontSize: 12,
    textTransform: 'capitalize',
    color: '#15284E'
  },
  chartcontainer: {
    marginTop: scale(8),
    height: scale(8),
  },
  collapsiblecontainer: {
    width: scale(40), 
    height: scale(40), 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  content: {  
    height: scale(200),
    width: scale(316)
  },
  subsection: {
    marginTop: scale(16)
  },
  morebutton: {
    color: '#2559D6',
    fontSize: 14, 
    fontWeight: '600'
  }
})


export default RiskData