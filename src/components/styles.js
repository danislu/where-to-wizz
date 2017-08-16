import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    textAlign: 'center',
    backgroundColor: 'white'
  },
  line: {
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: 'white',
    paddingVertical: 0,
    marginBottom: 5
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    //justifyContent: 'flex-start',
  },
  dialog: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modal: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'flex-end'
  },
  button: {
    borderRadius: 5,
    padding: 10
  },
  close: {
    backgroundColor: 'white',
    borderRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCloseButtonText: {
    fontSize: 25
  },
  modalContainer: {
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 5
        // backgroundColor: 'white',
  },
  buttonRow: {
    margin: 0,
    backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  text: {
    color: '#fff'
  },
  mapContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 64
  }
});

export default styles;
