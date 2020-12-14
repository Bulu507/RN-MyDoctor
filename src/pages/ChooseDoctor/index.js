import {Header, List} from '../../components';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {Fire} from '../../config';
import {colors} from '../../utils';

export default function ChooseDoctor({navigation, route}) {
  const itemCategory = route.params;
  const [listDoctor, setListDoctor] = useState([]);

  useEffect(() => {
    getDoctorByCategory(itemCategory.category);
  }, [itemCategory.category]);

  const getDoctorByCategory = (category) => {
    Fire.database()
      .ref('doctors/')
      .orderByChild('category')
      .equalTo(category)
      .once('value')
      .then((res) => {
        const oldData = res.val();
        const data = [];
        Object.keys(oldData).map((item) => {
          data.push({
            id: item,
            data: oldData[item],
          });
        });
        setListDoctor(data);
      });
  };

  return (
    <View style={styles.page}>
      <Header
        title={`Pilih ${itemCategory.category}`}
        type="dark"
        onPress={() => navigation.goBack()}
      />
      {listDoctor.map((item) => {
        return (
          <List
            type="next"
            key={item.id}
            profile={{uri: item.data.photo}}
            name={item.data.fullName}
            desc={item.data.gender}
            onPress={() => navigation.navigate('DoctorProfile', item)}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
});
