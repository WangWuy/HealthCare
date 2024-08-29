import { MODULE } from '../../../constants/ModuleConstants';
import styles from '../../profile/screens/ProfileScreen.style';
import { View, Text, Image, TouchableOpacity } from 'react-native';

interface MenuItemProps {
    icon: React.ReactNode;
    title: string;
    handleNavigate: (tab: string) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, title, handleNavigate }) => (
    <TouchableOpacity 
    style={styles.menuItem}
    onPress={() => {handleNavigate(title)}}
    >
      <View style={styles.menuItemContent}>
        {icon}
        <Text style={styles.menuItemText}>{title}</Text>
      </View>
      {/* <ChevronRight color="#2c3e50" size={24} /> */}
    </TouchableOpacity>
);

export default MenuItem;