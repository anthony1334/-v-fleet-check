import { StyleSheet } from 'react-native'

export const colors = {
    primary: 'rgba(51, 101, 138, 1)',
    secondary: 'rgba(134, 187, 216, 1)',
    dark: 'rgba(47, 72, 88, 1)',
    warning: 'rgba(246, 174, 45, 1)',
    danger: 'rgba(242, 100, 25, 1)',
    light: 'rgba(255, 255, 255, 1)'
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: colors.dark,
    paddingHorizontal: 10,
    paddingVertical: 20,
    height: '100%'
    },
    // titleContainer: {
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   flex: 1
    // },
    lottieView: {
        position: 'absolute',
        top: -60
    },
    defaultBackground: {
      backgroundColor: colors.dark,
      color: colors.light
    },
    defaultFontColor: {
      color: colors.light
    },
    fabvalid: {
      backgroundColor: colors.warning,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20
    },
    bottomLocked: {
      backgroundColor: colors.dark,
      flex: 1,
      justifyContent: 'flex-end'
    },
    validButton: {
      backgroundColor: colors.warning
    },
    idMdp: {
      marginTop: 10,
      right: 0,
      bottom: 10,
      backgroundColor: colors.secondary
    },
    headerContainer: {
        backgroundColor: colors.warning
    },
    headerContainerTitle: {
        color: colors.light
    },
    // buttonfab: {
    //   position: 'relative',
    //   margin: 20,
    //   right: 0,
    //   bottom: 10,
    //   backgroundColor: colors.warning
    // },
    errorMsg: {
      textAlign: 'center',
      color: colors.danger,
      fontSize: 16,
    },
    textRemember: {
      color: colors.dark,
      marginLeft: 130,
      fontSize: 10,
    },
    remember: {
      color: colors.warning,
      backgroundColor: colors.warning
    },
    loginStyle: {
      backgroundColor: colors.dark
    },
    immatInput: {
      backgroundColor: colors.dark
    },
    welcomeMsg: {
      padding: 10,
      margin: 8,
      color: colors.light,
      backgroundColor: colors.light,
      borderWidth: 2,
      borderColor:colors.warning,
    },
    checkRemember: {
      backgroundColor: colors.secondary,
    },
    boldText: {
      fontWeight: 'bold'
    }
  })

  export default styles



