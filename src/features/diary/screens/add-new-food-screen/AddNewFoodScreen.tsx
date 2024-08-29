import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import BaseContainer from '../../../../components/BaseContainer';

import Icon from '../../../../assets/icons/ic-diary-green.svg'
import { IconsSize } from '../../../../assets/dimens/IconsSize';
import { Colors } from '../../../../assets/colors/Colors';
import { FontSizes } from '../../../../assets/dimens/FontsSize';
import { useNavigation } from '@react-navigation/native';
import { MODULE } from '../../../../constants/ModuleConstants';

interface OptionProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    handleNavigate: (tab: string) => void;
}

const Option: React.FC<OptionProps> = ({ icon, title, description, handleNavigate }) => (
    <TouchableOpacity
        onPress={() => handleNavigate(title)}
        style={styles.optionContainer}
     >
        <View style={styles.iconContainer}>{icon}</View>
        <View style={styles.textContainer}>
            <Text style={styles.optionTitle}>{title}</Text>
            <Text style={styles.optionDescription}>{description}</Text>
        </View>
    </TouchableOpacity>
);

const AddNewFoodScreen: React.FC = () => {
    const navigation = useNavigation();

    function handleNavigate(tab: string) {
        switch (tab) {
            case 'Thực phẩm':
                navigation.navigate(MODULE.CREATE_FOOD_SCREEN as never);
                break;
            case 'Bữa ăn':
                navigation.navigate(MODULE.CREATE_MEAL_SCREEN as never);
                break;
            default:
                break;
        }
    }

    return (
        <BaseContainer
            headerTittle='Thêm mới'
            headerTittleStyle={styles.headerStyle}
            headerTittleTextStyle={styles.headerTitleText}
        >
            <View style={styles.container}>
                {/* <Option
                    icon={<Icon style={styles.icon} color="#4CAF50" />}
                    title="Ghi nhanh"
                    description="Ghi nhanh theo năng lượng thực phẩm"
                /> */}
                <Option
                    icon={<Icon style={styles.icon} color="#FF9800" />}
                    title="Thực phẩm"
                    description="Một nguyên liệu hoặc thực phẩm đóng gói sẵn"
                    handleNavigate={handleNavigate}
                />
                <Option
                    icon={<Icon style={styles.icon} color="#E91E63" />}
                    title="Bữa ăn"
                    description="Một bữa ăn với nhiều Thực phẩm"
                    handleNavigate={handleNavigate}
                />
            </View>
        </BaseContainer>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: Colors.light,
    },
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
    content: {
        padding: 16,
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: Colors.gray[300],
        borderRadius: 8,
        marginBottom: 16,
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
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.light,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    textContainer: {
        flex: 1,
    },
    optionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    optionDescription: {
        fontSize: 14,
        color: '#666',
    },
    icon: {
        width: IconsSize.md,
        height: IconsSize.md,
    }
});

export default AddNewFoodScreen;