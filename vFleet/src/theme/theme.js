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
    paddingVertical: 20
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
    // fab: {
    //   position: 'absolute',
    //   margin: 20,
    //   right: 0,
    //   bottom: 10,
    //   backgroundColor: colors.warning
    // },
    fabvalid: {
      position: 'absolute',
      marginTop: 20,
      right: 0,
      bottom: 10,
      backgroundColor: colors.warning,
      justifyContent: 'center',
      alignItems: 'center'
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
      marginTop: -17,
      color: colors.warning,
      marginBottom: 15,
      fontSize: 8,
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
      flex: 1,
      marginTop: 40,
      backgroundColor: colors.dark
    },
    immatInput: {
      marginTop: 60,
      backgroundColor: colors.dark
    },
    welcomeMsg: {
      padding: 10,
      margin: 8,
      marginTop: 200,
      color: colors.light,
      backgroundColor: colors.light,
      borderWidth: 2,
      borderColor:colors.warning,
    },
    checkRemember: {
      right: 0,
      backgroundColor: colors.warning,
      padding: 2
    }
  })

  export default styles



