
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4,'Minimum length should be 4 characters')
  .max(16,'Maximum length should 16 characters')
  .required('Please fill out this field')
})


const App = () => {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})