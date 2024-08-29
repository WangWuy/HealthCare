import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BaseContainer from '../../../../components/BaseContainer';
import { Colors } from '../../../../assets/colors/Colors';
import { FontSizes } from '../../../../assets/dimens/FontsSize';
import { IconsSize } from '../../../../assets/dimens/IconsSize';

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

const FoodScreen = () => {
    const setLoadingState = useSetRecoilState(loadingState);
    const [keySearch, setKeySearch] = useState('');
    const [activeTab, setActiveTab] = useState('all');
    const [dataFood, setDataFood] = useState<FoodItemResponse[]>([]);

    useEffect(() => {
        handleGetFoodsApi();
    }, []);

    const handleKeySearchChange = (newValue: string) => {
        setKeySearch(newValue.trim());
    };

    const renderHeader = () => (
        <View style={styles.headerRightContent}>
            <TouchableOpacity onPress={() => { }}>
                <IconCaretDown width={IconsSize.md} height={IconsSize.md} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }}>
                <IconApple width={IconsSize.md} height={IconsSize.md} />
            </TouchableOpacity>
        </View>
    );

    const renderContent = () => {
        switch (activeTab) {
            case 'all':
                return <FoodList items={dataFood} />;
            case 'myFoods':
                return <FoodList items={dataFood} />;
            case 'myMeals':
                return <FoodList items={dataFood} />;
            default:
                return null;
        }
    };

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

    const FoodList: React.FC<{ items: FoodItemResponse[] }> = ({ items }) => (
        <FlatList
            data={items}
            renderItem={({ item }) => <FoodItem item={item} />}
            keyExtractor={item => item.id.toString()}
        />
    );

    return (
        <BaseContainer
            isShowHeader={true}
            headerTittle="Bữa sáng"
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