import {StyleSheet} from 'react-native';

const REACT_COLOR = '#8BB7F0';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    flex: 1,
  },
  buttonLogin: {
    justifyContent: 'center',
    backgroundColor: REACT_COLOR,
    flexDirection: 'row',
    paddingVertical: 20,
    borderRadius: 50,
    marginVertical: 30,
  },
  textButton: {
    color: '#fff',
    fontSize: 20,
  },
  singupContainer: {
    flexDirection: 'row',
  },
  singupText: {
    marginLeft: 5,
    color: REACT_COLOR,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});
