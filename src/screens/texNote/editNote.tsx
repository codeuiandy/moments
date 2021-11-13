import React, {FC, useEffect, useRef, useContext} from 'react';
import {
  View,
  Text,
  TextInput as Input,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
//@ts-ignore
import style from './style';
import {palette} from '../../components/theme/palette';
import {HDP} from '@helpers';
import {SvgIcon, FloatBtn, TextInput, SizedBox} from '@components';
import {ColorPicker} from './colorPicker';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppContext} from '../../../src/contexts/AppContext';
import Modal from 'react-native-modal';
export const TextNoteEdit: FC = props => {
  const noteBodyRef = useRef(null);
  const [showColorPicker, setshowColorPicker] = useState(false);
  const [note, setNote] = useState({
    noteTitle: '',
    noteBody: '',
    textColor: 'white',
    backgroundColor: 'white',
    time: new Date().getTime(),
    id:Math.random() 
  });

  const [previousNote, setPreviousNote] = useState([]);
  const [isModalVisible, setModalVisible] = useState(true);
  const {saveNote,setSaveNote} = useContext(AppContext);
  useEffect(() => {
    
      
    getPreviousNotes();
    const willBlurSubscription = props.navigation.addListener('blur', () => {
      console.log('Closed Page');
      setNote({
        noteTitle: '',
        noteBody: '',
        textColor: 'white',
        backgroundColor: 'white',
        time: new Date().getTime(),
      });
      setPreviousNote([]);
    });

    return willBlurSubscription;
  }, []);

  useEffect(() => {
    getPreviousNotes();
    const willFocusSubscription = props.navigation.addListener('focus', () => {
      getPreviousNotes();
      getEditNotes()
      setSaveNote(false)
    });
    return willFocusSubscription;
  }, []);



  useEffect(() => {
    const willFocusSubscriptiond = props.navigation.addListener('blur', () => {
      setPreviousNote([])
    //   setShow(false)
      props.navigation.params= null
      console.log(">>>>>>>EEEEss");
      setSaveNote(false)
  });
  
  
  
  return willFocusSubscriptiond;
  }, []);


  const getPreviousNotes = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@text_note');
      if (jsonValue != null) {
        console.log(jsonValue);
        let jsNote = JSON.parse(jsonValue);
        console.log(jsNote);
        setPreviousNote(jsNote);
      }
    } catch (e) {
    //   console.log('>>>>>>>EEEEss');
    }
  };


  const getEditNotes = async () => {
    try {
       
      const jsonValue = await AsyncStorage.getItem('@edit_note');
      if (jsonValue != null) {
        console.log(jsonValue);
        let jsNote = JSON.parse(jsonValue);

        console.log("jsNotedddd jsNotejsNote>>>>>>>>",jsNote);
        
        setNote(jsNote);
      }
    } catch (e) {
    //   console.log('>>>>>>>EEEEss');
    }
  };

  useEffect(() => {
    if (saveNote == true) {
      saveNoteFun(note);
    }
  }, [saveNote]);

  const saveNoteFun = async value => {


    if (note.noteTitle == '') {
      return Alert.alert('Opps', 'Note title is required');
    }

    if (note.noteBody == '') {
      return Alert.alert('Opps', 'Note body is required');
    }
    const filterNotes = previousNote.filter((data)=>{
        return data.id != note.id
    })
    
    console.log("filterNotes>>",filterNotes);
    const noteAr = [note, ...filterNotes];
    console.log(noteAr);
    try {
      const jsonValue = JSON.stringify(noteAr);
      await AsyncStorage.setItem('@text_note', jsonValue);
      props.navigation.goBack();
    } catch (e) {
      // saving error
    }
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={style.noteContainer}>
          <View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View>
                <TextInput
                  onSubmit={() => noteBodyRef.current.focus()}
                  onChangeText={value => {
                    setNote({...note, noteTitle: value});
                    console.log(noteBodyRef);
                  }}
                  placeholder="Your title here"
                  label="Your title here"
                  returnKeyType="next"
                  value={note.noteTitle}
                />
                <SizedBox height={20} />
                <TextInput
                  refValue={noteBodyRef}
                  onChangeText={value => setNote({...note, noteBody: value})}
                  placeholder="The best is yet to come and its is my responsibility..."
                  label="Your note body"
                  multiline={true}
                  value={note.noteBody}
                />
              </View>
            </ScrollView>
          </View>
          <View style={style.noteBottomActions}>
            <View style={style.noteBottomActionsChild}>
              <SvgIcon
                name="ColorPicker"
                width={23}
                height={23}
                onPress={() => setshowColorPicker(!showColorPicker)}
              />
            </View>

            <View style={style.noteBottomActionsChild}>
              <SvgIcon name="undo" width={23} height={23} />
              <SizedBox width={30} />
              <SvgIcon name="redo" width={23} height={23} />
            </View>
            <TouchableOpacity>
              <View style={style.noteBottomActionsChild}>
                <SvgIcon name="verticalDots" width={23} height={18} />
              </View>
            </TouchableOpacity>
          </View>
          {showColorPicker ? (
            <ColorPicker setNote={setNote} note={note} />
          ) : null}
        </View>
      </TouchableWithoutFeedback>
      {/* {isModalVisible ? (
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={() => setModalVisible(false)}>
          <View style={{flex: 1, backgroundColor: 'red'}}>
            <Text>Hello!</Text>

            <Button title="Hide modal" onPress={toggleModal} />
          </View>
        </Modal>
      ) : null} */}
    </View>
  );
};
