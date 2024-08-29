import { StyleSheet } from "react-native";
import { Colors } from "../../../assets/colors/Colors";
import { Spacings } from "../../../assets/dimens/Spacing";
import { FontSizes } from "../../../assets/dimens/FontsSize";
import { IconsSize } from "../../../assets/dimens/IconsSize";

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: Colors.light,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: Spacings.md,
        height: 60,
    },
    headerTitleText: {
        color: Colors.gray[900],
        fontSize: FontSizes.lg,
        fontWeight: 'bold',
        marginRight: 20,
    },
    iconStyle: {
        width: IconsSize.md,
        height: IconsSize.md,
    },

    accountInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 16,
        marginBottom: 16,
    },
    accountText: {
        fontSize: 16,
        marginRight: 8,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.light,
        padding: 16,
        marginBottom: 16,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 16,
    },
    userTextInfo: {
        flex: 1,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    userEmail: {
        fontSize: 14,
        color: '#666',
    },
    upgradeCard: {
        backgroundColor: '#e6f3f5',
        padding: 16,
        borderRadius: 8,
        marginHorizontal: 16,
    },
    upgradeTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    upgradeDescription: {
        fontSize: 14,
        color: '#666',
        marginBottom: 12,
    },
    upgradeButton: {
        backgroundColor: '#2c3e50',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    upgradeButtonText: {
        color: Colors.light,
        fontSize: 16,
        fontWeight: 'bold',
    },

    menuItems: {
        backgroundColor: Colors.gray[100],
        borderRadius: 8,
        marginHorizontal: 16,
        marginTop: 16,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 16,
    },
    menuItemContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuItemText: {
        fontSize: 16,
        marginLeft: 16,
    },
    logoutButton: {
        backgroundColor: Colors.blue[800],
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
        marginHorizontal: 16,
        marginVertical: 16,
        alignItems: 'center',
    },
    logoutButtonText: {
        color: Colors.light,
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default styles;