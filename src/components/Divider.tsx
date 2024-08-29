import { StyleSheet, View, ViewStyle } from "react-native";

interface DividerProps {
    size?: number;
    style?: ViewStyle;
    [key: string]: any;
}

const Divider: React.FC<DividerProps> = ({ size = 8, style, ...props }) => {
    return (
        <View
            style={[
                styles.divider,
                { minHeight: size },
                style,
            ]}
            {...props}
        />
    );
};

const styles = StyleSheet.create({
    divider: {
        backgroundColor: '#F5F6FA',
    },
});


export default Divider;