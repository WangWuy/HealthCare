import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import BaseContainer from '../../../../components/BaseContainer';
import { Colors } from '../../../../assets/colors/Colors';
import { FontSizes } from '../../../../assets/dimens/FontsSize';

import IconCaretDown from '../../../../assets/icons/ic-caret-down.svg';
import IconApple from '../../../../assets/icons/ic-apple.svg';

import FoodItem from '../../components/FoodItem';
import SearchFood from '../../components/SearchFood';
import FoodItemResponse from '../../../../types/FoodItemData';
import { getFoodsDataApi } from '../../api/FoodApi';
import { BaseResponse, isSuccess } from '../../../../api/BaseResponse';
import { showToast } from '../../../../utils/ToastUtils';
import { loadingState } from '../../../../states/States';
import { useSetRecoilState } from 'recoil';
import { TYPE_FOOD } from '../../../../constants/Constants';
import CustomDropdown from '../../../../components/CustomDropdown';

interface SelectedData {
    label: string;
    value: string;
}

const FoodScreen = () => {
    const setLoadingState = useSetRecoilState(loadingState);
    const [keySearch, setKeySearch] = useState('');
    const [activeTab, setActiveTab] = useState('all');
    const [dataFood, setDataFood] = useState<FoodItemResponse[]>([]);
    const [valueOne, setValueOne] = useState(null);
    const [valueTwo, setValueTwo] = useState(null);
    const [selectedData, setSelectedData] = useState<SelectedData>({ label: 'Bữa sáng', value: '1' });

    useEffect(() => {
        handleGetFoodsApi();
    }, []);

    const handleKeySearchChange = (newValue: string) => {
        setKeySearch(newValue.trim());
    };

    const dropdownOneData = [
        { label: 'Bữa sáng', value: '1' },
        { label: 'Bữa trưa', value: '2' },
        { label: 'Bữa tối', value: '3' },
    ];

    const dropdownTwoData = [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Cherry', value: 'cherry' },
    ];

    const handleSelectOne = (item: any) => {
        setSelectedData(item);
        console.log('Selected from dropdown one:', item);
    };

    const handleSelectTwo = (item: any) => {
        setValueTwo(item.value);
        console.log('Selected from dropdown two:', item);
    };

    const renderHeader = () => (
        <View style={styles.headerRightContent}>
            <CustomDropdown
                data={dropdownOneData}
                onChange={handleSelectOne}
                IconComponent={IconCaretDown as any}
                value={selectedData.value}
            />
            <CustomDropdown
                data={dropdownTwoData}
                onChange={handleSelectTwo}
                IconComponent={IconApple as any}
                value={selectedData.value}
            />
        </View>
    );

    const handleGetFoodsApi = () => {
        getFoodsDataApi()
            .then((res: BaseResponse<any>) => {
                if (isSuccess(res)) {
                    setDataFood(prevData => [...prevData, ...res.data]);
                }
            })
            .catch(error => {
                setLoadingState(false);
                console.log(error);
                showToast('Đã có lỗi xảy ra, vui lòng thử lại sau');
            });
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'all':
                return <FoodList items={dataFood.filter(item => item.food_type === TYPE_FOOD.ADMIN_FOOD)} />;
            case 'myFoods':
                return <FoodList items={dataFood.filter(item => item.food_type === TYPE_FOOD.USER_FOOD)} />;
            default:
                return null;
        }
    };

    const FoodList: React.FC<{ items: FoodItemResponse[] }> = ({ items }) => {
        return (
            <FlatList
                data={items}
                renderItem={({ item }) => (
                    <FoodItem
                        item={item}
                    />
                )}
                keyExtractor={item => item.id.toString()}
            />
        );
    }

    return (
        <BaseContainer
            isShowHeader={true}
            headerTittle={selectedData.label}
            isShowLeftIcon={true}
            headerTittleStyle={styles.headerStyle}
            headerTittleTextStyle={styles.headerTitleText}
            titleContainerStyle={styles.titleContainer}
            renderRightContent={renderHeader()}
            backgroundColorStatus={Colors.green[600]}
        >
            <SearchFood
                defaultValue={keySearch}
                onChange={handleKeySearchChange}
            />

            <View style={styles.container}>
                <View style={styles.tabContainer}>
                    <TouchableOpacity
                        style={[styles.tab, activeTab === 'all' && styles.activeTab]}
                        onPress={() => setActiveTab('all')}
                    >
                        <Text style={[styles.tabText, activeTab === 'all' && styles.activeTabText]}>Tất cả</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tab, activeTab === 'myFoods' && styles.activeTab]}
                        onPress={() => setActiveTab('myFoods')}
                    >
                        <Text style={[styles.tabText, activeTab === 'myFoods' && styles.activeTabText]}>Thực phẩm của tôi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tab, activeTab === 'myMeals' && styles.activeTab]}
                        onPress={() => setActiveTab('myMeals')}
                    >
                        <Text style={[styles.tabText, activeTab === 'myMeals' && styles.activeTabText]}>Bữa ăn của tôi</Text>
                    </TouchableOpacity>
                </View>
                {renderContent()}
            </View>
        </BaseContainer>
    );
}

const styles = StyleSheet.create({
    // Custom Header
    headerStyle: {
        backgroundColor: Colors.green[400],
        flexDirection: 'row',
        display: 'flex',
        height: 60,
    },
    headerTitleText: {
        color: Colors.light,
        fontSize: FontSizes.lg,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    headerRightContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        marginHorizontal: 10,
    },
    titleContainer: {
        minWidth: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    dropdownContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    dropdown: {
        height: 50,
        width: 150,
        backgroundColor: '#efefef',
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    placeholderStyle: {
        fontSize: 16,
        color: '#a9a9a9',
    },
    selectedTextStyle: {
        fontSize: 16,
    },

    // Custom TabBar
    container: {
        flex: 1,
        backgroundColor: Colors.light,
    },
    tabContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray[400],
        backgroundColor: Colors.light,
    },
    tab: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
    },
    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: '#007AFF',
    },
    tabText: {
        color: Colors.gray[900],
        fontWeight: 'bold',
    },
    activeTabText: {
        color: '#007AFF',
    },
    card: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
});
export default FoodScreen;