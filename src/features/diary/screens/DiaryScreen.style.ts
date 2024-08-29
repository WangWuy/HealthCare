
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
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: Spacings.md,
        height: 60,
    },
    headerTitleText: {
        color: Colors.light,
        fontSize: FontSizes.lg,
        fontWeight: 'bold',
    },
    headerRightContent: {
        flexDirection: 'row',
        alignItems: 'center',
        color: Colors.light,
    },
    calendarIcon: {
        width: 24,
        height: 24,
    },
    scrollView: {
        flex: 1,
    },
    container: {
        backgroundColor: Colors.green[400],
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        color: Colors.light,
        fontSize: 20,
        fontWeight: 'bold',
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateText: {
        color: Colors.light,
        fontSize: 18,
        marginHorizontal: 10,
    },
    chevron: {
        color: Colors.light,
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    chartAndStatsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    chartContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.green[400], // Đảm bảo nền của chart cùng màu với background
        borderRadius: 90,
        ...Platform.select({
            ios: {
                shadowColor: Colors.dark,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
            },
            android: {
                elevation: 4,
            },
        }),
    },
    chart: {
        height: 180,
        width: 180,
    },
    chartCenter: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    totalCalories: {
        fontSize: FontSizes['2xl'],
        fontWeight: 'bold',
        color: Colors.light,
    },
    caloriesLabel: {
        fontSize: FontSizes.sm,
        color: Colors.light,
    },
    statItem: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    statNumber: {
        color: Colors.light,
        fontSize: FontSizes.xl,
        fontWeight: 'bold',
    },
    statText: {
        color: Colors.light,
        fontSize: FontSizes.sm,
    },
    macrosContainer: {
        backgroundColor: Colors.light,
        borderRadius: 10,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginHorizontal: 10,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
            },
            android: {
                elevation: 4,
            },
        }),
    },
    macroItem: {
        flex: 1,
        marginHorizontal: 5,
    },
    macroHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    macroColor: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 5,
    },
    macroName: {
        fontSize: FontSizes.sm,
        fontWeight: 'bold',
    },
    macroBar: {
        height: 10,
        backgroundColor: '#E0E0E0',
        borderRadius: 5,
        marginBottom: 5,
    },
    macroProgress: {
        height: '100%',
        borderRadius: 5,
    },
    macroText: {
        fontSize: FontSizes.xs,
        color: Colors.gray[600],
    },
});

export default styles;