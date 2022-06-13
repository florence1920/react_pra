// const MyComponent = ({name, children}) => {
//     return(
//         <div>
//             안녕하세요 제 이름은 {name}입니다.<br />
//             안녕은 영어로 {children}
//         </div>
//     );
// };

// MyComponent.defaultProps = {
//     name : '기본이름'
// }

// export default MyComponent;

import React , {Component} from 'react';
import PropTypes from 'prop-types';

// 클래스형 컴포넌트
class MyComponent extends Component {
    render(){
        const {name, favoriteNumber, children} = this.props;
        return (
            <div>
                안녕하세요 제 이름은 {name} 입니다.<br/>
                안녕은 영어로 {children} 입니다. <br/>
                제가 좋아하는 숫자는 {favoriteNumber}입니다.
            </div>
        )
    }
}

MyComponent.defaultProps = {
    name : '기본름'
}

MyComponent.propTypes = {
    name : PropTypes.string,
    favoriteNumber : PropTypes.number.isRequired
}

export default MyComponent;