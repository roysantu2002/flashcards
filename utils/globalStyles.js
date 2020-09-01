import { StyleSheet } from 'react-native';
import { bgDarkPink, textColor, textRed, white } from './colors';
import { openSansBold, openSansRegular} from './fonts';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FB005B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 30,
    marginTop: 29.1,
    fontWeight: '300',
  },
  addContainer: {
    flex: 1,
    marginTop: "40%",
    marginLeft: 16,
    marginRight: 16,
    flexDirection: 'column',
  },
  title: {
    marginTop: "15%",
    textAlign: "center",
    fontSize: 30,
    fontFamily: openSansBold,
    color: textColor,
  },
  cardCount: {
    fontSize: 15,
    textAlign: "center",
  },
  btnPrimary: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    height: 50,
    borderRadius: 10,
    backgroundColor: bgDarkPink
  },
  btnSecondary: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    height: 50,
    borderColor: bgDarkPink,
    borderWidth: 1,
    borderRadius: 10
  },
  btnPrimaryText: {
    color: white,
    fontSize: 14,
    fontFamily: openSansRegular,
    textTransform: 'uppercase'
  },
  btnSecondaryText: {
    color: bgDarkPink,
    fontSize: 14,
    fontFamily: openSansRegular,
    textTransform: 'uppercase'
  },
  textInput: {
    height: 50,
    borderColor: '#dedede',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 12,
    paddingRight: 12,
    fontSize: 16,
    fontFamily: openSansRegular
  },
  inputErrorText: {
    marginTop: 10,
    marginBottom: 4,
    color: textRed,
    fontSize: 14,
    fontFamily: openSansRegular
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: '#FB005B',
    shadowOpacity: 0.16,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden'
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: '#FB005B',
    shadowOpacity: 0.16,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    color: '#FB005B',
    marginBottom: 20,
    fontFamily: openSansBold,
    fontSize: 15,
    textAlign: 'center'
  },
  created: {
    fontFamily: openSansBold,
    fontSize: 11,
    textAlign: 'center'
  },
  tagline: {
    color: textColor,
    fontSize: 16
  },
  label:{
    marginTop: 32,
    marginBottom: 4,
    fontSize: 16,
    fontFamily: openSansBold
  },
  largeText: {
        marginTop: 8,
        marginBottom: 20,
        fontSize: 20,
        fontFamily: openSansBold,
        color: textColor
  }
});

export default globalStyles;
