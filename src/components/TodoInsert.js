import {MdAdd} from "react-icons/md";
import './TodoInsert.scss';
import {useCallback, useState} from "react";

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');

    // 최초 렌더링 시에만 함수 생성하도록 usecallback 사용
    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(value); //부모컴포넌트의 함수를 호출
            setValue('');

            e.preventDefault();
        },
        [onInsert, value],
    )

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input type="text"
                placeholder="할 일을 입력하세요."
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                <MdAdd/>
            </button>
        </form>
    )
};

export default TodoInsert;