import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {useTheme, makeStyles, Button, Overlay, Input} from '@rneui/themed';
import Icon from 'react-native-vector-icons/AntDesign';

const AddTask = () => {
  const styles = useStyles();
  const {theme} = useTheme();
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [newTaskName, setNewTaskName] = useState('');
  return (
    <>
      <Overlay
        isVisible={overlayVisible}
        overlayStyle={{width: '90%'}}
        onBackdropPress={() => setOverlayVisible(false)}>
        <>
          <Input
            placeholder="New Task Name"
            onChangeText={text => setNewTaskName(text)}
            autoFocus={true}
          />
          <Button
            title="Create"
            onPress={() => {
              setOverlayVisible(false);
              // createTask(newTaskName);
            }}
          />
        </>
      </Overlay>
      <TouchableOpacity
        onPress={() => {
          setOverlayVisible(true);
        }}
        style={styles.container}>
        <Icon
          name="plus"
          style={styles.icon}
          size={30}
          color={theme.colors.white}
        />
      </TouchableOpacity>
    </>
  );
};
const useStyles = makeStyles(theme => ({
  container: {
    position: 'absolute',
    bottom: 0, // space from bottombar
    height: 68,
    width: 68,
    borderRadius: 68,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
  },
  icon: {height: 30, width: 30},
}));
export default AddTask;
