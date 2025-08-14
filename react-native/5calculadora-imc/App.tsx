import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ImcForm from './components/ImcForm';
import IMCEvaluador from './components/IMCEvaluador';

export default function App() {
  return (
      // <ImcForm />
      <IMCEvaluador />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
