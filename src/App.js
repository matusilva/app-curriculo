import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import foto from '../assets/foto.png';
import Card from './components/Card';

export default function App() {

  function handleSocialMedia(social_media) {
    switch (social_media) {
      case 'linkedin':
        Alert.alert('Linkedin', 'https://linkedin.com/in/matusilva')
        break
      case 'github':
        Alert.alert('Github', 'https://github.com/matusilva')
        break
    }
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={foto} style={styles.photo} />
          <Text style={styles.name}>MATHEUS VINÍCIUS DA SILVA</Text>
          <Text style={styles.description}>Desenvolvedor BACK-END</Text>
          <View style={styles.social_medias}>
            <TouchableOpacity onPress={() => handleSocialMedia('github')}>
              <Ionicons name="logo-github" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSocialMedia('linkedin')}>
              <Ionicons name="logo-linkedin" size={30} />
            </TouchableOpacity>
          </View>
        </View>

        <Card title="Formação Acadêmica">
          <Text style={styles.card_content_text}>IFRN - NATAL CENTRAL</Text>
        </Card>
        <Card title="Experiência Profissional">
          <Text style={styles.card_content_text}>RITS TECNOLOGIA</Text>
          <Text style={styles.card_content_text}>CONTROL</Text>
          <Text style={styles.card_content_text}>PROCESSO ÁGIL</Text>
        </Card>

        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7e7e7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  photo: {
    width: 250,
    height: 250,
    borderRadius: 125
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10
  },
  description: {
    color: '#939393',
    marginBottom: 10
  },
  social_medias: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10
  }
});
