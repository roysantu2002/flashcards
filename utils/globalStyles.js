import { StyleSheet } from 'react-native';
import { bgDarkPink, textColor, textRed, white } from './colors';
import { robotoMedium, robotoRegular } from './fonts';

const globalStyles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    marginTop: "20%",
    marginLeft: 16,
    marginRight: 16,
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'flex-start'
    
  },
  title: {
    marginTop: "15%",
    // marginBottom: "60%",
    textAlign: "center",
    fontSize: 30,
    fontFamily: robotoMedium,
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
    fontFamily: robotoMedium,
    textTransform: 'uppercase'
  },
  btnSecondaryText: {
    color: bgDarkPink,
    fontSize: 14,
    fontFamily: robotoMedium,
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
    fontFamily: robotoRegular
  },
  inputErrorText: {
    marginTop: 10,
    marginBottom: 4,
    color: textRed,
    fontSize: 14,
    fontFamily: robotoMedium,
  }
});

export default globalStyles;
