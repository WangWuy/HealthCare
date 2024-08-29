import React from 'react';
import { View, Text, StyleSheet, Platform, Dimensions } from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import { Colors } from '../../../assets/colors/Colors';

const { width } = Dimensions.get('window');
const CHART_SIZE = width * 0.4;

const MacroBalanceChart = () => {
    const data = [
        { key: 'carbs', value: 32, svg: { fill: '#FFD700' }, label: 'Carbs', goal: 60 },
        { key: 'protein', value: 29, svg: { fill: '#87CEFA' }, label: 'Protein', goal: 20 },
        { key: 'fat', value: 39, svg: { fill: '#DEB887' }, label: 'Fats', goal: 20 },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cân bằng vĩ mô</Text>
            <Text style={styles.subtitle}>Trung bình cho giai đoạn đã chọn</Text>

            <View style={styles.content}>
                <View style={styles.columnWithSeparator}>
                    <View style={styles.goalColumn}>
                        <Text style={styles.columnTitle}>Mục tiêu:</Text>
                        {data.map((item) => (
                            <View key={item.key} style={styles.row}>
                                <View key={item.key} style={styles.row}>
                                    <View style={styles.labelRow}>
                                        <View style={[styles.colorBox, { backgroundColor: item.svg.fill }]} />
                                        <Text style={styles.label}>{item.label}</Text>
                                    </View>
                                    <Text style={styles.percentage}>{item.goal}%</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                    <View style={styles.separator} />
                </View>

                <View style={styles.intakeColumn}>
                    <Text style={styles.columnTitle}>Đã nạp:</Text>
                    <View style={styles.chartContainer}>
                        <PieChart
                            style={styles.chart}
                            data={data}
                            innerRadius={CHART_SIZE * 0.25}
                            padAngle={0.05}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: Colors.light,
        borderRadius: 10,
        marginHorizontal: 10,
        marginBottom: 20,
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
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 14,
        color: Colors.gray[600],
        marginBottom: 16,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    columnWithSeparator: {
        flexDirection: 'row',
        flex: 3,
    },
    goalColumn: {
        flex: 1,
    },
    intakeColumn: {
        flex: 5, 
        paddingLeft: 16,
    },
    columnTitle: {
        fontSize: 16,
        fontWeight: 'medium',
        marginBottom: 12,
        alignItems: 'flex-start',
    },
    row: {
        marginBottom: 8,
    },
    labelRow: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    colorBox: {
        width: 14,
        height: 14,
        marginRight: 8,
        borderRadius: 7,
    },
    labelContainer: {
        flexDirection: 'column',
    },
    label: {
        fontSize: 14,
    },
    percentage: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingLeft: 20,
        paddingTop: 4,
    },
    chartContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    chart: {
        height: CHART_SIZE,
        width: CHART_SIZE,
    },
    separator: {
        width: 1,
        backgroundColor: '#E0E0E0',
        marginHorizontal: 16,
    },
});

export default MacroBalanceChart;