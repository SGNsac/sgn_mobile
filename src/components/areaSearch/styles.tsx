import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  areaInput: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    display: 'flex',
    flexDirection: 'row',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    borderWidth: 2,
    height: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderColor: '#3470A4'
  },
  icon: {
    padding: 10,
    backgroundColor: '#3470A4',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 2,
    borderColor: '#3470A4'
  }
})

export default styles
