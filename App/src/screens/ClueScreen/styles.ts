import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '80%',
    height: '60%',
    borderRadius: 20,
    backgroundColor: 'rgba(249, 203, 144, 0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  bgImage: {
    height: '100%',
    width: '100%',
  },
  textStyle: {
    fontSize: 20,
    color: '#643D0B',
  },
  titleStyle: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#643D0B',
  },
  buttonStyle: {
    marginTop: 20,
    backgroundColor: '#E78D19',
    height: 50,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#BD6D06',
  },
});
