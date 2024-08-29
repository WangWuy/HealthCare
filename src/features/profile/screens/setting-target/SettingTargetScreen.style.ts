import { Platform, StyleSheet } from 'react-native';
import { FontSizes } from '../../../../assets/dimens/FontsSize';
import { IconsSize } from '../../../../assets/dimens/IconsSize';
import { Colors } from '../../../../assets/colors/Colors';

export const styles = StyleSheet.create({
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
    iconStyle: {
        width: IconsSize.md,
        height: IconsSize.md,
    },
    container: {
        flex: 1,
        padding: 8,
        marginTop: 10,
    },
    marginBot: {
        marginBottom: 40,
    },
    label: {
        fontSize: FontSizes.sm,
        fontWeight: 'bold',
        marginBottom: 8,
        color: Colors.green[900],
    },
    labelNumberInput: {
        fontSize: FontSizes.sm,
        fontWeight: 'bold',
        marginVertical: 8,
        color: Colors.green[900],
    },
    subLabelNumberInput: {
        fontSize: FontSizes.sm,
        marginTop: 4,
        color: Colors.green[900],
    },
    dropdown: {
        height: 42,
        borderRadius: 20,
        paddingHorizontal: 8,
        marginHorizontal: 4,
        backgroundColor: Colors.green[200],
    },
    genderContainer: {
        flexDirection: 'row',
    },
    genderButton: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        backgroundColor: Colors.gray[200],
    },
    maleButton: {
        borderTopStartRadius: 20,
        borderBottomStartRadius: 20,
    },
    femaleButton: {
        borderTopEndRadius: 20,
        borderBottomEndRadius: 20,
    },
    selectedGender: {
        backgroundColor: Colors.green[200],
        ...Platform.select({
            ios: {
                shadowColor: Colors.dark,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.4,
                shadowRadius: 4,
            },
            android: {
                elevation: 4,
            },
        }),
    },
    numberInputWrapper: {
        height: 80,
        width: '100%',
    },
    numberInputContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.gray[200],
        borderRadius: 8,
        alignItems:'center',
    },
    numberInput: {
        flex: 1,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
    button: {
        paddingRight: 8,
        paddingLeft: 8,
    },
    intensityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    intensityButton: {
        padding: 10,
        borderRadius: 20,
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 4,
        backgroundColor: Colors.gray[200],
    },
    selectedIntensity: {
        // borderColor: Colors.green[800],
        // borderWidth: 2,
        backgroundColor: Colors.green[200],
        ...Platform.select({
            ios: {
                shadowColor: Colors.dark,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.4,
                shadowRadius: 4,
            },
            android: {
                elevation: 4,
            },
        }),
    },
    calculateButton: {
        width: '100%',
        bottom: 20,
        backgroundColor: '#4CAF50',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    calculateButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    flex1: {
        flex: 1,
    },
    paddingRight: {
        paddingRight: 16,
    },
    marginHorizontal: {
        marginHorizontal: 8,
    },
    labelDescription: {
        textAlign: 'center',
        fontSize: FontSizes.sm,
        marginTop: 16,
        color: Colors.orange[600],
    },
    targetWeightInput: {
        height: 40,
        textAlign: 'center',
        width: '80%',
    },
    targetWeightText: {
        width: '20%'
    },
    targetWeightInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.gray[200],
        borderRadius: 20,
        paddingHorizontal: 8,
        marginHorizontal: 4,
    },
    selectedItemText: {
        color: Colors.light,
        fontWeight: 'bold',
        fontSize: FontSizes.sm,
    },
});