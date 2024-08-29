import { Colors } from '../../../assets/colors/Colors';
import { FontSizes } from '../../../assets/dimens/FontsSize';
import { Spacings } from '../../../assets/dimens/Spacing';
import {
    StyleSheet,
    Platform,
} from 'react-native';

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: Colors.green[400],
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: Spacings.md,
        height: 60,
    },
    headerTitleText: {
        color: Colors.light,
        fontSize: FontSizes.lg,
        fontWeight: 'bold',
        marginRight: 20,
    },
    headerRightContent: {
        flexDirection: 'row',
        alignItems: 'center',
        color: Colors.light,
    },
    scrollView: {
        flex: 1,
        backgroundColor: Colors.light,
    },
});

export default styles;