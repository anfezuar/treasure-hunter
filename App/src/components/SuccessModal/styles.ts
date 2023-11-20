import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(249, 203, 144, 0.4)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#643D0B',
  },
  map: {
    width: '100%',
    height: '75%',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#E78D19',
    height: 50,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#BD6D06',
  },
  buttonText: {
    color: '#643D0B',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bgImage: {
    height: '100%',
    width: '100%',
  },
  textStatus: {
    color: '#643D0B',
    fontSize: 25,
    fontWeight: 'bold',
  },
  bodyModal: {
    width: '70%',
    height: '50%',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9CB90',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  modalStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(249, 203, 144, 0.4)',
  },
  backgroundClue: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});
