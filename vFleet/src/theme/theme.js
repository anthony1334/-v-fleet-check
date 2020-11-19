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
    titleContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    },
    title: {
      fontSize: 20,
      color: colors.secondary
    },
    lottieView: {
        position: 'absolute',
        top: -60
    },
    fab: {
      position: 'absolute',
      margin: 20,
      right: 0,
      bottom: 10,
      backgroundColor: colors.warning
    },
    headerContainer: {
        backgroundColor: colors.warning
    },
    headerContainerTitle: {
        color: colors.light
    }
  })

  export default styles



