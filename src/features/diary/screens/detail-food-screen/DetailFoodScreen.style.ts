import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollView: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    backButton: {
        fontSize: 24,
    },
    bookmarkButton: {
        fontSize: 24,
    },
    moreButton: {
        fontSize: 24,
    },
    foodInfo: {
        alignItems: 'center',
        marginVertical: 20,
    },
    foodImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    foodName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
    },
    nutritionSummary: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    nutritionItem: {
        alignItems: 'center',
    },
    nutritionValue: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    nutritionLabel: {
        fontSize: 14,
    },
    servingInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f0f0f0',
        padding: 10,
        marginHorizontal: 10,
        borderRadius: 5,
    },
    servingText: {
        fontSize: 16,
    },
    mealType: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        marginHorizontal: 10,
        marginTop: 10,
        borderRadius: 5,
    },
    nutritionDetails: {
        marginHorizontal: 10,
        marginTop: 20,
    },
    nutritionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    dailyValueNote: {
        fontSize: 12,
        color: '#888',
        marginBottom: 10,
    },
    nutritionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingVertical: 10,
    },
    proLabel: {
        color: '#4a90e2',
        fontWeight: 'bold',
    },
    footnote: {
        fontSize: 12,
        color: '#888',
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 80,
    },
    button: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: '#4a90e2',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});