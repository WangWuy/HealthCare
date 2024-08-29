import { HStack, Icon, Input } from '@gluestack-ui/themed-native-base';
import React, { useCallback, useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import { Colors } from '../../../assets/colors/Colors';
import IconClear from '../../../assets/icons/ic-close.svg';
import IconSearch from '../../../assets/icons/ic-search-grey.svg';
import IconAdd from '../../../assets/icons/ic-add.svg';

import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import { IconsSize } from '../../../assets/dimens/IconsSize';
import { useNavigation } from '@react-navigation/native';
import { MODULE } from '../../../constants/ModuleConstants';

interface SearchCustomerProps {
    defaultValue: string;
    onChange: (value: string) => void;
}
const screenWidth = Dimensions.get('window').width;

const SearchFood = ({
    defaultValue,
    onChange
}: SearchCustomerProps) => {
    const [text, setText] = useState(defaultValue);

    const debounce = (func: Function, delay: number) => {
        let timeoutId: ReturnType<typeof setTimeout>;
        return (...args: any[]) => {
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func(...args);
            }, delay);
        };
    };

    const debouncedOnChange = useCallback(debounce(onChange, 500), [onChange]);
    const navigation = useNavigation();

    useEffect(() => {
        debouncedOnChange(text);
    }, [text, debouncedOnChange]);

    const handleTextChange = (text: string) => {
        setText(text);
    };

    const handleClearText = () => {
        setText('');
    };

    function handleNavigate(tab: string) {
        switch (tab) {
          case 'addFoodScreen':
            navigation.navigate(MODULE.ADD_NEW_FOOD_SCREEN as never);
            break;
          default:
            break;
        }
    }

    return (
        <GestureHandlerRootView style={{ margin: 8 }}>
            <HStack justifyContent="center">
                <Input placeholder="Tìm kiếm" variant="filled" style={styles.input} px="2"
                    value={text}
                    onChangeText={handleTextChange}
                    InputLeftElement={<View style={styles.iconLeftContainer}><IconSearch style={styles.iconLeft} /></View>}
                    InputRightElement={
                        text && (
                            <TouchableOpacity style={styles.clearButton} onPress={handleClearText}>
                                <IconClear />
                            </TouchableOpacity>
                        )}
                />
                <TouchableOpacity style={styles.moreMenuButton} onPress={ () => handleNavigate('addFoodScreen')}>
                    <IconAdd />
                </TouchableOpacity>
            </HStack>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        borderRadius: 26,
        paddingHorizontal: 10,
    },
    iconLeftContainer: {
        backgroundColor: Colors.gray[200],
        height: 45,
        justifyContent: 'center',
        padding: 8,
    },
    input: {
        borderStartColor: 'transparent',
        flex: 1,
        fontSize: 14,
        backgroundColor: Colors.gray[200],
        borderRadius: 26,
        marginRight: 8,
    },
    clearButton: {
        backgroundColor: Colors.gray[200],
        width: IconsSize.md,
        height: IconsSize.md,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        paddingRight: 16,
    },
    moreMenuButton: {
        width: IconsSize.md,
        height: IconsSize.md,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 8,
    },
    iconLeft: {
        color: Colors.gray[900],
        backgroundColor: Colors.gray[200],
    },
});

export default SearchFood;