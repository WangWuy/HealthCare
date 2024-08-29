import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BaseContainer from '../../../../components/BaseContainer';
import { Colors } from '../../../../assets/colors/Colors';
import { FontSizes } from '../../../../assets/dimens/FontsSize';

const HealthDataScreen = () => {
    return (
        <BaseContainer
            isShowHeader={true}
            headerTittle="Dữ liệu sức khỏe"
            isShowLeftIcon={true}
            headerTittleStyle={styles.headerStyle}
            headerTittleTextStyle={styles.headerTitleText}
            backgroundColorStatus={Colors.green[600]}
        >
    
            <Text style={styles.text}>HealthDataScreen</Text>
        </BaseContainer>
    );
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: Colors.green[400],
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
    },
    headerTitleText: {
        color: Colors.light,
        fontSize: FontSizes.lg,
        fontWeight: 'bold',
    },
    text: {
        color: Colors.light,
    }
});
export default HealthDataScreen;