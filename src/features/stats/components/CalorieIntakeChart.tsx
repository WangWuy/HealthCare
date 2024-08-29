import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { StackedBarChart, Grid, YAxis } from 'react-native-svg-charts';
import { Dimensions } from 'react-native';

import { Colors } from '../../../assets/colors/Colors';
import { FontSizes } from '../../../assets/dimens/FontsSize';

import IconArrowLeft from '../../../assets/icons/ic-arrow-left-gray.svg';
import IconArrowRight from '../../../assets/icons/ic-arrow-right-gray.svg';

const screenWidth = Dimensions.get('window').width;

const CalorieIntakeChart = () => {
    const averageDailyGoal = 2900; // Mục tiêu trung bình hàng ngày
    const roundedGridMax = Math.ceil(averageDailyGoal / 500) * 500; // Làm tròn lên đến bội số của 500 gần nhất
    const contentInset = { top: 10, bottom: 10 }

    const data = [
        { goal: averageDailyGoal - 1305, over: 1305, label: 'TH 2' },
        { goal: averageDailyGoal - 1500, over: 1500, label: 'TH 3' },
        { goal: averageDailyGoal - 2400, over: 2400, label: 'TH 4' },
        { goal: averageDailyGoal - 2780, over: 2780, label: 'TH 5' },
        { goal: averageDailyGoal - 2280, over: 2280, label: 'TH 6' },
        { goal: averageDailyGoal - 2080, over: 2080, label: 'TH 7' },
        { goal: averageDailyGoal - 2680, over: 2680, label: 'CN' },
    ];

    const colors = ['#ffa500', '#e0e0e0'];
    const keys: ('over' | 'goal')[] = ['over', 'goal'];
    const yAxisData = Array.from({ length: 7 }, (_, i) => i * (roundedGridMax / 6));

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => { }}>
                    <IconArrowLeft width={24} height={24} fill={Colors.dark} />
                </TouchableOpacity>

                <Text style={styles.dateRange}>19 thg 8 - 25 thg 8</Text>
                
                <TouchableOpacity onPress={() => { }}>
                    <IconArrowRight width={24} height={24} />
                </TouchableOpacity>
            </View>
            <View style={styles.chartWrapper}>
                <Text style={styles.title}>Lượng calo nạp vào</Text>
                <Text style={styles.subtitle}>Mục tiêu trung bình hàng ngày: {averageDailyGoal}Cal</Text>
                <View style={styles.chartContainer}>
                    <YAxis
                        data={yAxisData}
                        contentInset={{ top: 10, bottom: 10 }}
                        svg={{ fontSize: 10, fill: 'grey' }}
                        numberOfTicks={yAxisData.length}
                        formatLabel={(value) => `${Math.round(value)}Cal`}
                        style={{ marginRight: 10 }}
                    />
                    <View style={styles.barChartContainer}>
                        <StackedBarChart
                            style={{ flex: 1 }}
                            data={data}
                            keys={keys}
                            colors={colors}
                            contentInset={contentInset}
                            gridMin={0}
                            gridMax={roundedGridMax}
                        // spacingOuter={0.5} 
                        >
                            <Grid direction={Grid.Direction.HORIZONTAL} />
                        </StackedBarChart>
                        <View style={styles.xAxis}>
                            {data.map((item, index) => (
                                <Text key={index} style={styles.xAxisLabel}>
                                    {item.label}
                                </Text>
                            ))}
                        </View>
                    </View>
                </View>
                <View style={styles.legend}>
                    <View style={styles.legendItem}>
                        <View style={[styles.legendColor, { backgroundColor: Colors.gray[200] }]} />
                        <Text style={styles.legendText}>Mục tiêu</Text>
                    </View>
                    <View style={styles.legendItem}>
                        <View style={[styles.legendColor, { backgroundColor: '#ffd700' }]} />
                        <Text style={styles.legendText}>Vượt quá</Text>
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
        marginTop: 20,
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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 20,
    },
    arrowLeft: {
        fontSize: 20,
    },
    dateRange: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    arrowRight: {
        fontSize: 20,
    },
    chartWrapper: {
        backgroundColor: Colors.light,
        padding: 16,
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    },
    chartContainer: {
        height: 200,
        flexDirection: 'row',
        backgroundColor: Colors.light,
    },
    barChartContainer: {
        flex: 1,
        marginLeft: 10,
    },
    xAxis: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    xAxisLabel: {
        fontSize: FontSizes['2xs'],
        color: 'grey',
        textAlign: 'center',
        marginBottom: -10,
    },
    legend: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 20,
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
    },
    legendColor: {
        width: 20,
        height: 5,
        marginRight: 5,
    },
    legendText: {
        fontSize: 14,
    },
});

export default CalorieIntakeChart;