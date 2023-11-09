import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import { styles } from '../styles';
import Header from './Header';
import Footer from './Footer';
import * as DocumentPicker from 'expo-document-picker';
// import Video from 'react-native-video';
// import PDFReader from 'react-native-pdf';

export default function Addpost({navigation}) {
  const [text, setText] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleTextChange = (text) => {
    setText(text);
  }

  const selectDoc = async () => {
    try{
      const doc = await DocumentPicker.getDocumentAsync();
      file = doc.assets[0]      
      console.log(file);   
      console.log(file.mimeType); 
      setSelectedFile(file);  
      console.log(selectedFile);
    }
    catch(error){
        console.log(error);
    }
  }
  const clearSelectedFile = () => {
    setSelectedFile(null);
  }
 

    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.homecontent}>
          <View style={styles.post}>
            <TouchableOpacity
            style={styles.editAddress}
            onPress={() => {
              navigation.navigate('Addpost');                
            }}          
          >
            <Text style={styles.buttonText}>Post</Text>
          </TouchableOpacity>
          <TextInput
            multiline
            numberOfLines={5}
            style={{height:250, width: '90%', borderWidth:1, marginTop: 10, borderRadius: 10}}
            value={text}
            onChangeText={handleTextChange}
          />
          <TouchableOpacity
            style={styles.editAddress}
            onPress={selectDoc}          
          >
            <Text style={styles.buttonText}>UploadFile</Text>
          </TouchableOpacity>
          {selectedFile && (
            <View>
              <Text>{selectedFile.name}</Text>
              <Image
                  source={{ uri: selectedFile.uri }}
                  style={{ width: 200, height: 150 }}
                  resizeMode="contain"
                  controls
                />
              
              
              {/* {selectedFile.mimeType === 'image/jpeg' && (
                <Image
                  source={{ uri: selectedFile.uri }}
                  style={{ width: 200, height: 150 }}
                  resizeMode="contain"
                  controls
                />
              )} */}
              {/* {selectedFile.mimeType === 'video/mp4' && (
                <Video
                  source={{ uri: selectedFile.uri }}
                  style={{ width: 200, height: 150 }}
                />
              )} */}
              {/* {selectedFile.mimeType === 'application/pdf' && (
                <PDFReader
                  source={{ uri: selectedFile.uri }}
                  onLoad={() => console.log(`PDF loaded from ${selectedFile.uri}`)}
                />
              )} */}
              <TouchableOpacity onPress={clearSelectedFile}>
                <Text>Delete selected file</Text>
              </TouchableOpacity>
            </View>
          )}
          


          </View>
        
         
        </View>
        <Footer navigation={navigation}/>
      </View>
    );
  }  

