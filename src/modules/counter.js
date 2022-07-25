const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE'; // 액션 타입 정의. 액션 타입 대문자로 정의, 문자열 내용은 '모듈명/액션명'형태로 작성

// 액션 생성 함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE }); // export 붙임 - 추후 이 함수를 다른 파일에서 불러와 사용 가능

const initialState = { 
    number: 0
};

function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                number: state.number + 1
            };
        case DECREASE:
            return {
                number: state.number -1
            };
        default:
            return state;
    }
}

export default counter;