import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  content: {
    width: '90%',
    height: '100%',
    borderRadius: 20,
    backgroundColor: 'rgba(249, 203, 144, 0.6)',
    padding: 16,
    alignSelf: 'center',
    gap: 10,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 20,
  },
  textStyle: {
    fontSize: 18,
  },
  subtitle: {
    fontSize: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: '#E78D19',
    height: 40,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#BD6D06',
  },
  inputStyle: {
    backgroundColor: 'white',
    height: 40,
    width: '40%',
    textAlign: 'center',
    borderRadius: 10,
    margin: 10,
    fontSize: 18,
  },
});
