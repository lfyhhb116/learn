import {StyleSheet} from "react-native";
import Color from './color';
import Dimen from './dimen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.cFFFFFF,
    },

    bg: {
        backgroundColor: Color.cFFFFFF,
    },

    content: {
        flex: 1,
    },

    s14cFFFFFF: {
        fontSize: Dimen.s14,
        color: Color.cFFFFFF,
    },

    s16c999999: {
        fontSize: Dimen.s16,
        color: Color.c999999,
    },

    s16c333333: {
        fontSize: Dimen.s16,
        color: Color.c333333,
    },

    s18c000000: {
        fontSize: Dimen.s18,
        color: Color.c000000,
    },

    s18cFFFFFF: {
        fontSize: Dimen.s18,
        color: Color.cFFFFFF,
    },
});

export default styles;