/**
 * Author   : unadlib
 * Date     : 2017/7/30
 * Time     : 下午6:12
 * Project [ cook-react-native ] Coded on WebStorm.
 */


import {handleActions, createActions, combineActions} from 'redux-actions';
import actionTypes from '../../actionTypes';

const {GOODS: {MODEL_UPDATE}} = actionTypes;
export const {
    goodsModelUpdate,
} = createActions({
    [MODEL_UPDATE]: (data) => ({
        model: data
    }),
});
export default handleActions({
    [goodsModelUpdate]: (state, action) => ({
        ...state,
        ...action.payload.model
    })
}, {});