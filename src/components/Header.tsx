import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
interface IHeaderProps {
  title: string;
  showCancel?: boolean;
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f9fafc',
    borderBottomWidth: 1,
    borderColor: '#dde3f0',
    paddingTop: 44,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Nunito_600SemiBold',
    color: '#8fa7b3',
    fontSize: 16,
  },
});

const Header: React.FC<IHeaderProps> = ({ title, showCancel = true }) => {
  const { goBack, navigate } = useNavigation();

  const handleGoBackToAppHomePage = () => {
    navigate('OrphanagesMap');
  };

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={goBack}>
        <Feather name='arrow-left' size={24} color='#15b6d6' />
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>

      {
        showCancel ? (
          <BorderlessButton onPress={handleGoBackToAppHomePage}>
            <Feather name='x' size={24} color='#ff669d' />
          </BorderlessButton>
        ) : (<View />)
      }
    </View>
  );
};

export default Header;
