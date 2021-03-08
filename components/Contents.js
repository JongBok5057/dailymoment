import styled from 'styled-components';

const H2 = styled.div `
    h2 {
        font-weight: 600;
        fonst-size: 50px;
        text-align: center;
    }
`;

const Contents = () => {
    return (
        <div>
            <div>
                <section>
                    <div>
                        <H2>
                            <h2>나만의 개성있는 스타일을 공유하세요!</h2>
                        </H2>    
                    </div>
                    <div>
                        <img src="" alt="스타일 이미지 입니다." />
                        <img src="" alt="스타일 이미지 입니다." />
                        <img src="" alt="스타일 이미지 입니다." />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Contents;