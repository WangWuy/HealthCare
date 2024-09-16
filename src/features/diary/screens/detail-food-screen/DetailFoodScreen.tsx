import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import BaseContainer from '../../../../components/BaseContainer';
import { styles } from './DetailFoodScreen.style';
import { Colors } from '../../../../assets/colors/Colors';
import { RouteProp, useRoute } from '@react-navigation/native';
import FoodItemData from '../../../../types/FoodItemData';

const DetailFoodScreen = ({ route }: { route: any }) => {
    const { foodItem } = route.params;

    return (
        <BaseContainer
            isShowHeader={true}
            headerTittle={""}
            isShowLeftIcon={true}
            backgroundColorStatus={Colors.green[600]}
        >
            <ScrollView style={styles.scrollView}>

                <View style={styles.foodInfo}>
                    <Image
                        source={{ uri: foodItem.avatar }}
                        style={styles.foodImage}
                    />
                    <Text style={styles.foodName}>{foodItem.name}</Text>
                </View>

                <View style={styles.nutritionSummary}>
                    <View style={styles.nutritionItem}>
                        <Text style={styles.nutritionValue}>{foodItem.calories}</Text>
                        <Text style={styles.nutritionLabel}>Calories</Text>
                    </View>
                    <View style={styles.nutritionItem}>
                        <Text style={styles.nutritionValue}>{foodItem.carbs}</Text>
                        <Text style={styles.nutritionLabel}>Carbs (g)</Text>
                    </View>
                    <View style={styles.nutritionItem}>
                        <Text style={styles.nutritionValue}>{foodItem.protein}</Text>
                        <Text style={styles.nutritionLabel}>Protein (g)</Text>
                    </View>
                    <View style={styles.nutritionItem}>
                        <Text style={styles.nutritionValue}>{foodItem.fat}</Text>
                        <Text style={styles.nutritionLabel}>Fat (g)</Text>
                    </View>
                </View>

                <View style={styles.servingInfo}>
                    <Text style={styles.servingText}>1</Text>
                    <Text style={styles.servingText}>Bát lưng, 160g</Text>
                </View>

                <Text style={styles.mealType}>Ăn nhẹ sau bữa sáng</Text>

                <View style={styles.nutritionDetails}>
                    <Text style={styles.nutritionHeader}>Thông tin dinh dưỡng</Text>
                    <Text style={styles.dailyValueNote}>% Daily value*</Text>
                    <View style={styles.nutritionRow}>
                        <Text>Calories</Text>
                        <Text>208 Calo 10.4%</Text>
                    </View>
                    <View style={styles.nutritionRow}>
                        <Text>Protein/Chất đạm</Text>
                        <Text>4.3 g 8.6%</Text>
                    </View>
                    <View style={styles.nutritionRow}>
                        <Text>Lipid/Chất béo</Text>
                        <Text>0.4 g 0.7%</Text>
                    </View>
                    <View style={styles.nutritionRow}>
                        <Text>Total Carbohydrate/Tổng Carb</Text>
                        <Text>44.8 g 13.8%</Text>
                    </View>
                    {['Calcium/Can-xi', 'Potassium/Ka-li', 'Sodium/Na-tri', 'Zinc/Kẽm'].map((item, index) => (
                        <View key={index} style={styles.nutritionRow}>
                            <Text>{item}</Text>
                            <Text style={styles.proLabel}>PRO</Text>
                        </View>
                    ))}
                </View>

                <Text style={styles.footnote}>
                    * Giá trị phần trăm hàng ngày dựa trên chế độ ăn 2000 calories.
                </Text>
            </ScrollView>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Ghi vào nhật ký</Text>
            </TouchableOpacity>
        </BaseContainer>
    );
}

export default DetailFoodScreen;