import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import IconCaretDown from '../../../../assets/icons/ic-caret-down.svg';
import { IconsSize } from '../assets/dimens/IconsSize';

const CustomDropdown = ({ data, onChange, IconComponent, value }: { data: any[], onChange: (item: any) =>
     void, IconComponent: React.ComponentType<{ width: number, height: number }>, value: any }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        if (isOpen) {
            (dropdownRef.current as any)?.close();
            setIsOpen(!isOpen);
        } else {
            (dropdownRef.current as any)?.open();
            setIsOpen(isOpen);
        }
    };

    const handleChange = (item: any) => {
        onChange(item);
        setIsOpen(false);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleDropdown} style={styles.button}>
                <IconComponent width={IconsSize.md} height={IconsSize.md} />
            </TouchableOpacity>
            <Dropdown
                ref={dropdownRef}
                style={[styles.dropdown, { height: 0, borderWidth: 0 }]}
                containerStyle={styles.dropdownContainer}
                data={data}
                labelField="label"
                valueField="value"
                value={value}
                onChange={handleChange}
                renderRightIcon={() => null}
                renderItem={(item) => (
                    <View style={styles.item}>
                        <Text>{item.label}</Text>
                    </View>
                )}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        padding: 10,
    },
    dropdown: {
        position: 'absolute',
        backgroundColor: 'transparent',
    },
    dropdownContainer: {
        backgroundColor: 'white',
        borderRadius: 8,
        marginTop: 8,
        width: 150,
        overflow: 'hidden',
    },
    item: {
        padding: 10,
    },
});

export default CustomDropdown;